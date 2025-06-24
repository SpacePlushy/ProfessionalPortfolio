import express, { type Express } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // Create a basic Vite dev server
  const vite = await createViteServer({
    root: path.resolve(__dirname, "../client"),
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "spa", // Changed to SPA mode which is more appropriate for this app
  });

  console.log("Vite middleware configured with root:", path.resolve(__dirname, "../client"));
  
  // Use Vite's middleware
  app.use(vite.middlewares);
  
  // Fallback handler for SPA routing
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    console.log(`[SPA-FALLBACK] Handling: ${url}`);

    try {
      // Get the absolute path to index.html
      const indexPath = path.resolve(__dirname, "../client/index.html");
      console.log(`Reading index.html from: ${indexPath}`);
      
      // Read the index.html file
      let html = await fs.promises.readFile(indexPath, "utf-8");
      
      // Apply Vite HTML transforms
      html = await vite.transformIndexHtml(url, html);
      
      // Send the transformed HTML
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      console.error("Error serving index.html:", e);
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

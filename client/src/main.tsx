import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";

// Adding a small delay before hydration to ensure the DOM is fully ready
document.addEventListener("DOMContentLoaded", () => {
  // Add a loading class to the body to control initial visibility
  document.body.classList.add("is-loading");
  
  // Short delay for consistent load experience
  setTimeout(() => {
    const root = createRoot(document.getElementById("root")!);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    
    // Remove loading class after the app has mounted
    setTimeout(() => {
      document.body.classList.remove("is-loading");
    }, 100);
  }, 100);
});

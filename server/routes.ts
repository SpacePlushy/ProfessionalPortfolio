import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get contact form submissions
  app.post('/api/contact', (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // In a real application, you'd save this to a database
      // or send an email. For now, we'll just return success.
      
      return res.status(200).json({ 
        message: 'Message received successfully',
        success: true
      });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      return res.status(500).json({ message: 'Server error processing your request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

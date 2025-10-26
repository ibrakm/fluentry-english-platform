import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { saveTestResult } from "./db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json()); // Middleware to parse JSON bodies
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // New API endpoint to save test results
  app.post("/api/save-result", (req, res) => {
    const { email, result } = req.body;

    if (!email || !result) {
      return res.status(400).json({ error: "Missing email or result" });
    }

    // Save result to the database
    const success = saveTestResult(email, result);

    if (success) {
      res.status(201).json({ message: "Test result saved successfully" });
    } else {
      res.status(500).json({ error: "Failed to save test result" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);

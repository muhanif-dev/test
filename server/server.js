import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

dotenv.config();

dotenv.config();

const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://test-backend-beryl-theta.vercel.app/"
  ]
}));


const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MyNotes backend is running successfully!",
  });
});

// Start server after database connection
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
startServer();

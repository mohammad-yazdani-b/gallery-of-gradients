import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import photos from "./data/photos.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/api/photos", (req, res) => {
  res.json(photos);
});

app.get("/api/photos/:id", (req, res) => {
  const item = photos.find(p => p.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
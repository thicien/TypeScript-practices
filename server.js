import express from "express";
import multer from "multer";
import whisper from "whisper-node";
import path from "path";
import fs from "fs";

const app = express();
const upload = multer({ dest: "uploads/" });

// Serve frontend files
app.use(express.static("public"));

app.post("/transcribe", upload.single("audio"), async (req, res) => {
  try {
    const filePath = req.file.path;

    console.log("Transcribing:", filePath);

    // Transcribe with Whisper.cpp (whisper-node)
    const text = await whisper(filePath);

    // Delete uploaded file after transcription
    fs.unlinkSync(filePath);

    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Transcription failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

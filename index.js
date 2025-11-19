import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function transcribeAudio() {
  const response = await client.audio.transcriptions.create({
    file: fs.createReadStream("./audio.mp3"),  
    model: "whisper-1",                        
    response_format: "text"                   
  });

  console.log("Transcription:");
  console.log(response);
}

transcribeAudio();

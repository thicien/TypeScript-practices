import fs from "fs";
import dotenv from 'dotenv';
import OpenAI from "openai";
dotenv.config()
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function transcribeAudio() {
    const response = await client.responses.create({
      model:"gpt-5.1",
      input:"What does LGBTQ stands for ?"
  })
  console.log(response);
}

transcribeAudio();

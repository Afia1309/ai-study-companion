import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generate", async (req, res) => {
  try {
    const { notes, mode } = req.body;

    let prompt = "";

    if (mode === "quiz") {
      prompt = `
Create a multiple choice quiz based on the following notes.
Include 5-10 questions with 4 answer choices each (A, B, C, D).
Mark the correct answer for each question.

Format:
Question 1: [question text]
A) [option]
B) [option]
C) [option]
D) [option]
Correct Answer: [letter]

Then add a blank line between questions.

Notes:
${notes}
`;
    }

    else if (mode === "flashcards") {
      prompt = `
Create 10-15 flashcards from the following notes.
Each flashcard should have a term/concept on one side and its definition/explanation on the other.

Format each flashcard as:
TERM: [concept or term]
DEFINITION: [clear, concise definition or explanation]

Then add a blank line between flashcards.

Notes:
${notes}
`;
    }

    else if (mode === "practice") {
      prompt = `
Create 8-12 practice questions from these notes.
Include a mix of short answer questions and concept-based questions.
After each question, provide a detailed answer.

Format:
Q1: [question]
A1: [detailed answer]

Q2: [question]
A2: [detailed answer]

Notes:
${notes}
`;
    }

    else {
      // Default: study_guide
      prompt = `
Create a comprehensive, well-structured study guide from these notes.

Include:
1. **Summary**: A brief overview (2-3 paragraphs)
2. **Key Concepts**: List the main ideas and topics covered
3. **Important Definitions**: Define key terms
4. **Practice Questions**: 5-7 potential exam questions

Make it clear, organized, and easy to study from.

Notes:
${notes}
`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert academic study assistant who helps students learn effectively. You create clear, organized study materials that help students understand and retain information.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    res.json({ output: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
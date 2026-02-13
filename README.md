# ai-study-companion
An AI-powered study tool that transforms lecture notes into structured study materials. Built with intentional prompt engineering and a focus on practical learning outcomes.

 Project Overview

This project demonstrates how to effectively leverage AI as a co-pilot for student success. I designed a system that:

- **Structures ambiguous input** → Converts raw lecture notes into organized study materials
- **Adapts to learning modes** → Different study strategies for different learning objectives
- **Maintains quality control** → Prompt engineering ensures consistent, educational outputs

# Features

# Four Study Modes

1. **📖 Study Guides** - Comprehensive summaries with key concepts, definitions, and overview
2. **📊 Quizzes** - Multiple choice questions with answers for self-testing
3. **🎴 Flashcards** - Term/definition pairs optimized for memorization
4. **❓ Practice Questions** - Short answer questions with detailed explanations

### Design Philosophy

**AI as a Study Partner, Not a Replacement**

The system doesn't just dump content through GPT. Each mode uses carefully crafted prompts that:
- Specify exact output formats for consistency
- Request pedagogically sound structures (e.g., mixing question types)
- Include system instructions that establish AI's role as an "expert academic study assistant"
- Control output quality through explicit formatting requirements

## 🛠️ Tech Stack

**Frontend**
- Vanilla HTML/CSS/JavaScript
- Custom gradient design with floating animations
- Responsive layout for mobile and desktop

**Backend**
- Node.js + Express server
- OpenAI GPT-4o-mini API
- Environment-based API key management

**Deployment Ready**
- CORS enabled for cross-origin requests
- Static file serving from Express
- Error handling and validation

##How It Works

# The AI Integration Strategy

```javascript
// Each mode gets a different, carefully designed prompt
if (mode === "quiz") {
  prompt = `
Create a multiple choice quiz based on the following notes.
Include 5-10 questions with 4 answer choices each (A, B, C, D).
Mark the correct answer for each question.
Format: [specific structure]
`;
}
```
**Why This Matters:**
- I'm not asking AI to "make quiz questions" - I'm giving it a structured template
- Format specifications ensure consistent, parseable output
- The system message establishes context: "You are an expert academic study assistant"
- This demonstrates understanding of prompt engineering, not blind AI usage

### User Flow

1. **Student pastes notes** → Raw, unstructured lecture content
2. **Selects study mode** → Quiz, flashcards, study guide, or practice questions
3. **Backend processes** → Constructs mode-specific prompt with formatting rules
4. **OpenAI generates** → Returns structured educational content
5. **Frontend displays** → Clean, formatted study material

## 📁 Project Structure

```
ai-study-companion/
├── public/
│   └── index.html          # Frontend with embedded CSS/JS
├── server/
│   ├── index.js            # Express server + OpenAI integration
│   ├── package.json        # Dependencies
│   ├── package-lock.json
│   └── .env                # API keys (not in repo)
└── README.md
```
##  Security Considerations

- API keys stored in `.env` (never committed to Git)
- CORS configured for production deployment
- Input validation on both client and server
- Error handling prevents information leakage

# Future Enhancements
- [ ] User authentication and note history
- [ ] Export to PDF/Anki format
- [ ] Spaced repetition scheduling
- [ ] Multi-language support
- [ ] Image/PDF upload support
- [ ] Progress tracking and analytics


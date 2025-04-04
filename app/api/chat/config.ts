// Configuration for the AI chatbot
export const config = {
  // OpenAI API key will be loaded from environment variables
  // Make sure to set OPENAI_API_KEY in your Vercel environment variables
  openaiApiKey: process.env.OPENAI_API_KEY,

  // Default model to use
  model: "gpt-4o",

  // Temperature controls randomness (0-1)
  temperature: 0.7,

  // Maximum tokens to generate
  maxTokens: 500,
}


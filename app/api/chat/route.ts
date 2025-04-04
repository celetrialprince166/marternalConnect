import { OpenAIStream, StreamingTextResponse } from "ai"
import { openai } from "@ai-sdk/openai"

// Set the runtime to edge for best performance
export const runtime = "nodejs"

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Create a system prompt for maternal health
  const systemPrompt = `You are MaternalConnect AI, a helpful assistant for pregnant women.
  - Provide supportive, accurate information about pregnancy, maternal health, and childcare.
  - Be empathetic and reassuring in your responses.
  - For medical emergencies, always advise users to contact their healthcare provider immediately.
  - Keep responses concise and easy to understand.
  - When you don't know something, be honest and suggest consulting with a healthcare professional.
  - Never provide medical diagnoses or prescribe treatments.`

  // Format messages for the AI model
  const formattedMessages = [
    { role: "system", content: systemPrompt },
    ...messages.map((message: any) => ({
      role: message.role,
      content: message.content,
    })),
  ]

  // Generate a streaming response
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: formattedMessages,
    temperature: 0.7,
    max_tokens: 500,
    stream: true,
  })

  // Convert the response to a readable stream
  const stream = OpenAIStream(response)

  // Return the stream as a response
  return new StreamingTextResponse(stream)
}


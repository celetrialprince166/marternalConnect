"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Phone, Send, Video } from "lucide-react"

export default function MessagesPage() {
  const [message, setMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real app, this would send the message to the backend
      setMessage("")
    }
  }

  return (
    <div className="flex flex-col h-screen bg-muted/20">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container flex items-center h-16 px-4">
          <Link href="/dashboard" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="Rebecca Taylor" />
              <AvatarFallback>RT</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-medium text-sm">Rebecca Taylor</h2>
              <p className="text-xs text-muted-foreground">Certified Midwife</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="text-center text-xs text-muted-foreground">Today</div>

          {/* Received message */}
          <div className="flex gap-2 items-end">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Rebecca Taylor" />
              <AvatarFallback>RT</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-2xl rounded-bl-none px-4 py-2 max-w-[80%]">
              <p>Good morning Sarah! How are you feeling today?</p>
            </div>
            <span className="text-xs text-muted-foreground">9:30 AM</span>
          </div>

          {/* Sent message */}
          <div className="flex gap-2 items-end justify-end">
            <span className="text-xs text-muted-foreground">9:32 AM</span>
            <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-none px-4 py-2 max-w-[80%]">
              <p>Hi Rebecca! I'm feeling pretty good today. The morning sickness has finally subsided.</p>
            </div>
          </div>

          {/* Received message */}
          <div className="flex gap-2 items-end">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Rebecca Taylor" />
              <AvatarFallback>RT</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-2xl rounded-bl-none px-4 py-2 max-w-[80%]">
              <p>That's great news! Have you been able to keep up with the prenatal vitamins we discussed?</p>
            </div>
            <span className="text-xs text-muted-foreground">9:35 AM</span>
          </div>

          {/* Sent message */}
          <div className="flex gap-2 items-end justify-end">
            <span className="text-xs text-muted-foreground">9:36 AM</span>
            <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-none px-4 py-2 max-w-[80%]">
              <p>Yes, I've been taking them daily as recommended. I also started the iron supplement you suggested.</p>
            </div>
          </div>

          {/* Received message */}
          <div className="flex gap-2 items-end">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Rebecca Taylor" />
              <AvatarFallback>RT</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-2xl rounded-bl-none px-4 py-2 max-w-[80%]">
              <p>
                Perfect! I'm looking forward to our appointment tomorrow. We'll do a routine check-up and discuss your
                birth plan options. Do you have any specific questions you'd like to address?
              </p>
            </div>
            <span className="text-xs text-muted-foreground">9:40 AM</span>
          </div>

          {/* Sent message */}
          <div className="flex gap-2 items-end justify-end">
            <span className="text-xs text-muted-foreground">9:42 AM</span>
            <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-none px-4 py-2 max-w-[80%]">
              <p>
                Yes, I've been researching water births and would like to know if that's an option at the hospital.
                Also, my mother is asking if she can be present during delivery.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t p-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2 max-w-3xl mx-auto">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!message.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </footer>
    </div>
  )
}


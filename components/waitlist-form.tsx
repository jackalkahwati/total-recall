"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md text-center">
          <p className="font-bold">You're on the list!</p>
          <p className="text-sm mt-2">We'll be in touch soon with updates.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="py-3 px-4"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3"
          >
            {isSubmitting ? "Joining..." : "Join the Wait-List"}
          </Button>
        </form>
      )}
    </div>
  )
}

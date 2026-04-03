"use client"

import * as React from "react"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/1234567890" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  )
}

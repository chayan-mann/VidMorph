
import type React from "react"
import {
  ClerkProvider, SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Video-to-Video Transformation Tool",
  description: "Transform your videos using AI with the Hunyuan-Video Model",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-background text-foreground`}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}


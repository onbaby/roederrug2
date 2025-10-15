import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import "./fonts.css"

import { Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const sourceSerif = Source_Serif_4({ 
  weight: ["200","300","400","500","600","700","800","900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Roeder's Rugs - Custom Handmade Rugs",
  description:
    "Custom handmade rugs based on your design. Quality craftsmanship, personalized process, and unique one-of-a-kind rugs.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-instrument ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

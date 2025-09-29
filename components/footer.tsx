"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageCircle, Facebook, Instagram, CreditCard, Truck, Shield, RotateCcw, X } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("footer")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <>
      <footer id="footer" className="bg-background border-t">
        {/* Email Signup Section */}
        <div className="bg-primary text-primary-foreground py-12 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h3
              className={`heading-display text-2xl md:text-3xl mb-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              10% OFF YOUR FIRST ORDER
            </h3>
            <p
              className={`text-primary-foreground/90 mb-6 max-w-md mx-auto transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Subscribe to our newsletter for exclusive offers, design inspiration, and rug care tips
            </p>

            <form
              onSubmit={handleEmailSubmit}
              className={`max-w-md mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground text-foreground border-0 focus:ring-2 focus:ring-primary-foreground/20 transition-all duration-300"
                  required
                />
                <Button
                  type="submit"
                  variant="secondary"
                  disabled={isSubmitted}
                  className={`transition-all duration-300 hover:scale-105 ${
                    isSubmitted ? "animate-pulse bg-green-500 text-white" : ""
                  }`}
                >
                  {isSubmitted ? "Subscribed!" : "Subscribe"}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Quick Links */}
              

              {/* Services */}
              

              {/* About */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <h4 className="heading-serif text-lg font-medium mb-4 hover:text-primary transition-colors duration-300">
                  About Roeder's Rugs
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Master craftsperson Maria Roeder brings over 15 years of experience in hand-tufted rug creation. Each
                  piece is carefully crafted with premium materials and attention to detail.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-rotate-12"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div
                className={`transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <h4 className="heading-serif text-lg font-medium mb-4 hover:text-primary transition-colors duration-300">
                  Why Choose Us
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: Truck, text: "Free Worldwide Shipping" },
                    { icon: Shield, text: "Quality Guarantee" },
                    { icon: RotateCcw, text: "30-Day Returns" },
                    { icon: CreditCard, text: "Secure Payments" },
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={item.text}
                        className="flex items-center gap-3 text-muted-foreground group cursor-pointer hover:text-primary transition-all duration-300"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                          {item.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="border-t py-6">
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">We accept:</span>
                <div className="flex gap-2">
                  {["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"].map((method, index) => (
                    <div
                      key={method}
                      className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:scale-110 transition-all duration-300 cursor-pointer"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {method.slice(0, 2)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  © 2025 Roeder's Rugs. All rights reserved.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <Card className="w-80 h-96 shadow-xl animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Chat with us</h4>
                  <p className="text-xs text-muted-foreground">We're here to help!</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-300"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 flex-1 flex items-center justify-center">
              <p className="text-sm text-muted-foreground text-center animate-in fade-in duration-500 delay-200">
                Hi! How can I help you with your custom rug project?
              </p>
            </div>
            <div className="p-4 border-t">
              <Button className="w-full hover:scale-105 transition-transform duration-300" size="sm">
                Start Conversation
              </Button>
            </div>
          </Card>
        ) : (
          <Button
            onClick={() => setIsChatOpen(true)}
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            size="sm"
          >
            <MessageCircle className="h-6 w-6 hover:rotate-12 transition-transform duration-300" />
          </Button>
        )}
      </div>
    </>
  )
}

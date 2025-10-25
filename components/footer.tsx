"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Truck, Shield } from "lucide-react"

export function Footer() {
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


  return (
    <>
      <footer id="footer" className="bg-white border-t">
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
                  We bring over the best experience for hand-tufted rug creation. Each
                  piece is carefully crafted with high quality materials and attention to detail.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/roeders.rugs/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
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

    </>
  )
}

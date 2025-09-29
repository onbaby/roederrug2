"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Search, User, ShoppingCart, Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="w-full">
      {/* Feature blurbs bar */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            <span className="animate-pulse">Order your custom rug</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline animate-bounce">Worldwide shipping</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden sm:inline">Buy Now Pay Later With Klarna</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`bg-background border-b transition-all duration-500 ${
          isScrolled ? "shadow-lg backdrop-blur-sm bg-background/95" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className={`heading-serif text-2xl font-medium text-foreground transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "text-primary" : ""
                }`}
              >
                Roeder's Rugs
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              <a
                href="/"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group">
                  I Need A Custom Rug
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="animate-in slide-in-from-top-2 duration-300">
                  <DropdownMenuItem className="hover:bg-primary/10 transition-colors duration-200">
                    Custom Designed Rugs
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary/10 transition-colors duration-200">
                    Business Logo Rugs
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary/10 transition-colors duration-200">
                    Sports Logo Rugs
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary/10 transition-colors duration-200">
                    Custom Car Mats
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              
              <a
                href="/designs"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Designs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/contact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>

              <DropdownMenu>
                
                <DropdownMenuContent className="animate-in slide-in-from-top-2 duration-300">
                  <DropdownMenuItem className="hover:bg-primary/10 transition-colors duration-200">
                    Our Story
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary/10 transition-colors duration-200">
                    How It Works
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary/10 transition-colors duration-200">
                    Quality Promise
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right side icons */}
            
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t py-4 animate-in slide-in-from-top-2 duration-300">
              <nav className="flex flex-col space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/custom", label: "I Need A Custom Rug" },
                  { href: "/shop", label: "Shop" },
                  { href: "/designs", label: "Designs" },
                  { href: "/contact", label: "Contact" },
                  { href: "/about", label: "About" },
                ].map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

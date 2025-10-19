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
      {/* Main navigation */}
      <div
        className={`bg-background border-b transition-all duration-500 ${
          isScrolled ? "shadow-lg backdrop-blur-sm bg-background/95" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16 relative">
            {/* Center Logo */}
            <div className="flex items-center justify-center">
              <img
                src="/548509575_17890761447341544_4458477934078795091_n.png"
                alt="Roeder's Rugs"
                className="h-14 w-14 md:h-12 md:w-12 object-contain transition-all duration-300 hover:scale-110"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5 absolute right-4">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-all duration-300 absolute left-4"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden border-t overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}>
              <nav className="flex flex-col space-y-4">
                {[
                  { href: "#product-categories", label: "Our Rugs" },
                  { href: "#how-it-works", label: "How It Works" },
                  { href: "#testimonials-about", label: "Customer Gallery" },
                  { href: "#footer", label: "Contact" },
                ].map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      const element = document.querySelector(item.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className={`text-foreground hover:text-primary transition-all duration-500 ease-in-out hover:translate-x-2 transform ${
                      isMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

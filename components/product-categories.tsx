"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function ProductCategories() {
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

    const element = document.getElementById("product-categories")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const categories = [
    {
      title: "Custom Designed Rugs",
      description: "Your design on a handmade tufted rug, complete customisation over colours, borders, designs.",
      image: "/custom.jpeg",
      cta: "Start Your Rug",
      href: "https://forms.gle/FCDnzwFqdadM2X4v5",
    },
    {
      title: "Business Logo Rugs",
      description:
        "Level up your brand with a customised tufted rug using your logo, slogan or other image that represents your business.",
      image: "/business.jpeg",
      cta: "Business Rugs",
      href: "https://forms.gle/FCDnzwFqdadM2X4v5",
    },
    {
      title: "Keyboard Rugs",
      description:
        "These rugs serve as unique decor pieces, adding personality to offices, gaming rooms, or tech-inspired spaces.",
      image: "/keyboard.webp",
      cta: "Custom Request",
      href: "https://forms.gle/FCDnzwFqdadM2X4v5",
    },
    {
      title: "Custom Sports Logo Rugs",
      description: "Turn your favourite teams logo into a tufted rug, perfect for any man cave or sports lover.",
      image: "/sports.jpg",
      cta: "Start Your Rug",
      href: "https://forms.gle/FCDnzwFqdadM2X4v5",
    },
    {
      title: "Custom Car Mats",
      description: "Custom sized and fitted for any car, van or truck.",
      image: "/carrug.jpg",
      cta: "Submit Request",
      href: "https://forms.gle/FCDnzwFqdadM2X4v5",
    },
  ]

  return (
    <section id="product-categories" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2
            className={`heading-section text-4xl md:text-5xl lg:text-5xl mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Types Of Rugs
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-sm bg-gray-500/10 transition-all duration-500 flex flex-col transform hover:-translate-y-2 hover:rotate-1 p-0 rounded-none ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/0 z-10" />
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    category.title === "Custom Designed Rugs" 
                      ? "group-hover:scale-140" 
                      : "group-hover:scale-110"
                  }`}
                />
              </div>

              <div className="p-4 flex flex-col flex-1 text-center">
                <h3 className="heading-serif text-xl font-bold mb-2 text-balance">
                  {category.title}
                </h3>
                <p className="text-gray-800 mb-4 leading-relaxed text-sm flex-1 text-center">
                  {category.description}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full bg-transparent mt-auto border-0 hover:text-foreground"
                  asChild
                >
                  <a href={category.href} className="flex items-center justify-center gap-1">
                    {category.cta}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {categories.map((category, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 shadow-sm bg-gray-500/10 transition-all duration-500 flex flex-col transform hover:-translate-y-2 flex-shrink-0 w-[calc(100vw-2rem)] snap-center p-0 rounded-none ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/0 z-10" />
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      category.title === "Custom Designed Rugs" 
                        ? "group-hover:scale-140" 
                        : "group-hover:scale-110"
                    }`}
                  />
                </div>

                <div className="px-8 pt-2 pb-8 flex flex-col flex-1 text-center">
                  <h3 className="heading-serif text-2xl font-bold mb-3 text-balance">
                    {category.title}
                  </h3>
                  <p className="text-gray-800 mb-6 leading-relaxed text-base flex-1 text-center">
                    {category.description}
                  </p>

                  <Button
                    variant="ghost"
                    size="default"
                    className="w-full bg-transparent mt-auto border-0 hover:text-foreground"
                    asChild
                  >
                    <a href={category.href} className="flex items-center justify-center gap-2">
                      {category.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

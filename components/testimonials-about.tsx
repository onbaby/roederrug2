"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsAbout() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote:
        "if you in the A, and need a rug, go to Roeder fs.",
      author: "Sadiq R.",
      handle: "@sadiqrasheed25",
      image: "/placeholder.svg?key=test1",
      rating: 5,
    },
    {
      quote:
        "Roeder is the best rugger",
      author: "Owen B.",
      handle: "@owen.bailey906",
      image: "/placeholder.svg?key=test2",
      rating: 5,
    },
    {
      quote:
        "I ordered a goomba rug. It's so good. I love it.",
      author: "Raul R.",
      handle: "@raul.ram11",
      image: "/placeholder.svg?key=test3",
      rating: 5,
    },
    {
      quote:
        "gets you right",
      author: "David N.",
      handle: "@d_nealz3",
      image: "/placeholder.svg?key=test4",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 200)
  }

  const prevTestimonial = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 200)
  }

  const goToTestimonial = (index: number) => {
    if (index !== currentTestimonial) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentTestimonial(index)
        setIsTransitioning(false)
      }, 200)
    }
  }

  return (
    <section id="testimonials-about" className="py-16 pb-20 md:pb-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2
            className={`heading-display text-3xl md:text-4xl lg:text-5xl mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Join 50+ Happy Customers
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            See what our customers are saying about their custom rug experience
          </p>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <Card
              className={`p-8 md:p-12 pt-12 md:pt-16 relative hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div
                className={`absolute top-6 left-6 text-primary/20 transition-all duration-500 ${
                  isTransitioning ? "rotate-180 scale-75" : "rotate-0 scale-100"
                }`}
              >
                <Quote className="h-12 w-12" />
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4  pb-5">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 text-yellow-400 fill-current transition-all duration-300 hover:scale-125 ${
                        isTransitioning ? "opacity-0 scale-75" : "opacity-100 scale-100"
                      }`}
                      style={{
                        animationDelay: `${i * 100}ms`,
                        transitionDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                </div>

                <blockquote
                  className={`text-lg md:text-xl text-foreground mb-6 leading-relaxed italic transition-all duration-500 ${
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div
                  className={`flex items-center justify-center transition-all duration-500 delay-100 ${
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="text-center">
                    <div className="font-medium">{testimonials[currentTestimonial].author}</div>
                    <div className="text-muted-foreground text-sm">{testimonials[currentTestimonial].handle}</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="hover:scale-110 hover:shadow-lg transition-all duration-300 hover:bg-primary/10 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4 hover:-translate-x-1 transition-transform duration-300" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                        index === currentTestimonial ? "bg-primary scale-125 animate-pulse" : "bg-border"
                      }`}
                      onClick={() => goToTestimonial(index)}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="hover:scale-110 hover:shadow-lg transition-all duration-300 hover:bg-primary/10 bg-transparent"
                >
                  <ChevronRight className="h-4 w-4 hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Customer Gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3
              className={`heading-display text-2xl md:text-3xl mb-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Customer Creations
            </h3>
            <p
              className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              See some of our favorite custom pieces created for happy customers
            </p>
          </div>

          {/* Custom Collage */}
          <div className="relative w-full h-[500px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl">
            {/* Mobile/Tablet: 2x2 Grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-4 md:gap-4 h-full lg:hidden">
              {/* Left Column */}
              <div className="flex flex-col gap-4 md:gap-4">
                <div className="relative flex-1 group overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src="/IMG_1089.jpeg"
                    alt="Custom Domo-kun Rug"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <div className="relative h-40 md:h-32 group overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src="/IMG_1094.jpeg"
                    alt="Custom Butterfly Rug"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 md:group-hover:scale-110"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="flex flex-col gap-4 md:gap-4">
                <div className="relative h-40 md:h-32 group overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src="/IMG_1439.jpg"
                    alt="Custom Mushroom Rug"
                    className="w-full h-full object-cover object-top md:object-center transition-all duration-500 group-hover:scale-105 md:group-hover:scale-110"
                    style={{ transform: 'translateY(-30px) scale(1.35)' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <div className="relative flex-1 group overflow-hidden rounded-xl md:rounded-2xl">
                  <img
                    src="/IMG_1249.jpeg"
                    alt="Custom Rose Rug"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Desktop: Single Row */}
            <div className="absolute inset-0 hidden lg:flex gap-6 h-full">
              <div className="relative flex-1 group overflow-hidden rounded-2xl">
                <img
                  src="/IMG_1089.jpeg"
                  alt="Custom Domo-kun Rug"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="relative flex-1 group overflow-hidden rounded-2xl">
                <img
                  src="/IMG_1094.jpeg"
                  alt="Custom Butterfly Rug"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="relative flex-1 group overflow-hidden rounded-2xl">
                <img
                  src="/IMG_1439.jpg"
                  alt="Custom Mushroom Rug"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ transform: 'translateY(-20px) scale(1.35)' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="relative flex-1 group overflow-hidden rounded-2xl">
                <img
                  src="/IMG_1249.jpeg"
                  alt="Custom Rose Rug"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

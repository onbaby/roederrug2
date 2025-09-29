"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Masonry from './Masonry'

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
        "The quality exceeded my expectations! My custom logo rug looks absolutely stunning in our office lobby. The attention to detail is remarkable.",
      author: "Sarah Mitchell",
      handle: "@sarahmdesign",
      image: "/placeholder.svg?key=test1",
      rating: 5,
    },
    {
      quote:
        "From design to delivery, the entire process was seamless. The team was incredibly helpful and the final product is exactly what I envisioned.",
      author: "Michael Chen",
      handle: "@mikechenart",
      image: "/placeholder.svg?key=test2",
      rating: 5,
    },
    {
      quote:
        "I've ordered three custom rugs now and each one has been perfect. The craftsmanship is outstanding and they really bring my spaces to life.",
      author: "Emma Rodriguez",
      handle: "@emmainteriors",
      image: "/placeholder.svg?key=test3",
      rating: 5,
    },
    {
      quote:
        "The keyboard rug for my gaming setup is incredible! It's become a conversation starter and the quality is top-notch. Highly recommend!",
      author: "Alex Thompson",
      handle: "@alexgaming",
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
            Join 250+ Happy Customers
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
              className={`p-8 md:p-12 relative hover:shadow-xl transition-all duration-500 ${
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
                <div className="flex justify-center mb-4">
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
                  className={`flex items-center justify-center gap-4 transition-all duration-500 delay-100 ${
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].author}
                    className={`w-12 h-12 rounded-full object-cover transition-all duration-500 hover:scale-110 ${
                      isTransitioning ? "scale-75 opacity-50" : "scale-100 opacity-100"
                    }`}
                  />
                  <div className="text-left">
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

        {/* About the Artist Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src="/placeholder.svg?key=artist"
                alt="Master craftsperson at work"
                className="w-full rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500"
              />
            </div>
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="heading-display text-2xl md:text-3xl mb-6 hover:text-primary transition-colors duration-300">
                About the Artist
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <p>Master craftsperson with over 15 years of experience in traditional rug making techniques.</p>
                </div>
                <div>
                  <p>
                    Each rug is hand-tufted with precision and care, ensuring every piece meets our highest quality
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Gallery */}
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

          <div className="h-[600px] md:h-[600px] mobile-masonry">
            <Masonry
              items={[
                {
                  id: "1",
                  img: "https://picsum.photos/id/1015/600/900?grayscale",
                  url: "https://example.com/one",
                  height: 400,
                },
                {
                  id: "2",
                  img: "https://picsum.photos/id/1011/600/750?grayscale",
                  url: "https://example.com/two",
                  height: 250,
                },
                {
                  id: "3",
                  img: "https://picsum.photos/id/1020/600/800?grayscale",
                  url: "https://example.com/three",
                  height: 600,
                },
                {
                  id: "4",
                  img: "https://picsum.photos/id/1025/600/650?grayscale",
                  url: "https://example.com/four",
                  height: 350,
                },
                {
                  id: "5",
                  img: "https://picsum.photos/id/1031/600/700?grayscale",
                  url: "https://example.com/five",
                  height: 450,
                },
                {
                  id: "6",
                  img: "https://picsum.photos/id/1035/600/550?grayscale",
                  url: "https://example.com/six",
                  height: 300,
                },
                {
                  id: "7",
                  img: "https://picsum.photos/id/1040/600/800?grayscale",
                  url: "https://example.com/seven",
                  height: 500,
                },
                {
                  id: "8",
                  img: "https://picsum.photos/id/1045/600/600?grayscale",
                  url: "https://example.com/eight",
                  height: 400,
                },
                {
                  id: "9",
                  img: "https://picsum.photos/id/1050/600/750?grayscale",
                  url: "https://example.com/nine",
                  height: 350,
                },
                {
                  id: "10",
                  img: "https://picsum.photos/id/1055/600/650?grayscale",
                  url: "https://example.com/ten",
                  height: 450,
                },
              ]}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

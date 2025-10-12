"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Lightbulb, FileText, CreditCard, Hammer, Truck } from "lucide-react"

export function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0)
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

    const element = document.getElementById("how-it-works")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: Lightbulb,
      title: "Imagine Your Design",
      description: "Visualize the rug shape, design, colours or browse designs on our Instagram and socials",
    },
    {
      icon: FileText,
      title: "Submit Custom Rug Request",
      description:
        "Use the custom rug request form to submit your design or dm any of our socials",
    },
    {
      icon: CreditCard,
      title: "Review & Place Order",
      description: "Review your custom design mockup and pricing. Once approved, secure your order with a deposit.",
    },
    {
      icon: Hammer,
      title: "Production",
      description:
        "Our skilled artisans hand-tuft your rug using premium materials. Each piece is carefully crafted with attention to detail.",
    },
    {
      icon: Truck,
      title: "Delivery",
      description:
        "Your finished rug is carefully packaged and shipped worldwide. Track your order and receive your one-of-a-kind piece.",
    },
  ]

  const nextStep = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
      setIsTransitioning(false)
    }, 150)
  }

  const prevStep = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
      setIsTransitioning(false)
    }, 150)
  }

  const goToStep = (index: number) => {
    if (index !== currentStep) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(index)
        setIsTransitioning(false)
      }, 150)
    }
  }

  const CurrentIcon = steps[currentStep].icon

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2
              className={`heading-display text-4xl md:text-5xl mb-8 transition-all duration-1000 lg:text-5xl font-light ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              How It Works
            </h2>
          </div>

          {/* Current Step Display - Desktop */}
          <div className="hidden md:block text-center mb-12">
            <div className="flex justify-center mb-6">
              <div
                className={`w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-700 ${
                  isTransitioning ? "scale-75 opacity-50 rotate-180" : "scale-100 opacity-100 rotate-0"
                } hover:scale-110 hover:bg-primary/20 hover:rotate-12`}
              >
                <CurrentIcon
                  className={`h-10 w-10 text-primary transition-all duration-700 ${
                    isTransitioning ? "rotate-180 scale-75" : "rotate-0 scale-100"
                  }`}
                />
              </div>
            </div>

            <h3
              className={`heading-display text-2xl md:text-3xl lg:text-4xl font-bold mb-6 transition-all duration-700 ${
                isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {steps[currentStep].title}
            </h3>
            <p
              className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-150 ${
                isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {steps[currentStep].description}
            </p>
            
            {/* Submit Button for Step 2 (Submit Custom Rug Request) */}
            {currentStep === 1 && (
              <div
                className={`mt-8 transition-all duration-500 delay-200 ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Submit Custom Request
                </Button>
              </div>
            )}
          </div>

          {/* Mobile 2x2 Grid Display */}
          <div className="md:hidden mb-12">
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto" style={{ gridTemplateAreas: '"item1 item2" "item3 item4" "item5 item5"' }}>
              {steps.map((step, index) => {
                const StepIcon = step.icon
                const isActive = index === currentStep
                const gridArea = `item${index + 1}`
                return (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-lg transition-all duration-500 cursor-pointer transform ${
                      isActive 
                        ? "bg-primary/10 scale-105 shadow-lg" 
                        : "bg-muted/50 hover:bg-muted hover:scale-102"
                    }`}
                    style={{ 
                      gridArea,
                      transitionDelay: `${index * 50}ms`
                    }}
                    onClick={() => goToStep(index)}
                  >
                    <div className="flex justify-center mb-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? "bg-primary/20 scale-110 rotate-12" : "bg-background"
                        }`}
                      >
                        <StepIcon
                          className={`h-6 w-6 transition-all duration-500 ${
                            isActive ? "text-primary scale-110" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                    </div>
                    <h4 className={`text-sm font-medium leading-tight transition-all duration-500 ${
                      isActive ? "text-foreground scale-105" : "text-muted-foreground"
                    }`}>
                      {step.title}
                    </h4>
                  </div>
                )
              })}
            </div>

            {/* Selected step details for mobile */}
            <div className="mt-8 text-center">
              <h3 className="heading-display text-xl font-bold mb-4">
                {steps[currentStep].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {steps[currentStep].description}
              </p>

              {/* Submit Button for Step 2 (Submit Custom Rug Request) - Mobile */}
              {currentStep === 1 && (
                <div className="mt-6">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2"
                  >
                    Submit Custom Request
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevStep}
              className="h-12 w-12 rounded-full border hover:scale-110 hover:shadow-lg transition-all duration-300 hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5 hover:-translate-x-1 transition-transform duration-300" />
            </Button>

            <div className="flex items-center gap-2">
              <span
                className={`text-lg font-medium transition-all duration-300 ${
                  isTransitioning ? "scale-110 text-primary" : "scale-100"
                }`}
              >
                {currentStep + 1}/{steps.length}
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextStep}
              className="h-12 w-12 rounded-full border hover:scale-110 hover:shadow-lg transition-all duration-300 hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5 hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Step Dots */}
          <div className="hidden md:flex justify-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentStep
                    ? "bg-primary scale-110 shadow-lg animate-pulse"
                    : "bg-border hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToStep(index)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="hidden md:block mt-8 max-w-md mx-auto">
            <div className="w-full bg-border rounded-full h-1">
              <div
                className="bg-primary h-1 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Award, Heart, Truck, Users } from "lucide-react"
import { useEffect, useState } from "react"
import Aurora from "./Aurora"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="relative h-[600px] lg:h-[700px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/AdobeStock_1516222218.jpeg"
            alt="Custom Rug Creation"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white text-center mx-auto">
            <h1
              className={`heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-balance transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Custom Rugs To Express Your Style
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 text-white/90 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
             
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 items-center sm:items-start transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-2 py-1 md:px-8 md:py-3 text-xs md:text-base transform hover:scale-105 transition-all duration-300 hover:shadow-lg w-80 md:w-auto"
              >
                Start Here
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground px-2 py-1 md:px-8 md:py-3 text-xs md:text-base bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-lg w-80 md:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Award,
                title: "Quality You Can Feel",
                description: "Built to last with care and precision in every thread",
                delay: "delay-100",
              },
              {
                icon: Heart,
                title: "One-of-a Kind Rugs",
                description: "Turn your vision into a statement piece made by hand",
                delay: "delay-200",
              },
              {
                icon: Users,
                title: "Personalised Process",
                description: "We work side-by-side from first sketch to final stitch",
                delay: "delay-300",
              },
              {
                icon: Truck,
                title: "50+ Rugs Made",
                description: "A proven track record of craftsmanship and happy homes",
                delay: "delay-400",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`p-2 text-center group cursor-pointer transition-all duration-700 ${feature.delay} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  } hover:transform hover:scale-105`}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:rotate-12">
                      <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="heading-serif text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

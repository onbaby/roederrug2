import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCategories } from "@/components/product-categories"
import { HowItWorks } from "@/components/how-it-works"
import { TestimonialsAbout } from "@/components/testimonials-about"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <HowItWorks />
        <TestimonialsAbout />
      </main>
      <Footer />
    </div>
  )
}


// components
import FeaturesSection from "@/features/home/components/features-section"
import HeroSection from "@/features/home/components/hero-section"

export default function Home() {
  return (
    <div className="bg-[#0E0E0E]">
      <main className="p-4 bg-[url(/heroBg.webp)] h-fit bg-cover bg-no-repeat bg-center ">
        <HeroSection />

      </main>

      <FeaturesSection />
    </div>
  )
}

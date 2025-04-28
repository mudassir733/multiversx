
// components
import EchosystemSection from "@/features/home/components/echosystem-section"
import FeaturedSlider from "@/features/home/components/featured-slider"
import FeaturesSection from "@/features/home/components/features-section"
import FooterNewsletter from "@/features/home/components/footer"
import HeroSection from "@/features/home/components/hero-section"
import ImageSlider2 from "@/features/home/components/image-slide2"
import ImageSlider from "@/features/home/components/image-slider"
import NewsSlider from "@/features/home/components/news-slider"
import PlanetSection from "@/features/home/components/planet-section"

export default function Home() {
  return (
    <div className="bg-[#0E0E0E]">
      <main className="p-4 bg-[url(/heroBg.webp)] h-fit bg-cover bg-no-repeat bg-center ">
        <HeroSection />

      </main>

      <FeaturesSection />
      <FeaturedSlider />
      <PlanetSection />
      <EchosystemSection />
      <div className="flex flex-col">
        <ImageSlider />
        <ImageSlider2 />
      </div>
      <NewsSlider />
      <FooterNewsletter />
    </div>
  )
}

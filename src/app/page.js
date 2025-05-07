
// components
import CTASection from "@/features/home/components/cta-section"
import EchosystemSection from "@/features/home/components/echosystem-section"
import FAQSection from "@/features/home/components/faq-section"
import FeaturedSlider from "@/features/home/components/featured-slider"
import FeaturesSection from "@/features/home/components/features-section"
import FooterNewsletter from "@/features/home/components/footer"
import HeroSection from "@/features/home/components/hero-section"
import ImageSlider2 from "@/features/home/components/image-slide2"
import ImageSlider from "@/features/home/components/image-slider"
import NewsSlider from "@/features/home/components/news-slider"
import PartnersSection from "@/features/home/components/partner-section"
import PlanetSection from "@/features/home/components/planet-section"
import RewardsSection from "@/features/home/components/rewards-section"

export default function Home() {
  return (
    <div className="bg-black">

      <HeroSection />



      <FeaturesSection />
      {/* <FeaturedSlider /> */}
      {/* <PlanetSection /> */}
      <EchosystemSection />
      {/* <div className="flex flex-col">
        <ImageSlider />
        <ImageSlider2 />
      </div> */}
      <RewardsSection />
      <PartnersSection />
      <NewsSlider />
      <CTASection />
      <FAQSection />
      <FooterNewsletter />
    </div>
  )
}


// components
import CTASection from "@/features/home/components/cta-section"
import EchosystemSection from "@/features/home/components/echosystem-section"
import FAQSection from "@/features/home/components/faq-section"
import FeaturesSection from "@/features/home/components/features-section"
import FooterNewsletter from "@/features/home/components/footer"
import HeroSection from "@/features/home/components/hero-section"
import NewsSlider from "@/features/home/components/news-slider"
import PartnersSection from "@/features/home/components/partner-section"
import PlanetSection from "@/features/home/components/planet-section"
import RewardsSection from "@/features/home/components/rewards-section"
import ScrollSection from "@/components/scrollSection"

export default function Home() {
  return (
    <div className="bg-black">
      <ScrollSection>
        <HeroSection />
      </ScrollSection>

      <ScrollSection>
        <FeaturesSection />
      </ScrollSection>

      <ScrollSection>
        <PlanetSection />
      </ScrollSection>

      <ScrollSection>
        <EchosystemSection />
      </ScrollSection>

      <ScrollSection>
        <RewardsSection />
      </ScrollSection>

      <ScrollSection>
        <PartnersSection />
      </ScrollSection>

      <ScrollSection>
        <NewsSlider />
      </ScrollSection>

      <ScrollSection>
        <CTASection />
      </ScrollSection>

      <ScrollSection>
        <FAQSection />
      </ScrollSection>

      <ScrollSection>
        <FooterNewsletter />
      </ScrollSection>
    </div>
  )
}

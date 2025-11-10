import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import Features from "@/components/features-4";
import StatsSection from "@/components/stats";
import FAQsTwo from "@/components/faqs-2";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FAQsTwo />
      <Features />
      <Footer />
    </>
  );
}

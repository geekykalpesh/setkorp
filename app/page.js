import HeroSection from "@/components/hero-section";
import WelcomeSection from "@/components/welcome-section";
import MediaShowcase from "@/components/MediaShowcase";
import FeatureShowcaseShadcn from "@/components/FeatureShowcase-shadcn";
import { StickyScroll } from "@/components/StickyScrollSection";
import ParetnerCarousel from "@/components/PartnerCarousel";
import TestimonialsShadecn from "@/components/TestimonialsShadcn";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ServicesSection } from "@/components/services";
import { getCachedBusinessServices, getCachedTestimonials } from "@/lib/cache";
export const metadata = {
  title: "Business Setup in Dubai | Company Formation UAE - Setkorp",
  description: "Start your business in Dubai with expert guidance. Complete company formation, trade license, visa processing, and PRO services in UAE free zones and mainland.",
};

export default async function Home() {
  const services = await getCachedBusinessServices();
  const testimonials = await getCachedTestimonials();
  return (
    <main className="min-h-screen bg-[#f7f7f7] pt-16 sm:pt-18 md:pt-20 relative">
      
      {/* Grid Background */}
      <div className="fixed inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e85a4f_1px,transparent_1px),linear-gradient(to_bottom,#e85a4f_1px,transparent_1px)] opacity-20 pointer-events-none" />
      
      <div className="w-[calc(100vw-2rem)] max-w-[1400px] mx-auto border-2 border-[#e85a4f] p-1 sm:p-2 md:p-2 bg-white shadow-2xl relative z-10 mt-4 sm:mt-6 md:mt-8">
        <div className="border-2 border-[#e85a4f] overflow-hidden bg-white">
          <div id="hero" className="border-b-2 border-[#e85a4f]">
            <HeroSection />
          </div>
          <div className="relative">
            <TracingBeam>
              <div id="welcome" className="border-b-2 border-[#e85a4f]">
                <WelcomeSection />
              </div>
              <div className="border-b-2 border-[#e85a4f]">
                <MediaShowcase />
              </div>
              <div className="border-b-2 border-[#e85a4f]">
                <ServicesSection services={services} />
              </div>
              <div id="features" className="border-b-2 border-[#e85a4f]">
                <FeatureShowcaseShadcn />
              </div>
              <div className="border-b-2 border-[#e85a4f]">
                <ParetnerCarousel />
              </div>
              <div id="testimonials" className="border-b-2 border-[#e85a4f]">
                <TestimonialsShadecn testimonials={testimonials} />
              </div>
              <div id="faq" className="border-b-2 border-[#e85a4f]">
                <FAQ />
              </div>
              <div id="contact" className="border-b-2 border-[#e85a4f]">
                <ContactForm />
              </div>
            </TracingBeam>
          </div>
          <div className="border-t-2 border-[#e85a4f] relative z-[100]">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
 return (
  <main className="flex flex-col min-h-screen">
   <Banner />
   <AboutSection />
   <ServicesSection />
   <CTASection />
   <ScrollToTop />
  </main>
 );
}

import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import ScrollToTop from "@/components/ScrollToTop";
import SectionTitle from "@/components/SectionTitle";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Health and Wellness Clinic in Las Vegas",
 description:
  "Health and Wellness clinic in Las Vegas. We specialize in pain management, aesthetics, weight loss, shockwave therapy and iv therapy.",
};

export default function Home() {
 return (
  <main className="flex flex-col min-h-screen">
   <Banner />
   <AboutSection />
   <Benefits />
   <ServicesSection />
   <SectionTitle
    pretitle="Testimonials"
    title="You are in good company"
   ></SectionTitle>
   <Testimonials />
   <CTASection />
   <ScrollToTop />
  </main>
 );
}

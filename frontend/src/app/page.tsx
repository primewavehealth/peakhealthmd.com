import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";

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
   <CTASection />
   <ScrollToTop />
  </main>
 );
}

import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "The Vegas Clinic",
 description:
  "High tech treatment for pain, erectile dysfunction, infections and weight loss in Las Vegas.",
};

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

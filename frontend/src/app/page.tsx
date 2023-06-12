import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Edge from "@/components/Edge";
import HomeCTA from "@/components/HomeCTA";
import ScrollToTop from "@/components/ScrollToTop";
import SectionTitle from "@/components/SectionTitle";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Mens Health  and Wellness Clinic in Las Vegas",
 description:
  "Mens Health Health and Wellness clinic in Las Vegas. We specialize in ED, low-t, pain management, aesthetics, weight loss, shockwave therapy and iv therapy.",
};

export default function Home() {
 return (
  <main className="flex flex-col min-h-screen">
   <Banner />
   <AboutSection />
   <Edge />
   <ServicesSection />
   <SectionTitle
    pretitle="Testimonials"
    title="You are in good company"
   ></SectionTitle>
   <Testimonials />
   <HomeCTA />
   <ScrollToTop />
  </main>
 );
}

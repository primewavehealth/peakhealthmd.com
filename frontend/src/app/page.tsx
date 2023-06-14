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
 title: "Affordable Chronic Pain Care in Las Vegas",
 description:
  "Get affordable chronic pain care in Las Vegas at Primewave. Our dedicated team provides cost-effective treatment options for long-lasting pain relief, helping you regain control of your life.",
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

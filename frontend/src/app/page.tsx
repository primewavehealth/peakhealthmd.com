import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import HomeCTA from "@/components/HomeCTA";
import ScrollToTop from "@/components/ScrollToTop";
import SectionTitle from "@/components/SectionTitle";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Affordable Chronic Pain Care in Las Vegas",
 description:
  "Get affordable chronic pain care in Las Vegas at Primewave. Our dedicated team provides cost-effective treatment options for long-lasting pain relief, helping you regain control of your life.",
 keywords: [
  "Pain Management",
  "Pain Care in Las Vegas",
  "Chronic Pain Care Las Vegas",
  "Joint Pain Care Las Vegas",
  "Neck Pain Care Las Vegas",
  "Back Pain Care Las Vegas",
  "Pain Treatment in Las Vegas",
  "Pain Doctor in Las Vegas",
  "",
 ],
};

export default function Home() {
 return (
  <main className="flex flex-col min-h-screen">
   <Banner />
   <AboutSection />
   <Why />
   <Services />
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

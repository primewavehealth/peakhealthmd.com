import AboutHeroSection from "@/components/AboutHeroSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Wellness Medical Center in Las Vegas",
 description:
  "Take charge of your health and wellness with our comprehensive medical services in Las Vegas - our expert team can help you achieve your health goals and improve your overall well-being.",
};

function About() {
 return (
  <section>
   <AboutHeroSection />
  </section>
 );
}

export default About;

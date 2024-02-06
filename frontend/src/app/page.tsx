import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import HomeCTA from "@/components/HomeCTA";
import NewTeam from "@/components/NewTeam";
import ScrollToTop from "@/components/ScrollToTop";
import SectionTitle from "@/components/SectionTitle";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TwoColumnSection from "@/components/TwoColumns";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
 title: "Find Your Path to Wellness: Las vegas's Premier Wellness Clinic",
 description:
  "Take control of your health & happiness with Primewave Health. Tailored treatments, cutting-edge technology & lasting results.",
 alternates: {
  canonical: "/",
 },
};

const jsonLd = {
 "@context": "http://schema.org",
 "@type": "MedicalBusiness",
 name: "Primewave Pain Care Clinic",
 image: ["https://primewavehealth.com/images/logo.png"],
 description: "Pain Control Clinic in Las Vegas",
 openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
 priceRange: "By Appointment",
 telephone: "7026254334",

 url: "https://primewavehealth.com",

 sameAs: [
  "https://www.facebook.com/primewavehealth/",
  "https://twitter.com/primewavehealth",
 ],
 address: {
  "@type": "PostalAddress",
  streetAddress: "8285 W Arby Ave #175",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89113",
 },
 areaServed: {
  "@type": "GeoCircle",
  geoMidpoint: {
   "@type": "GeoCoordinates",
   latitude: 36.18811,
   longitude: -115.176468,
  },
  geoRadius: 1000,
 },
 aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.2",
  bestRating: "5",
  worstRating: "2",
  ratingCount: "20",
 },
};

export default function Home() {
 return (
  <main className="container flex flex-col overflow-x-hidden">
   <TwoColumnSection />
   <Banner />
   <AboutSection />
   <Services />
   <NewTeam />
   <SectionTitle
    pretitle="Testimonials"
    title="What Our Patients Are Saying"
   ></SectionTitle>

   <Testimonials />

   <HomeCTA />
   <ScrollToTop />
   <Script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
   />
  </main>
 );
}

import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import HomeCTA from "@/components/HomeCTA";
import ScrollToTop from "@/components/ScrollToTop";
import SectionTitle from "@/components/SectionTitle";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
 title: "Affordable Pain Care in Las Vegas",
 description:
  "Discover affordable pain care services in Las Vegas. From back pain to joint pain, our expert treatments restore comfort and mobility. Your relief, your budget.",
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
 email: "info@primewavehealth.com",
 url: "https://primewavehealth.com",
 hashMap:
  "https://www.google.com/maps/dir/36.188072,-115.204211/primewave/@36.1256461,-115.4161627,11z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80c8c77b87fd04f3:0xe5b9c9fcf3f802d9!2m2!1d-115.2721143!2d36.058366?entry=ttu",
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
 potentialAction: {
  "@type": "SearchAction",
  target: {
   "@type": "EntryPoint",
   urlTemplate:
    "https://query.primewavehealth.com/search?q={search_term_string}",
  },
  "query-input": "required name=search_term_string",
 },
};

export default function Home() {
 return (
  <main className="container flex flex-col overflow-x-hidden">
   <Banner />
   <AboutSection />
   <Services />
   <Team />
   <SectionTitle
    pretitle="Testimonials"
    title="What Our Customers Are Saying"
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

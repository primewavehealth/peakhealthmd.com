import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Edge from "@/components/Edge";
import HomeCTA from "@/components/HomeCTA";
import ScrollToTop from "@/components/ScrollToTop";
import SectionTitle from "@/components/SectionTitle";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Script from "next/script";

export async function generateMetadata() {
 return {
  title: "Affordable Pain Care in Las Vegas",
  description:
   "Discover affordable pain care services in Las Vegas. From back pain to joint pain, our expert treatments restore comfort and mobility. Your relief, your budget.",
  alternates: {
   canonical: "/",
  },
 };
}

/* export const metadata: Metadata = {
 title: "Affordable Pain Care in Las Vegas",
 description:
  "Discover affordable pain care services in Las Vegas. From back pain to joint pain, our expert treatments restore comfort and mobility. Your relief, your budget.",
}; */

const jsonLd = {
 "@context": "https://schema.org",
 "@type": "localBusiness",
 image: ["https://primewavehealth.com/images/logo.png"],
 address: {
  "@type": "PostalAddress",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89113",
  streetAddress: "8285 W Arby Ave #175",
 },
 hashMap:
  "https://www.google.com/maps/dir/36.188072,-115.204211/primewave/@36.1256461,-115.4161627,11z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80c8c77b87fd04f3:0xe5b9c9fcf3f802d9!2m2!1d-115.2721143!2d36.058366?entry=ttu",
 areaServed: {
  "@type": "GeoCircle",
  geoMidpoint: {
   "@type": "GeoCoordinates",
   latitude: 36.18811,
   longitude: -115.176468,
  },
  geoRadius: 1000,
 },
 sameAs: "https://primewavehealth.com",
 description: "Pain Control Clinic in Las Vegas",
 name: "Primewave Pain Care Clinic",
 telephone: "7026254334",
 review: {
  "@type": "Review",
  reviewRating: {
   "@type": "Rating",
   ratingValue: "4",
   bestRating: "5",
  },
 },
};

export default function Home() {
 return (
  <main className="container flex flex-col">
   <Banner />
   <AboutSection />
   <Edge />
   <Services />
   <Video />
   <SectionTitle
    pretitle="Testimonials"
    title="You are in good company"
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

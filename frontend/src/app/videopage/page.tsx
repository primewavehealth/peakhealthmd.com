import AppointmentForm from "@/components/AppointmentForm";
import CTA from "@/components/UI/CTA";
import ImageCarousel from '@/components/ImageCarousel';
import VideoGallery from '@/components/VideoGallery';
import PageBanner from "@/components/UI/PageBanner";
import { server } from "config";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import back from "/public/images/back-pain-lv.jpg";

export const metadata: Metadata = {
 title: "Lower Back Pain Treatment in Las Vegas",
 description:
  "Affordable lower back pain treatment in Las Vegas: Get relief and regain your active life. Expert care that fits your budget.",
 alternates: {
  canonical: `${server}/back-pain-las-vegas`,
 },
};

const images = [
    { src: '/images/event/pic1.jpg', alt: 'Image 1', width: 500, height: 500 },
    { src: '/images/event/pic2.jpg', alt: 'Image 2', width: 500, height: 500 },
    { src: '/images/event/pic3.jpg', alt: 'Image 2', width: 500, height: 500 },
    { src: '/images/event/pic4.jpg', alt: 'Image 2', width: 500, height: 500 },
    { src: '/images/event/pic5.jpg', alt: 'Image 2', width: 500, height: 500 },
    // Add more images as needed
];

const videos = [
  { src: '../public/images/event/clip1.mp4', title: 'Video 1' },
  { src: '/images/event/mov2.mov', title: 'Video 2' },
];

const jsonLd = {
 "@context": "https://schema.org",
 "@type": "MedicalWebPage",
 about: {
  "@type": "MedicalCondition",
  name: ["Lower Back Pain"],
 },
 abstract:
  "Back pain: Common symptoms include stiffness, discomfort, and limited mobility. Diagnosis involves medical history, imaging, and physical exams. Treatment options range from physical therapy to medications and, in severe cases, surgical interventions.",
 mainContentOfPage: ["Diagnosis", "Symptoms", "Treatment"],
 audience: "https://schema.org/Patient",
 headline: "Lower back pain- diagnosis, symptoms and treatment",
 keywords: [
  "back pain",
  "lower back pain",
  "lower back pain treatment",
  "lower back pain treatment in Las Vegas",
 ],

 specialty: "https://schema.org/Musculoskeletal",
 author: {
  "@type": "Person",
  image:
   "https://media.licdn.com/dms/image/D5603AQF24_JouUc7pQ/profile-displayphoto-shrink_200_200/0/1673043161881?e=2147483647&v=beta&t=Izwa8q3PYEYthaQv3er4_oGYroBzYLZXOEtpMIsUZjM",
  name: "Zachary Trujillo",
  sameAs: "https://www.linkedin.com/in/zachary-trujillo-1a598b159/",
 },
 reviewedBy: {
  "@type": "Person",
  image:
   "https://img.webmd.com/lhd/provider_prod/700291_ProviderProfileImage_d0396c1e-46e0-4a4b-9551-6de2b6904b38.JPG?resize=150px:*",
  name: "Dr. Vitcor Kim",
  sameAs:
   "https://doctor.webmd.com/doctor/victor-kim-d490810f-08ea-48b9-915d-53700b51185d-overview",
 },
 lastReviewed: "2023-12-18",
};

const items = ['Item 1', 'Item 2', 'Item 3'];

function page() {
    return (
        <div>

          <div className="max-w-screen-xl px-8 py-8 mx-auto">

            <h2 className="pb-4 text-3xl font-bold text-center sm:text-3xl">Event Title</h2>
            <ImageCarousel images={images} />
          </div>
          <div className="max-w-screen-xl px-8 py-8 mx-auto">

            <h1>Video Gallery</h1>
            <VideoGallery videos={videos} />
          </div>
        </div>

        

      );
}

export default page;

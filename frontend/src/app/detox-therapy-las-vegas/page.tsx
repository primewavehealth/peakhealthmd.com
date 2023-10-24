import PageBanner from "@/components/UI/PageBanner";
import detox from "/public/images/detox-therapy-las-vegas.jpg";

import type { Metadata } from "next";

/* export const metadata: Metadata = {
 title: "Detoxification Therapy in Las Vegas",
 description:
  "Purify your body and rejuvenate your health with our Detox Therapy in Las Vegas - a holistic approach to eliminate toxins and restore balance.",
}; */
export const metadata: Metadata = {
 robots: {
  index: false,
  follow: false,
  nocache: false,
  googleBot: {
   index: false,
   follow: false,
  },
 },
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Detoxification Therapy"
    body=" Detox therapy involves a variety of treatments that help remove toxins from the body and improve overall health. Detox therapy can be important for individuals who have been exposed to environmental toxins or who have a history of drug or alcohol abuse. The benefits of detox therapy include improved energy levels, better digestion, clearer skin, and weight loss. Detox therapy can also boost the immune system, reduce inflammation, and improve mental clarity. Additionally, detox therapy can be an important first step in treating addiction and can help individuals achieve long-term recovery."
    src={detox}
    height={400}
    width={400}
    alt="detox-therapy"
    btn={{
     href: "/appointment",
     text: "Schedule An Appointment",
     id: "schedule",

     icon: (
      <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     ),
    }}
   />
  </div>
 );
}

export default page;

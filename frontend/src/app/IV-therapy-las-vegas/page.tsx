import PageBanner from "@/components/UI/PageBanner";
import iv from "public/images/iv-therapy-las-vegas.webp";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "IV Therapy in Las Vegas",
 description:
  "Revitalize your body and boost your energy levels with IV therapy at our Las Vegas medical practice.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="IV Therapy in Las Vegas"
    body="If you're looking for a quick and effective way to improve your overall health and wellness, IV therapy may be the solution you need. IV therapy is a medical treatment that delivers fluids, vitamins, and minerals directly into your bloodstream via an IV drip. This method allows for faster and more efficient absorption of essential nutrients, providing relief for a variety of symptoms and conditions such as dehydration, fatigue, and illness. The Vegas Clinic offers a range of IV therapy options tailored to meet your specific needs, whether you're looking for an energy boost, immune support, or hangover relief. Contact us today to schedule your IV therapy session and start feeling your best."
    src={iv}
    height={400}
    width={400}
    alt="carboxy-therapy"
    btn={{
     href: "/telehealth",
     text: "Schedule An Appointment",

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

import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import back from "/public/images/back-pain-lv.jpg";

export const metadata: Metadata = {
 title: "Chronic Lower Back Pain Treatment in Las Vegas",
 description:
  "Experience personalized care for chronic lower back pain at our center. Our expert team offers effective treatments to alleviate discomfort and improve your quality of life. Schedule a consultation today!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Chronic Lower Back Pain Treatment in Las Vegas"
    body="At Primewave, we combine advanced technology with expert care to revolutionize chronic lower back pain treatment. Through state-of-the-art techniques such as non-invasive spinal decompression, laser therapy, and targeted nerve stimulation, we provide unparalleled precision and efficacy in relieving pain and restoring function. Experience a new era of pain management and regain control of your life with our innovative technological solutions."
    src={back}
    height={400}
    width={400}
    alt="erectile-dysfunction"
    btn={{
     href: "https://cal.com/primewavehealth/appointment",
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

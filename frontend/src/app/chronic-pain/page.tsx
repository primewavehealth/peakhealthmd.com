import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import pain from "/public/images/pain.jpg";

export const metadata: Metadata = {
 title: "Chronic Pain Care in Las Vegas",
 description:
  "Experience effective chronic pain care tailored to your needs. Our expert team offers personalized treatment options for long-lasting relief and improved quality of life. Schedule your consultation now!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Joint Pain Care in Las Vegas"
    body="At Primewave, we understand the debilitating impact of chronic pain on your daily life. Whether it's caused by arthritis, fibromyalgia, or other conditions, our dedicated team is here to help. With a holistic approach, we offer a range of treatment options including medication management, physical therapy, interventional procedures, and alternative therapies like acupuncture. Our goal is to alleviate your pain, improve functionality, and enhance your overall well-being. Take the first step towards a pain-free life and schedule your consultation with Primewave today."
    src={pain}
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

import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import joint from "/public/images/joint-pain-lv.jpg";

export const metadata: Metadata = {
 title: "Joint Pain Care in Las Vegas",
 description:
  "Find relief from joint pain with our specialized care services. Our pain specialists in Las Vegas provides personalized treatment options for improved mobility and a pain-free life. Schedule your consultation now!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Joint Pain Care in Las Vegas"
    body="Don't let joint pain limit your life. At Primewave, we understand the debilitating effects of joint pain, whether it's due to arthritis, injury, or other underlying conditions. Our dedicated team of specialists offers a comprehensive range of treatment options tailored to your specific needs. From advanced diagnostic imaging to precision-guided injections, regenerative therapies, physical therapy, and minimally invasive surgeries, we have the expertise and cutting-edge technology to provide effective relief and restore optimal joint function. Take the first step towards a pain-free life and trust our compassionate team to deliver personalized care that addresses the root cause of your joint pain."
    src={joint}
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

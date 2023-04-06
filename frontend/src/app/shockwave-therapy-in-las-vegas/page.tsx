import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import shockwave from "/public/shockwave-therapy-las-vegas.jpg";

export const metadata: Metadata = {
 title: "Shock Wave Therapy in Las Vegas",
 description:
  "Find relief from chronic pain with shockwave therapy in Las Vegas - a safe and effective treatment that can help you get back to your active lifestyle.",
};

function Shockwave() {
 return (
  <>
   <PageBanner
    heading="Shock Wave Therapy"
    body="Shockwave therapy is a cutting-edge non-invasive treatment that has proven to be effective in treating various musculoskeletal conditions, including chronic pain and injuries. If you're looking for a reliable shockwave therapy provider in Las Vegas, look no further than our clinic. Our experienced team of medical professionals is dedicated to delivering top-quality care that meets your unique needs. With the latest shockwave therapy technology and personalized treatment plans, we can help you get back to living your life pain-free."
    src={shockwave}
    height={400}
    width={400}
    alt="shockwave-therapy"
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
   />{" "}
  </>
 );
}

export default Shockwave;

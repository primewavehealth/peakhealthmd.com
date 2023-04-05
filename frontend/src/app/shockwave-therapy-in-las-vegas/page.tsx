import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import shockwave from "/public/carboxy.jpg";

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
    body="Shockwave therapy is a non-invasive medical treatment that uses high-energy acoustic waves to stimulate healing in damaged tissue and relieve pain. It has been used to treat a variety of musculoskeletal conditions, such as plantar fasciitis, tennis elbow, and Achilles tendonitis. The treatment works by increasing blood flow and promoting the formation of new blood vessels, which can help to accelerate the body's natural healing process."
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

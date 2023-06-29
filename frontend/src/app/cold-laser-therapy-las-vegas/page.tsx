import PageBanner from "@/components/UI/PageBanner";
import led from "/public/images/led-light-therapy.jpg";

import type { Metadata } from "next";
/* 
export const metadata: Metadata = {
 title: "Cold Laser Therapy in las Vegas",
 description:
  "Experience the benefits of Cold Laser Therapy in Las Vegas - a non-invasive, drug-free solution for pain relief, inflammation reduction, and tissue repair.",
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
    heading="Cold Laser Therapy"
    body="If you're in Las Vegas and looking for an effective and non-invasive treatment for your pain and inflammation, our cold laser therapy services can help. At Prime Wave, we use advanced low-level laser light technology to stimulate healing and reduce pain and inflammation. Our cold laser therapy services can be used to treat a variety of conditions, including sports injuries, arthritis, and carpal tunnel syndrome. Our experienced team will work with you to create a customized treatment plan that addresses your specific needs and goals. We offer state-of-the-art equipment and a comfortable and welcoming environment, making us the premier choice for cold laser therapy services in Las Vegas."
    src={led}
    height={400}
    width={400}
    alt="laser-therapy"
    btn={{
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/start",
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

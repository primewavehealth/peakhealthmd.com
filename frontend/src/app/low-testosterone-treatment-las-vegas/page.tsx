import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import low from "public/images/low-testosterone-lasvegas.jpg";

export const metadata: Metadata = {
 title: "Affordable Low Testosterone Treatment in Las Vegas",
 description:
  "Restore your vitality and energy with our personalized Low Testosterone Treatment in Las Vegas.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Low Testosterone Treatment"
    body="By restoring testosterone to healthy levels, men may experience increased muscle mass, improved bone density, and enhanced sexual function. Low testosterone treatment can also improve mood, reduce fatigue, and increase energy levels. Additionally, it may help reduce the risk of certain health conditions such as diabetes, heart disease, and osteoporosis. With the right treatment plan, men with low testosterone can enjoy improved physical and mental health, and an overall better quality of life."
    src={low}
    height={400}
    width={400}
    alt="Low Testosterone Treatment in Las Vegas"
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

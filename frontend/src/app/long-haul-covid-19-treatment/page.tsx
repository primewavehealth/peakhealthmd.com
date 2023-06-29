import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import covid from "/public/images/covid-virus.jpg";

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

function Shockwave() {
 return (
  <>
   <PageBanner
    heading="Long haul COVID 19"
    body="Long haul COVID, also known as post-acute sequelae of SARS-CoV-2 infection (PASC), refers to a range of persistent symptoms that can develop in some people after they have recovered from COVID-19. Treatment for long haul COVID typically involves a multidisciplinary approach that includes medications, physical therapy, and cognitive behavioral therapy. The benefits of this treatment can include improved quality of life, reduced symptom severity, and a better ability to perform daily activities."
    src={covid}
    height={400}
    width={400}
    alt="long haul covid 19"
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
   />{" "}
  </>
 );
}

export default Shockwave;

import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import immigrants from "/public/images/immigrants.jpg";

export const metadata: Metadata = {
 title: "Immigration Physical services in Las Vegas",
 description:
  "Get your immigration physical exam done quickly and efficiently with our certified medical professionals in Las Vegas.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Immigration Physical"
    body=" At Vegas Clinic, we offer comprehensive immigration health services to support the health and well-being of individuals and families who are making this transition. Our experienced team provides a range of services, including health screenings, vaccinations, and medical evaluations, to help ensure that our patients are healthy and prepared for life in their new home. We also provide resources and support to help our patients navigate the healthcare system and access the care they need. Our goal is to provide compassionate and effective healthcare services that promote the health and well-being of all individuals, regardless of their background or immigration status."
    src={immigrants}
    height={400}
    width={400}
    alt="Immigration Physical las vegas"
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

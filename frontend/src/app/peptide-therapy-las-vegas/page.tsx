import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import peptide from "/public/images/peptide.jpg";

export const metadata: Metadata = {
 title: "Peptide Therapy in Las Vegas",
 description:
  "Transform your health and well-being with peptide therapy in Las Vegas - a cutting-edge treatment that can enhance your physical and mental performance.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Peptide Therapy"
    body="Peptide therapy has shown promise in treating a range of conditions, including chronic pain, inflammation, and autoimmune disorders. Peptides can also be used to enhance athletic performance, promote weight loss, and improve skin health. Compared to traditional medication, peptide therapy may have fewer side effects and is generally well-tolerated. With its targeted approach to treatment, peptide therapy offers a promising avenue for those seeking to optimize their health and well-being."
    src={peptide}
    height={400}
    width={400}
    alt="peptide-therapy"
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

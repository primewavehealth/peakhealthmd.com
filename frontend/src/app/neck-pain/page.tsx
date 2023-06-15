import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import neck from "/public/images/neck-pain.jpg";

export const metadata: Metadata = {
 title: "Neck Pain Care in Las Vegas",
 description:
  "Relieve neck pain and restore mobility with expert neck pain care services. Our tailored treatments and therapies provide effective relief for a pain-free life. Book now!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Neck Pain Care in Las Vegas"
    body="Are you suffering from neck pain? Primewave offers specialized neck pain care to alleviate discomfort and restore your well-being. Our team of experts understands the complexities of neck pain, whether it's caused by muscle strain, poor posture, or underlying conditions. With a personalized approach, we offer a range of treatment options, including targeted exercises, manual therapies, and innovative interventions such as spinal decompression or acupuncture. Experience relief and regain mobility under the care of our dedicated professionals. Book your appointment today and take the first step towards a pain-free neck."
    src={neck}
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

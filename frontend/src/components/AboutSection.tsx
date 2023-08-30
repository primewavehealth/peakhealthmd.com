import Image from "next/image";
import Link from "next/link";
import Button from "./UI/Button";

function AboutSection() {
 return (
  <section className="text-blue-900">
   <div className="py-12 mx-auto max-w-screen-2xl">
    <div className="grid grid-cols-1 lg:grid-cols-2">
     <div className="relative hidden h-full lg:flex">
      <Image
       alt="neck-pain"
       src="/images/pain-doctor.jpg"
       className="object-cover"
       fill
       sizes="100vw"
       quality={100}
      />
     </div>
     <div className="p-8 md:p-12 lg:px-16 lg:py-30">
      <div className="max-w-xl pt-12 mx-auto space-y-3">
       <span className="text-4xl font-semibold">
        Experience Unrivaled Pain Relief at Our Premier Care Clinic{" "}
       </span>

       <p className="py-6 text-base text-justify lg:text-lg sm:mt-4">
        Greetings and warmest welcome to Primewave Health in the heart of{" "}
        <Link href="https://www.lasvegasnevada.gov/">Las Vegas</Link>. We
        recognize the immense challenges that accompany chronic pain, affecting
        not just your body but your spirit too. We stand by your side with a
        team of compassionate experts, ready to craft personalized treatment
        journeys that lead you back to a life filled with joy, movement, and
        relief from pain's grasp.
       </p>

       <div className="mt-4 md:mt-8">
        <Button
         text="Request Consultation"
         href="/consultation"
         icon=<svg
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
        />
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default AboutSection;

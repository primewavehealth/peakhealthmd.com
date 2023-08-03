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
        Welcome to Primewave. We are a leading pain management clinic in{" "}
        <Link href="https://www.lasvegasnevada.gov/">Las Vegas</Link>. Our
        clinic is staffed with highly skilled pain doctors who are dedicated to
        delivering the highest standard of expertise and quality care to our
        patients. Using the latest advancements in pain management, including
        cutting-edge technologies like shockwave therapy, we tailor personalized
        treatment plans to address each individual's unique pain concerns.
       </p>

       <div className="mt-4 md:mt-8">
        <Button
         text="Request Consultation"
         href="/about-primewave"
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

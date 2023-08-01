import Image from "next/image";
import Link from "next/link";
import Button from "./UI/Button";

function AboutSection() {
 return (
  <section className="text-blue-900">
   <div className="mx-auto max-w-screen-2xl">
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
       <span className="text-xl font-semibold lg:text-3xl">
        Technology Meets Pain Care at{" "}
        <strong className="text-yellow-400">PrimeWave</strong>{" "}
       </span>

       <p className="text-base text-justify lg:text-lg sm:mt-4">
        Welcome to Primewave, a leading pain management clinic in{" "}
        <Link href="https://www.lasvegasnevada.gov/">Las Vegas</Link>. We
        specialize in providing top-notch care for all types of pain. Our clinic
        is staffed with highly skilled pain doctors who are dedicated to
        delivering the highest standard of expertise and quality care to our
        patients. Using the latest advancements in pain management, including
        cutting-edge technologies like shockwave therapy, we tailor personalized
        treatment plans to address each individual's unique pain concerns. With
        a focus on non-invasive and evidence-based approaches, our pain care
        clinic is committed to helping patients regain their quality of life and
        find lasting relief from pain.
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

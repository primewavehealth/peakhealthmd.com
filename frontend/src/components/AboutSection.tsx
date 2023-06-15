import Image from "next/image";
import Link from "next/link";
import Button from "./UI/Button";

function AboutSection() {
 return (
  <section className="bg-blue-900">
   <div className="px-4 py-8 mx-auto lg:py-16 max-w-screen-2xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
     <div className="hidden lg:flex">
      <Image
       alt="Student"
       src="/images/neck-pain-primewave.jpg"
       className="object-contain w-full rounded-xl sm:h-56 md:h-full"
       height={400}
       width={400}
       quality={100}
      />
     </div>
     <div className="p-8 md:p-12 lg:px-16 lg:py-30">
      <div className="max-w-xl mx-auto space-y-3">
       <span className="text-xl text-white lg:text-3xl">
        Technology Meets Pain Care at{" "}
        <strong className="text-yellow-400">PrimeWave</strong>{" "}
       </span>

       <p className="text-base lg:text-justify lg:text-lg text-white/90 sm:mt-4">
        Welcome to Primewave, a leading pain management clinic in{" "}
        <Link href="https://www.lasvegasnevada.gov/">Las vegas</Link>. We
        harness the power of advanced technologies to provide innovative
        treatments for a wide range of pain conditions. Through the use of
        state-of-the-art devices, including neurostimulation, radiofrequency
        ablation, and laser therapy, we offer precise and targeted pain relief.
        Our team of pain care specialists combine their clinical expertise with
        the latest technological advancements, ensuring optimal outcomes for our
        patients. Whether you're seeking relief from chronic back pain,
        neuropathic discomfort, or post-surgical discomfort, our
        technology-driven approach provides non-invasive and minimally invasive
        options that are tailored to your unique needs. Experience the future of
        pain care at Primewave, where technology and compassion come together to
        transform lives.
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

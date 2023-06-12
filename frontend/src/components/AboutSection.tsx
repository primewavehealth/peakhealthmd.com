import Image from "next/image";
import Button from "./UI/Button";

function AboutSection() {
 return (
  <section className="bg-blue-900">
   <div className="px-4 py-8 mx-auto lg:py-16 max-w-screen-2xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
     <div className="p-8 md:p-12 lg:px-16 lg:py-30">
      <div className="max-w-xl mx-auto space-y-3">
       <span className="text-xl text-white">
        We are <strong className="text-yellow-400">PrimeWave</strong>{" "}
       </span>

       <p className="text-base text-justify lg:text-lg text-white/90 sm:mt-4">
        We pride ourselves on our exceptional competence in providing
        comprehensive medical services for men's health. Our highly skilled team
        is dedicated to promoting overall well-being through effective
        treatments. We specialize in a range of services, including ED, low-T,
        weight loss, pain management, and IV therapy. With our expertise and
        cutting-edge techniques, we strive to deliver the highest quality care
        to our patients. Rest assured that our competent professionals are
        committed to understanding your unique needs and tailoring treatments to
        help you achieve optimal health. Trust us to provide the competence you
        deserve for a healthier, happier life.
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

     <div className="hidden grid-cols-2 gap-4 md:grid md:grid-cols-1 lg:grid-cols-2">
      <Image
       alt="Student"
       src="/images/young-woman-vegas-clinic.jpg"
       className="object-cover w-full h-40 rounded-xl sm:h-56 md:h-full hover:scale-95"
       height={300}
       width={250}
       quality={100}
      />

      <Image
       alt="Student"
       src="/images/young-man-vegas-clinic.jpg"
       className="object-cover w-full h-40 rounded-xl sm:h-56 md:h-full hover:scale-95"
       height={300}
       width={250}
       quality={100}
      />
     </div>
    </div>
   </div>
  </section>
 );
}

export default AboutSection;

import Button from "@/components/UI/Button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import about from "/public/images/about-vegas-clinic1.jpg";
import maxine from "/public/images/maxine-ingham.webp";

export const metadata: Metadata = {
 title: "About Primewave Health",
 description:
  "Discover relief at Lass Vegas's premier pain control clinic. Our experts utilize cutting-edge techniques to manage and alleviate pain, restoring your quality of life.",
};

function About() {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="container px-4 py-8 mx-auto text-center sm:py-12 sm:px-6 lg:py-32 lg:px-8">
    <article className="max-w-5xl mx-auto prose">
     <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
      About Primewave Health
     </h1>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      Welcome to Primewave, a leading chronic pain management clinic in Las
      Vegas, Nevada. We are dedicated to providing comprehensive care and
      effective solutions for individuals experiencing chronic pain and mens
      health issues.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      At Primewave, we understand that pain can significantly impact your
      quality of life, limiting your ability to perform everyday activities and
      enjoy the things you love. We are here to listen, support, and guide you
      towards a brighter future, free from the constraints of pain.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      Our highly skilled medical professionals utilize cutting-edge diagnostic
      techniques and evidence-based treatments to accurately identify the source
      of your pain and develop tailored treatment plans that address your
      specific needs.{" "}
     </p>

     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      Take the first step towards a pain-free life and schedule a consultation
      with our experienced team at Primewave. Let us help you regain your
      independence, rediscover your passions, and embrace a life without limits.
     </p>
    </article>

    <section className="max-w-screen-xl py-8 mx-auto my-16 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
     <div className="p-8 md:p-12 lg:py-12">
      <div className="mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
       <h2 className="pb-4 text-2xl font-bold text-gray-900 md:text-4xl">
        Meet Our Medical Director
       </h2>
       <span className="text-2xl font-bold text-gray-900 md:text-3xl">
        <Link
         href="https://health.usnews.com/doctors/maxine-ingham-512322"
         target="_blank"
        >
         {" "}
         Dr. Maxine Ingham
        </Link>
       </span>

       <p className="text-xl text-justify text-gray-500 md:text-left md:mt-4">
        Dr. Ingham is an internist. She received her medical degree from Medical
        University of South Carolina College of Medicine and has been in
        practice for more than 20 years.
       </p>
      </div>
     </div>
     <Image
      className="object-contain w-full mt-8 h-60"
      alt="about Prime Wave"
      src={maxine}
      width={400}
      height={600}
      quality={100}
     />
    </section>

    <div className="flex justify-center mt-10">
     <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
       <div className="relative col-span-1 mt-12 overflow-hidden rounded-lg lg:order-last">
        <Image
         className=""
         alt="about Prime Wave"
         src={about}
         width={400}
         height={600}
         quality={100}
        />
       </div>

       <article className="col-span-2 prose lg:text-xl">
        <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
         A Comprehensive Approach To Healing
        </h3>
        <p className="text-justify">
         <strong>Patient-Centered Approach</strong>: We place the patient at the
         center of our care, valuing their unique experiences, preferences, and
         goals. By actively involving patients in shared decision-making, we
         collaborate to create individualized treatment plans that align with
         their specific needs, promoting a sense of ownership and partnership in
         the healing process.
        </p>{" "}
        <p className="text-justify">
         <strong>Focus on Patient Education and Empowerment</strong>: We believe
         in empowering our patients with the knowledge and skills to actively
         participate in their pain management. Through comprehensive patient
         education, we equip individuals with effective coping strategies,
         self-care techniques, and lifestyle modifications to enhance their
         well-being and long-term pain management.
        </p>{" "}
        <p className="text-justify">
         <strong> Continuity of Care and Long-Term Support</strong>: Our
         commitment to our patients extends beyond initial pain relief. We
         provide comprehensive continuity of care, offering long-term support,
         follow-up consultations, and ongoing monitoring to ensure sustained
         pain management and overall well-being.
        </p>{" "}
        <p className="text-justify">
         <strong>Focus on Functional Restoration</strong>: Our clinic aims not
         only to reduce pain but also to restore functionality and improve
         quality of life. We work with patients to set functional goals,
         offering therapies and treatments that target pain reduction, physical
         rehabilitation, and functional optimization.
        </p>{" "}
        <p className="text-justify">
         <strong>Positive Patient Outcomes</strong>: Our track record of
         successful patient outcomes speaks to the effectiveness of our
         treatments and the dedication of our team. We are proud to have helped
         numerous individuals regain control over their lives, overcome pain,
         and return to the activities they love.
        </p>{" "}
        <p className="text-justify">
         At Primewave, we are committed to providing exceptional care, effective
         solutions, and unwavering support to help our patients find relief,
         restore function, and embrace a life without limits.
        </p>
       </article>
      </div>
     </div>
    </div>
    <div className="mt-4 md:mt-8">
     <Button
      text="Get in Touch"
      href="/contact"
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
  </section>
 );
}

export default About;

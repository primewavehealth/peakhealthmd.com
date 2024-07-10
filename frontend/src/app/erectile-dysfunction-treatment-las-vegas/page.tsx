import Consultation from "@/components/AppointmentForm";
import Button from "@/components/UI/Button";
import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
// @ts-ignore
import type { Metadata } from "next";
import Script from "next/script";
import ed from "/public/images/erectile-dysfunction-las-vegas.jpg";

export const metadata: Metadata = {
 title: "Erectile Dysfunction Treatment in Las Vegas",
 description:
  "Affordable erectile dysfunction treatment in Las Vegas: Rediscover confidence and intimacy without straining your wallet. Expert care at budget-friendly prices",
 alternates: {
  canonical: "/erectile-dysfunction-treatment-las-vegas",
 },
};

const jsonLd = {
 "@context": "https://schema.org",
 "@type": "MedicalCondition",
 alternateName: "Erectile Dysfunction",
 associatedAnatomy: {
  "@type": "AnatomicalStructure",
  name: "Penis",
 },

 differentialDiagnosis: {
  "@type": "DDxElement",
  diagnosis: {
   "@type": "MedicalCondition",
   name: "Erectile Dysfunction",
  },
 },
 signOrSymptom: [
  {
   "@type": "MedicalSymptom",
   name: "Inability to get or maintain an erection",
  },
  {
   "@type": "MedicalSymptom",
   name: "Reduced sexual desire",
  },
 ],

 name: "Erectile Dysfunction",
 possibleTreatment: [
  {
   "@type": "MedicalTherapy",
   name: "Psychological therapy",
  },
  {
   "@type": "MedicalTherapy",
   name: "Drug therapy",
  },
  {
   "@type": "MedicalTherapy",
   name: "Shockwave Therapy",
  },
 ],
 riskFactor: [
  {
   "@type": "MedicalRiskFactor",
   name: "Age",
  },
  {
   "@type": "MedicalRiskFactor",
   name: "Gender",
  },
  {
   "@type": "MedicalRiskFactor",
   name: "Achohol",
  },
  {
   "@type": "MedicalRiskFactor",
   name: "Depression",
  },
  {
   "@type": "MedicalRiskFactor",
   name: "Stress",
  },
  {
   "@type": "MedicalRiskFactor",
   name: "Weight",
  },
  {
   "@type": "MedicalRiskFactor",
   name: "Anxiety",
  },
 ],
};

function page() {
 return (
  <>
   <PageBanner
    heading="Erectile Dysfunction Treatment in Las Vegas"
    body="Unlock a renewed sense of vitality and confidence with our affordable erectile dysfunction treatment in Las Vegas. Say goodbye to performance anxiety and hello to a fulfilling, intimate life. Our expert team is dedicated to restoring your natural vigor, ensuring you enjoy every moment to the fullest."
    src={ed}
    height={400}
    width={400}
    alt="erectile-dysfunction"
    btn={{
     href: "#form",
     text: "Schedule An Appointment",
     id: "schedule",

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
   {/* cta */}
   <div className="container max-w-5xl px-6 mx-auto mt-8">
    <div className="flex flex-col items-center h-auto py-8 align-middle border-2 border-gray-800 rounded-lg bg-blue-50 lg:border-4 justify-evenly md:flex-row ">
     <div className="px-6 text-xl lg:text-2xl lg:pt-0 lg:w-8/12">
      <span>
       You're not alone. Approximately 40% of men are affected at age 40 and
       nearly 70% of men are affected at age 70.
       <span className="italic">"It's Not Over".</span>
      </span>
     </div>
     <Button
      href="/appointment"
      text="Request Consultation"
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
   {/* blockquote */}
   <blockquote className="max-w-screen-xl px-8 pt-8 md:pt-16 mx-auto text-center">
    <span className="py-10">
     {" "}
     <span className="text-2xl md:text-4xl -skew-x-12 font-bold">
      Get a
     </span>{" "}
     <span className="relative inline-block px-2">
      <div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
      <h3 className="relative py-3 text-white">
       Permanent Cure for Erectile Dysfunction in Las Vegas{" "}
      </h3>
     </span>
    </span>
   </blockquote>
   {/* next section */}
   <section className="px-6 bg-white">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-16">
      <article className="space-y-4 prose text-gray-600">
       <h2 className="text-center">
        What are the Causes of Erectile Dysfunction?
       </h2>

       <p className="text-justify ">
        There are several possible causes of ED, both physical and
        psychological. Physical causes of ED include conditions that affect
        blood flow to the penis, such as diabetes, high blood pressure, or heart
        disease. Neurological disorders like multiple sclerosis or Parkinson's
        disease can also contribute to ED. Lifestyle factors like smoking,
        excessive alcohol consumption, or drug use can damage blood vessels and
        nerves, leading to ED. Hormonal imbalances, including low levels of
        testosterone, can also cause ED. In addition to physical factors,
        psychological factors can also play a role in ED, such as stress,
        anxiety, depression, or relationship problems. Identifying the
        underlying cause of ED is crucial to developing an effective treatment
        plan.
       </p>
      </article>

      <article className="prose text-gray-600 text-center ">
       <h2 className="">What are the Symptoms of Erectile Dysfunction?</h2>

       <p className="text-justify ">
        Erectile dysfunction, also known as impotence, is a condition where a
        man is unable to achieve or maintain an erection sufficient for sexual
        intercourse. The symptoms of erectile dysfunction may vary depending on
        the underlying cause of the condition, but common signs include weak
        erection and reduced sexual desire. Other symptoms may include premature
        ejaculation, delayed ejaculation, or a lack of orgasm
       </p>
      </article>
     </div>
    </div>
   </section>
   {/*  <EdPricing /> */}
   {/* next section */}
   <section className="bg-gray-50">
    <div className="container flex flex-wrap">
     <div className="items-center justify-center py-8 mx-auto lg:pl-16 lg:w-1/4 bg-gray-50">
      <Consultation />
     </div>
     <div className="w-full px-8 text-lg lg:px-4 lg:w-3/4 lg:pt-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
       <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        Erectile Dysfunction Treatment Options
       </h2>
       <article className="space-y-4 text-base text-justify text-gray-700 md:text-lg">
        <p>
         We are the choice ED Clinic in Las Vegas. We understand that erectile
         dysfunction can be a sensitive and difficult issue to discuss. That's
         why we offer personalized and discreet consultations to help patients
         understand their condition and develop an effective treatment plan.
         During your consultation, our ed specialist in Las Vegas will conduct a
         comprehensive medical history and physical exam, as well as discuss
         your symptoms and concerns in a private and confidential setting. We
         will work closely with you to develop a personalized treatment plan
         that addresses your unique needs and goals, taking into account your
         medical history, lifestyle, and other factors. Our goal is to provide
         you with the highest level of care and support, so you can effectively
         manage your symptoms and achieve a satisfying sex life.
        </p>
       </article>
      </div>

      <blockquote className="max-w-screen-xl px-8 pb-12 mx-auto text-center">
       <span className="py-10">
        {" "}
        <span className="text-3xl font-bold">We are the destination</span>{" "}
        <span className="relative inline-block px-2">
         <div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
         <h3 className="relative py-3 text-white">
          ED Clinic in Las Vegas, Nevada{" "}
         </h3>
        </span>
       </span>
      </blockquote>
      {/* video */}
      <div className="mx-auto md:w-[900px] h-[450px]">
       <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/4iOjUMIDsiw?si=hhYxHcYHPevYd7Kf"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
       ></iframe>
      </div>
     </div>
    </div>
   </section>
   {/* faqs*/}
   <section className="max-w-3xl mx-auto my-12">
    <h2 className="py-4 text-center">
     Frequently Asked Questions About Erectile Dysfunction
    </h2>
    <div className="space-y-4">
     <details
      className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
     >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can a lack of physical activity or a sedentary lifestyle contribute to
        ED?
       </h2>

       <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
         viewBox="0 0 20 20"
         fill="currentColor"
        >
         <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
         />
        </svg>
       </span>
      </summary>

      <p className="mt-4 text-lg leading-relaxed text-gray-700">
       Yes, a sedentary lifestyle and lack of physical activity can contribute
       to ED by affecting blood flow and overall cardiovascular health. Regular
       exercise can improve both physical and sexual health.
      </p>
     </details>

     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Is ED more prevalent in younger men, and can it be a sign of underlying
        health issues at a younger age?
       </h2>

       <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
         viewBox="0 0 20 20"
         fill="currentColor"
        >
         <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
         />
        </svg>
       </span>
      </summary>

      <p className="mt-4 text-lg leading-relaxed text-gray-700">
       ED can affect men of all ages, and in younger men, it may be an early
       sign of underlying health issues such as diabetes, obesity, or
       psychological factors. Identifying and addressing these underlying causes
       is essential.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can psychological factors, like stress or performance anxiety, cause ED
        even in the absence of physical issues?
       </h2>

       <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
         viewBox="0 0 20 20"
         fill="currentColor"
        >
         <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
         />
        </svg>
       </span>
      </summary>

      <p className="mt-4 text-lg leading-relaxed text-gray-700">
       Yes, psychological factors, including stress, anxiety, and relationship
       problems, can lead to ED even when there are no physical issues involved.
       Addressing these factors through therapy or counseling can often help
       resolve ED.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Is there a connection between smoking and ED?
       </h2>

       <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
         viewBox="0 0 20 20"
         fill="currentColor"
        >
         <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
         />
        </svg>
       </span>
      </summary>

      <p className="mt-4 text-lg leading-relaxed text-gray-700">
       Yes, smoking is a known risk factor for ED. The chemicals in tobacco can
       damage blood vessels and reduce blood flow to the penis, making it more
       difficult to achieve and maintain an erection.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can overconsumption of alcohol or recreational drugs contribute to ED?
       </h2>

       <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
         viewBox="0 0 20 20"
         fill="currentColor"
        >
         <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
         />
        </svg>
       </span>
      </summary>

      <p className="mt-4 text-lg leading-relaxed text-gray-700">
       Excessive alcohol or drug use, especially long-term, can lead to ED by
       affecting nerve function and blood flow. Reducing or quitting these
       substances may improve sexual function.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Is ED reversible, or is it a lifelong condition for some individuals?
       </h2>

       <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
         viewBox="0 0 20 20"
         fill="currentColor"
        >
         <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
         />
        </svg>
       </span>
      </summary>

      <p className="mt-4 text-lg leading-relaxed text-gray-700">
       ED can be reversible, especially when the underlying causes are
       identified and treated. Lifestyle changes, medications, and therapy can
       help improve erectile function in many cases.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Is there a relationship between ED and sleep disorders like sleep apnea?
       </h2>

       <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-45"
         viewBox="0 0 20 20"
         fill="currentColor"
        >
         <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
         />
        </svg>
       </span>
      </summary>

      <p className="mt-4 text-lg leading-relaxed text-gray-700">
       Yes, sleep disorders like sleep apnea can contribute to ED by affecting
       oxygen levels and blood flow during sleep. Treating the underlying sleep
       disorder may improve erectile function.
      </p>
     </details>
    </div>
   </section>
   <CTA
    heading="Erectile Dysfunction Treatment in Las Vegas"
    subheading=" Say No to ED Disorder"
    body="Our state-of-the-art facility offers ed treatment options such as shockwave therapy and erectile dysfunction medications to address the root cause of ED. With our expert care and support, you can regain your sexual confidence and enjoy a fulfilling sex life. Don't suffer in silence any longer. You can overcome your ed disorder - contact us today to schedule an appointment and take the first step towards reclaiming your sexual health."
    src="/images/happy-man.avif"
    alt="erectile-dysfunction-las-vegas"
    btn={{
     href: "/appointment",
     text: "Schedule An Appointment",
     id: "cta",

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
   <Script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
   />
  </>
 );
}

export default page;

import AppointnmentCTA from "@/components/AppointmentCTA";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "PRP Facial Rejuvenation by PRP Specialists in Las Vegas",
 description:
  "Get a youthful and radiant glow with PRP facials in Las Vegas - the natural and non-invasive way to boost collagen and rejuvenate your skin.",
};

function page() {
 return (
  <div>
   <header className="bg-gradient-to-b from-blue-50 to-sky-400">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
       <Image
        alt="facial"
        src="/prp_facials.avif"
        className="absolute inset-0 object-contain w-full h-full"
        width={450}
        height={450}
       />
      </div>

      <div className="px-6 lg-px-0 lg:py-24">
       <h1 className="text-3xl font-bold sm:text-4xl">
        Las Vegas PRP Facial rejuvenation.
       </h1>

       <p className="mt-4 text-justify">
        Amazing natural skin is possible at the Las Vegas PRP facial specialist
        center. Harnesses your body’s own natural power to heal itself and
        improve the quality of your skin. Say good bye to wrinkles and lines.
        Get tighter and firmer skin. Enhance your skin tone and texture and
        boost your skin's moisture retention.
       </p>

       <Link
        href="/telehealth"
        className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
       >
        Schedule An Appointment
       </Link>
      </div>
     </div>
    </div>
   </header>
   <section className="px-6 bg-white">
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
     <div className="max-w-5xl pb-6 mx-auto prose lg:prose-lg">
      <h2 className="font-bold text-center text-blue-500 lg:text-4xl sm:text-4xl">
       Rejuvinate your face naturally with plasma rich platelet facial treatment
       in Las Vegas.
      </h2>
     </div>

     <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
       <Image
        alt="prp-facial"
        src="/vampire-facial.avif"
        className="absolute inset-0 object-contain w-full h-full"
        width={450}
        height={450}
       />
      </div>

      <div className="lg:py-16">
       <article className="space-y-4 prose text-gray-600">
        <h2>What is Vampire Facial?</h2>

        <p className="text-justify ">
         Vampire facial is a cosmetic treatment that uses a patient's own blood
         to rejuvenate the skin, so the name vampire facial. During the
         treatment, a small amount of the patient's blood is drawn and processed
         to separate the plasma from the red and white blood cells. The plasma,
         which is rich in platelets, is then applied to the patient's face using
         micro-needling or injection techniques.
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>
   {/* steps */}
   <section className="text-black bg-zinc-50">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
     <div className="max-w-lg mx-auto text-center">
      <h2>PRP Facial Procedure</h2>

      <p className="mt-4 text-lg">
       We have a proven process for our plasma rich platelet therapy for facial
       rejuvenation.
      </p>
     </div>

     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-2xl mx-auto gap-y-6">
       <div className="flex">
        <div className="flex flex-col items-center mr-6">
         <div className="w-px h-10 opacity-0 sm:h-full" />
         <div>
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
           1
          </div>
         </div>
         <div className="w-px h-full bg-gray-300" />
        </div>
        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
         <div className="sm:mr-5"></div>
         <div>
          <h3 className="text-xl font-semibold sm:text-base">Consultation</h3>
          <p className="text-lg text-gray-700">
           The first step in a PRP facial is to schedule a consultation with a
           qualified medical professional to determine if you are a good
           candidate for the treatment.
          </p>
         </div>
        </div>
       </div>
       <div className="flex">
        <div className="flex flex-col items-center mr-6">
         <div className="w-px h-10 bg-gray-300 sm:h-full" />
         <div>
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
           2
          </div>
         </div>
         <div className="w-px h-full bg-gray-300" />
        </div>
        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
         <div className="sm:mr-5"></div>
         <div>
          <h3 className="text-xl font-semibold sm:text-base">Blood Draw</h3>
          <p className="text-lg text-gray-700">
           During the procedure, a small amount of blood is drawn from the
           patient's arm, usually about 20-30ml.
          </p>
         </div>
        </div>
       </div>
       <div className="flex">
        <div className="flex flex-col items-center mr-6">
         <div className="w-px h-10 bg-gray-300 sm:h-full" />
         <div>
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
           3
          </div>
         </div>
         <div className="w-px h-full opacity-0" />
        </div>
        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
         <div className="sm:mr-5"></div>
         <div>
          <h3 className="text-xl font-semibold sm:text-base">
           Centrifugation{" "}
          </h3>
          <p className="text-lg text-gray-700">
           The blood is then processed in a centrifuge machine to separate the
           plasma from the red and white blood cells. This produces a
           concentrated platelet-rich plasma.
          </p>
         </div>
        </div>
       </div>
       <div className="flex">
        <div className="flex flex-col items-center mr-6">
         <div className="w-px h-10 bg-gray-300 sm:h-full" />
         <div>
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
           4
          </div>
         </div>
         <div className="w-px h-full opacity-0" />
        </div>
        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
         <div className="sm:mr-5"></div>
         <div>
          <h3 className="text-xl font-semibold sm:text-base">
           Preparation of skin
          </h3>
          <p className="text-lg text-gray-700">
           The patient's skin is cleaned and prepared for the treatment.
          </p>
         </div>
        </div>
       </div>
       <div className="flex">
        <div className="flex flex-col items-center mr-6">
         <div className="w-px h-10 bg-gray-300 sm:h-full" />
         <div>
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
           5
          </div>
         </div>
         <div className="w-px h-full opacity-0" />
        </div>
        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
         <div className="sm:mr-5"></div>
         <div>
          <h3 className="text-xl font-semibold sm:text-base">
           PRP application
          </h3>
          <p className="text-lg text-gray-700">
           The PRP is applied to the patient's face using either micro-needling
           or injection techniques, depending on the patient's needs and the
           medical professional's recommendation.
          </p>
         </div>
        </div>
       </div>
       <div className="flex">
        <div className="flex flex-col items-center mr-6">
         <div className="w-px h-10 bg-gray-300 sm:h-full" />
         <div>
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
           6
          </div>
         </div>
         <div className="w-px h-full opacity-0" />
        </div>
        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
         <div className="sm:mr-5"></div>
         <div>
          <h3 className="text-xl font-semibold sm:text-base">Recovery</h3>
          <p className="text-lg text-gray-700">
           After the treatment, the patient may experience mild redness and
           swelling, but these symptoms usually subside within a few hours to a
           few days. Patients can resume normal activities immediately after the
           procedure.
          </p>
         </div>
        </div>
       </div>
       <div className="flex">
        <div className="flex flex-col items-center mr-6">
         <div className="w-px h-10 bg-gray-300 sm:h-full" />
         <div>
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
           7
          </div>
         </div>
         <div className="w-px h-full opacity-0" />
        </div>
        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
         <div className="sm:mr-5"></div>
         <div>
          <h3 className="text-xl font-semibold sm:text-base">
           Follow-up treatments
          </h3>
          <p className="text-lg text-gray-700">
           A series of three to four treatments spaced four to six weeks apart
           is usually recommended to achieve optimal results. Maintenance
           treatments may be required to sustain the results over time.
          </p>
         </div>
        </div>
       </div>
      </div>
     </div>

     <div className="mt-12 text-center">
      <Link
       href="/contact"
       className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
       Book an Appointment
      </Link>
     </div>
    </div>
   </section>
   {/* next section */}

   <section>
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
     <div className="max-w-3xl pb-4 mx-auto">
      <h2 className="px-6 text-2xl font-bold text-center sm:text-3xl">
       Who is a good candidate for a PRP facial?
      </h2>
     </div>

     <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
       <p className="max-w-lg px-6 mx-auto mb-8 text-lg text-justify lg:max-w-4xl">
        A PRP facial can benefit individuals who are looking to improve the
        appearance of their skin, particularly those with fine lines, wrinkles,
        sun damage, acne scarring, or uneven skin texture. It may also be a
        suitable option for individuals who have tried other non-invasive
        treatments with limited success. However, it's important to note that
        PRP facials may not be appropriate for everyone. Our PRP facial
        specialists in Las Vegas will evaluate each patient's medical history
        and overall health before recommending PRP facial treatment. Generally,
        good candidates for PRP facials are individuals who:
       </p>
      </div>

      <div className="px-6 space-y-4 rounded-sm sm:px-8 lg:px-12 dark:bg-violet-400 dark:text-gray-900">
       <div className="flex space-x-2 sm:space-x-4">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         className="flex-shrink-0 w-6 h-6"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
         ></path>
        </svg>
        <div className="space-y-2">
         <p className="leading-snug">
          Are in good health and have realistic expectations for the treatment
          outcomes
         </p>
        </div>
       </div>
       <div className="flex space-x-2 sm:space-x-4">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         className="flex-shrink-0 w-6 h-6"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
         ></path>
        </svg>
        <div className="space-y-2">
         <p className="leading-snug">
          Have signs of skin aging, such as fine lines and wrinkles, and uneven
          skin texture.
         </p>
        </div>
       </div>
       <div className="flex space-x-2 sm:space-x-4">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         className="flex-shrink-0 w-6 h-6"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
         ></path>
        </svg>
        <div className="space-y-2">
         <p className="leading-snug">
          Are willing to undergo multiple treatment sessions spaced a few weeks
          apart.
         </p>
        </div>
       </div>
       <div className="flex space-x-2 sm:space-x-4">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         className="flex-shrink-0 w-6 h-6"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
         ></path>
        </svg>
        <div className="space-y-2">
         <p className="leading-snug">
          Have not recently undergone certain cosmetic procedures, such as laser
          resurfacing or chemical peels, which may affect the skin's healing
          process.
         </p>
        </div>
       </div>
       <div className="flex space-x-2 sm:space-x-4">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         className="flex-shrink-0 w-6 h-6"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
         ></path>
        </svg>
        <div className="space-y-2">
         <p className="leading-snug">
          Are not taking certain medications or have certain medical conditions
          that may affect blood clotting or healing.
         </p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* faq */}

   <section className="-mb-8 bg-zinc-50 dark:bg-gray-900">
    <div className="container max-w-4xl px-6 py-10 mx-auto">
     <p className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
      Frequently asked questions
     </p>

     <div className="mt-12 space-y-8">
      <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
       <details className="flex items-center justify-between w-full p-8">
        <summary className="font-semibold text-gray-700 dark:text-white">
         How Long Do The Results Of PRP Facial Last?
        </summary>

        <p className="p-8 text-lg text-justify">
         The duration of the results of a PRP facial can vary from person to
         person, and depends on several factors such as age, skin type, and
         lifestyle habits. Generally, the results of a PRP facial can last
         between six months to a year. However, some people may experience
         longer-lasting results. <br />
         <br />
         The results of a PRP facial may not be immediate and may take several
         weeks to fully develop as the body's natural healing process takes
         time. Patients may notice an improvement in their skin texture and tone
         within a few weeks after the first treatment, but full results may not
         be apparent until several weeks or even months after the final session.{" "}
         <br />
         <br />
         It's important to note that the longevity of the results may also
         depend on the number of treatment sessions received. Generally, a
         series of three to four treatment sessions spaced four to six weeks
         apart is recommended to achieve optimal results. After the initial
         treatment, patients may require periodic maintenance sessions to
         sustain the results.
         <br />
         <br /> Ultimately, maintaining a healthy lifestyle, including
         protecting the skin from sun damage and avoiding smoking, can also help
         to prolong the effects of a PRP facial.
        </p>
       </details>
      </div>
     </div>
    </div>
   </section>
   <AppointnmentCTA />
  </div>
 );
}

export default page;

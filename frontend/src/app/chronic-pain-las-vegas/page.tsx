import ChronicCTA from "@/components/ChronicCTA";
import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import pain from "/public/images/pain.jpg";

export const metadata: Metadata = {
 title: "Chronic Pain Care in Las Vegas",
 description:
  "Experience effective chronic pain care tailored to your needs. Our expert team offers personalized treatment options for long-lasting relief and improved quality of life. Schedule your consultation now!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Chronic Pain Relief in Las Vegas
"
    body="Primewave is here to offer you a life-changing solution. Our dedicated team of chronic pain doctors in Las Vegas and caring staff are committed to providing comprehensive and compassionate care for individuals suffering from chronic pain. Why endure another day of discomfort when you can experience the transformative benefits of Shockwave Therapy? This cutting-edge, non-invasive treatment has been clinically proven to effectively alleviate chronic pain conditions, targeting the root cause rather than just masking the symptoms.
"
    src={pain}
    height={400}
    width={400}
    alt="chronic-pain"
    btn={{
     href: "https://primewavehealth.setmore.com",
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
   <div className="max-w-screen-xl px-8 py-16 mx-auto text-lg">
    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
      Why Shockwave Therapy Is A Great Solution For Chronic Pain?
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       Shockwave therapy, also known as extracorporeal shockwave therapy (ESWT),
       has been found to be an effective solution for treating chronic pain in
       certain conditions. Here are several reasons why shockwave therapy is
       considered effective:
      </p>
      <p>
       <strong>Stimulates tissue healing</strong>: Shockwave therapy works by
       delivering high-energy sound waves to the affected area. These sound
       waves stimulate the body's natural healing response by increasing blood
       circulation and promoting the formation of new blood vessels. This
       enhanced blood flow helps deliver nutrients and oxygen to the injured
       tissues, facilitating tissue repair and regeneration.
      </p>
      <p>
       <strong>Reduces inflammation</strong>: Chronic pain is often associated
       with inflammation in the affected area. Shockwave therapy has been shown
       to have anti-inflammatory effects by suppressing inflammatory mediators
       and promoting the release of anti-inflammatory substances. By reducing
       inflammation, it can alleviate pain and discomfort.
      </p>
      <p>
       <strong>Disrupts pain signals</strong>: Shockwave therapy can help
       disrupt the transmission of pain signals to the brain. The high-energy
       sound waves stimulate sensory nerve fibers, which can interfere with the
       transmission of pain signals, leading to temporary pain relief.
      </p>
      <p>
       <strong>Breaks down scar tissue</strong> : Chronic pain can be caused by
       the presence of scar tissue or fibrous adhesions in the affected area.
       Shockwave therapy can break down these adhesions and promote the
       reabsorption of scar tissue. This process helps improve the flexibility
       and function of the affected area, thereby reducing pain.
      </p>
      <p>
       <strong>Non-invasive and minimal side effects</strong>: Shockwave therapy
       is a non-invasive treatment option, meaning it does not require surgical
       intervention. Compared to invasive procedures, such as surgery, shockwave
       therapy carries fewer risks and has minimal side effects. Most patients
       may experience some temporary discomfort or mild bruising at the
       treatment site, but these effects are generally well-tolerated.
      </p>
     </article>
    </section>
    <ChronicCTA />
    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
      Why Primewave?
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       <strong>Expertise and Innovation</strong> : Our clinic is staffed with
       highly skilled pain specialists in Las Vegas who have extensive
       experience in treating various forms of chronic pain, including back
       pain, arthritis, fibromyalgia, migraines, and more. Our specialists are
       well-versed in the latest advancements in Shockwave Therapy, ensuring
       that you receive the most effective and innovative treatment available.
      </p>
      <p>
       <strong>Personalized Approach</strong>: We understand that each
       individual's experience with chronic pain is unique. That's why we take a
       personalized approach to your care. Our compassionate team will conduct a
       comprehensive assessment, considering your medical history, lifestyle,
       and specific pain condition to tailor a treatment plan that addresses
       your needs with precision.
      </p>
      <p>
       <strong>Advanced Shockwave Technology</strong> : Primewave is equipped
       with state-of-the-art Shockwave Therapy technology, setting us apart as
       leaders in the field. Our cutting-edge equipment delivers focused and
       precise shockwaves to the affected areas, stimulating healing and
       providing long-lasting pain relief. Rest assured, you'll be in the hands
       of experts utilizing the latest tools for your well-being.
      </p>
      <p>
       <strong>Proven Results and Patient Satisfaction</strong>: The success
       stories of our patients speak for themselves. With Shockwave Therapy at
       Primewave, countless individuals have experienced substantial pain
       reduction, improved mobility, and enhanced quality of life. Our
       dedication to exceptional patient care has earned us a reputation for
       delivering remarkable results and unparalleled satisfaction.
      </p>

      <p>
       <strong>Affordable Pain Care</strong>: At Primewave, we believe that
       everyone deserves access to top-notch healthcare without compromising
       their budget. That's why we offer shockwave therapy for chronic pain
       treatment at an affordable cost, ensuring that you can receive the care
       you need without financial burden. Rest assured, our commitment to
       affordability never compromises the quality of our services or the
       expertise of our medical professionals.
      </p>
     </article>
    </section>

    {/*  next section  */}
   </div>

   {/* next section */}
   <CTA
    heading="Take the First Step Towards a Pain-Free Future Today!"
    body="Don't let chronic pain hold you back from enjoying life to the fullest. Take the leap towards a pain-free future by scheduling a consultation with our experienced team at Primewave. We will assess your condition, discuss the benefits of Shockwave Therapy, and develop a personalized treatment plan tailored to your needs.
    Reclaim your life and bid farewell to chronic pain. Contact us now to book your appointment or learn more about our innovative Shockwave Therapy. Primewave is here to support you on your journey to a healthier, happier you!"
    src="/images/happy-man.avif"
    alt="Chronic Pain Treatment in Las Vegas"
    btn={{
     href: "https://primewavehealth.setmore.com",
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

   {/* faqs*/}
   <section className="max-w-3xl mx-auto my-12">
    <h2 className="py-4 text-center">Chronic Pain FAQs</h2>
    <div className="space-y-4">
     <details
      className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
     >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can chronic pain affect my emotional well-being and mental health?
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
       Yes, chronic pain often leads to emotional and psychological challenges
       such as depression, anxiety, and irritability. Addressing these aspects
       is crucial for comprehensive pain management.
      </p>
     </details>

     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Are there gender differences in how chronic pain is experienced and
        treated?
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
       Yes, research suggests that gender plays a role in chronic pain
       perception and response to treatment. Women may experience pain
       differently and often face disparities in diagnosis and treatment.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can lifestyle changes, like diet and exercise, really impact chronic
        pain?
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
       Absolutely, lifestyle modifications can significantly influence chronic
       pain. A balanced diet, regular exercise, and stress management techniques
       can reduce pain intensity and improve overall well-being.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Is there a connection between chronic pain and sleep disorders?
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
       Yes, chronic pain can disrupt sleep patterns, leading to conditions like
       insomnia. Conversely, poor sleep can worsen pain. Addressing sleep issues
       is essential for managing chronic pain effectively.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        How do cultural and societal factors impact the perception and treatment
        of chronic pain?
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
       Cultural beliefs, societal stigmas, and healthcare disparities can
       influence how individuals experience and seek treatment for chronic pain.
       Understanding and addressing these factors is crucial for equitable pain
       care.
      </p>
     </details>
    </div>
   </section>
  </div>
 );
}

export default page;

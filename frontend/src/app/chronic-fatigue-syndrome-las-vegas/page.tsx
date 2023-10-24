import PageBanner from "@/components/UI/PageBanner";
import fibromyalgia from "/public/images/fibromyalgia-las-vegas.jpg";

import CTA from "@/components/UI/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Chronic Fatigue Syndrome Treatment in Las Vegas",
 description:
  "Get relief from chronic fatigue syndrome with our specialized fatigue treatment in Las Vegas.",
 alternates: {
  canonical: "/chronic-fatigue-syndrome-las-vegas",
 },
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Chronic Fatigue Syndrome Treatment in Las Vegas"
    body="If you're looking for chronic fatigue syndrome treatment options in Las Vegas, Prime Wave offers comprehensive and personalized care. Our experienced team of healthcare professionals will work with you to develop a treatment plan that addresses your unique needs and helps manage your symptoms effectively. Our goal is to improve your quality of life by managing your symptoms and helping you feel your best. "
    src={fibromyalgia}
    height={400}
    width={400}
    alt="Chronic-Fatigue-Syndrome"
    btn={{
     href: "/appointment",
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
   />
   <section>
    <div className="max-w-screen-xl px-6 py-8 pt-16 mx-auto sm:px-6 lg:px-8">
     <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
       What is Chronic Fatigue Syndrome?
      </h2>
     </div>

     <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-16">
      <div className="lg:py-4">
       <article className="space-y-4 prose text-justify text-gray-600">
        <p>
         Chronic fatigue syndrome (CFS), also known as myalgic encephalomyelitis
         (ME), is a complex and debilitating condition characterized by extreme
         fatigue that does not improve with rest or sleep. The exact cause of
         CFS is not fully understood, but researchers believe it may be related
         to abnormalities in the immune system, the nervous system, or both. In
         addition to fatigue, common symptoms of CFS include muscle and joint
         pain, headaches, cognitive difficulties, sleep disturbances, and
         sensitivity to light and noise. The severity and duration of symptoms
         can vary widely from person to person, and they can significantly
         impact daily life, often leaving individuals unable to work, attend
         school, or engage in other activities.
        </p>
       </article>
      </div>

      <div className="py-4">
       <article className="space-y-4 prose text-justify text-gray-600">
        <p>
         Chronic fatigue syndrome (CFS) can have a significant impact on the
         body. The primary symptom of CFS is extreme fatigue that is not
         relieved by rest, which can be accompanied by muscle and joint pain,
         headaches, and other physical symptoms. This fatigue can also have a
         range of effects on the body, such as reduced exercise tolerance,
         decreased immune function, and impaired cognitive abilities, including
         difficulties with memory and concentration. Additionally, many
         individuals with CFS experience sleep disturbances, such as insomnia or
         interrupted sleep, which can exacerbate other symptoms and further
         impact overall health and wellbeing. The exact mechanisms by which CFS
         affects the body are not fully understood, but research suggests that
         it may be related to abnormalities in the immune and nervous systems.
         Managing the symptoms of CFS is crucial to improving overall health and
         quality of life for individuals with this condition.
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>

   {/* next section */}
   <section className="px-6 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
     <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      Consultation
     </h2>
     <article className="space-y-4 text-base text-justify text-gray-700 md:text-lg">
      <p>
       During your consultation, our experienced doctors will conduct a thorough
       physical exam and review your medical history, as well as discuss your
       symptoms and concerns. We will work closely with you to develop a
       personalized treatment plan that addresses your unique needs and goals,
       taking into account your medical history, lifestyle, and other factors.
       Our goal is to provide you with the highest level of care and support, so
       you can effectively manage your symptoms and improve your quality of
       life.
      </p>
      <p>
       By managing symptoms and improving overall health, individuals with CFS
       can experience improved energy levels, reduced pain, and improved
       cognitive function, among other benefits.
      </p>
     </article>
    </div>
   </section>
   <CTA
    heading="Chronic Fatigue Treatment in Las Vegas"
    body="Our skilled and experienced team understands the debilitating effects of chronic fatigue syndrome and is committed to providing effective treatment options to help manage your symptoms. We offer a range of treatments, including medication management, lifestyle modifications, and counseling services. Our goal is to develop a personalized treatment plan that addresses your unique needs and helps improve your quality of life. Contact us today to schedule an appointment and start on the path to managing your chronic fatigue syndrome with our expert care."
    src="/images/happy-man.avif"
    alt="iv-therapy-las-vegas"
    btn={{
     href: "/appointment",
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
   />
  </div>
 );
}

export default page;

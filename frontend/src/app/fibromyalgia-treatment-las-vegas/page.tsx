import PageBanner from "@/components/UI/PageBanner";
import fibromyalgia from "/public/images/fibromyalgia-las-vegas.jpg";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Affordable Fibromyalgia Treatment in Las Vegas",
 description:
  "Find relief from the symptoms of fibromyalgia with our specialized fibromyalgia treatment in Las Vegas.",
 alternates: {
  canonical: "/fibromyalgia-treatment-las-vegas",
 },
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Fibromyalgia Treatment in Las Vegas"
    body="Looking for effective fibromyalgia treatment in Las Vegas? Prime Wave specializes in providing comprehensive and personalized care for individuals with fibromyalgia. Our  experienced team of pain treatment specialists offers a range of treatment options, including medication management, physical therapy, and lifestyle modifications. We are committed to helping our patients manage their symptoms and improve their quality of life."
    src={fibromyalgia}
    height={400}
    width={400}
    alt="Fibromyalgia"
    btn={{
     href: "https://primewavehealth.setmore.com",
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
   {/* next section */}
   <section className="px-6 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
     <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      What is Fibromyalgia?
     </h2>
     <article className="space-y-4 text-base text-justify text-gray-700 md:text-lg">
      <p>
       Fibromyalgia is a chronic pain condition that affects the musculoskeletal
       system. It is characterized by widespread pain and tenderness in the
       body, along with fatigue, sleep disturbances, and cognitive difficulties.
       The exact cause of fibromyalgia is not yet fully understood, but it is
       believed to be a complex interplay between genetic, environmental, and
       psychological factors.
      </p>
      <h2 className="pt-6 pb-2">Symptoms of Fibromyalgia</h2>{" "}
      <p>
       The most common symptom of fibromyalgia is widespread pain, which is
       typically described as a constant dull ache that affects multiple areas
       of the body, including the neck, shoulders, back, hips, and legs. Other
       common symptoms include fatigue, sleep disturbances, cognitive
       difficulties, stiffness, headaches, and sensitivity to touch. These
       symptoms can vary in severity from person to person, and they can have a
       significant impact on a person's quality of life. If you are experiencing
       any of these symptoms, it is important to speak with a healthcare
       professional for an accurate diagnosis and appropriate treatment.{" "}
      </p>
      <p>
       {" "}
       The effects of fibromyalgia on the body can be significant. Chronic pain
       and fatigue can lead to reduced physical activity, which in turn can
       cause muscle weakness, joint stiffness, and reduced range of motion.
       Sleep disturbances can lead to further fatigue, and cognitive
       difficulties can affect a person's ability to work, socialize, or perform
       daily tasks.
      </p>
      <p>
       {" "}
       The emotional toll of fibromyalgia can also be significant. Many people
       with fibromyalgia experience depression, anxiety, and other mood
       disorders as a result of their condition. Social isolation and feelings
       of frustration, hopelessness, or helplessness are also common.
      </p>
      <h2 className="pt-6 pb-2">Fribromyalgia Treatment in Las Vegas</h2>{" "}
      <p>
       At Prime Wave, out treatment for fibromyalgia is often tailored to the
       individual and may involve a combination of medications, lifestyle
       modifications, and other therapies. Common medications used to treat
       fibromyalgia include pain relievers, antidepressants, and anti-seizure
       drugs. We also promote lifestyle modifications, such as regular exercise,
       stress reduction techniques, and healthy eating.
      </p>
     </article>
    </div>
   </section>
  </div>
 );
}

export default page;

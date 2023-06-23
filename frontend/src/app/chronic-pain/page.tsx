import Button from "@/components/UI/Button";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import Image from "next/image";
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
    heading="Chronic Pain Care in Las Vegas"
    body=" Are you tired of living with persistent, nagging pain that disrupts your
        daily life? At Primewave, we understand the impact chronic pain can have
        on your well-being, and we're here to offer a breakthrough solution. Say
        goodbye to endless medications and invasive procedures, and embrace a
        new approach to pain relief with our cutting-edge shockwave therapy."
    src={pain}
    height={400}
    width={400}
    alt="erectile-dysfunction"
    btn={{
     href: "https://cal.com/primewavehealth/appointment",
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
   {/* next section */}
   <section className="">
    <div className="max-w-screen-xl px-8 py-16 mx-auto text-lg">
     <div className="max-w-3xl mx-auto text-base text-justify md:text-lg">
      <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
       What is Chronic Pain?
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Chronic pain involves a complex interplay between the nervous system and
        the brain. It is characterized by persistent pain that lasts for an
        extended period. When an injury or damage occurs, nociceptors,
        specialized nerve receptors, transmit pain signals from the affected
        area to the spinal cord and then to the brain. In chronic pain, the pain
        signaling becomes altered, and changes can occur in the peripheral
        nerves, spinal cord, and brain. Peripheral sensitization can increase
        the sensitivity of nociceptors, while central sensitization can cause
        the spinal cord neurons to become hypersensitive and amplify pain
        signals. Additionally, the brain's pain-processing regions may undergo
        structural and functional changes, leading to heightened pain
        sensitivity and emotional distress. Chronic pain can also be influenced
        by psychological factors, such as stress and depression, which can
        further impact pain perception and overall well-being. Managing chronic
        pain requires a comprehensive understanding of its anatomical
        complexities to develop effective treatment strategies that address the
        physiological, neurological, and psychological aspects of the condition.
       </p>
      </article>
     </div>
     <div className="max-w-3xl pt-10 mx-auto text-base text-justify md:text-lg">
      <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
       What Causes Chronic Back Pain?
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Injury or Trauma: Past injuries or trauma, such as fractures, sprains,
        or surgeries, can lead to chronic pain. Nerve damage or tissue scarring
        during the healing process may contribute to persistent pain.
       </p>
       <p>
        Musculoskeletal Conditions: Conditions like osteoarthritis, rheumatoid
        arthritis, fibromyalgia, and low back pain can cause chronic pain due to
        inflammation, joint or muscle damage, or imbalances in the nervous
        system.
       </p>
       <p>
        Nerve Disorders: Conditions like neuropathy, nerve compression syndromes
        (e.g., carpal tunnel syndrome), or nerve injuries can result in chronic
        pain. Nerve damage or dysfunction can cause persistent pain signals even
        in the absence of an ongoing injury.
       </p>
       <p>
        Chronic Illness: Certain chronic illnesses, such as cancer, multiple
        sclerosis, endometriosis, and autoimmune disorders, can be accompanied
        by chronic pain as a symptom or as a result of the disease process.
       </p>
       <p>
        Psychological Factors: Emotional and psychological factors, including
        stress, anxiety, depression, or post-traumatic stress disorder (PTSD),
        can amplify and prolong pain sensations, contributing to the development
        of chronic pain.
       </p>
       <p>
        Central Sensitization: In some cases, the nervous system becomes
        sensitized, leading to amplified pain signals and heightened pain
        perception.
       </p>
      </article>
     </div>
     <div className="max-w-3xl pt-10 mx-auto text-base text-justify md:text-lg">
      <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
       What are the Symptoms of Chronic Pain
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Persistent Pain: Chronic back pain is characterized by ongoing pain in
        the back region that lasts for an extended period, typically three
        months or longer. The pain may be localized to a specific area or
        radiate to other parts of the back, hips, or legs.
       </p>
       <p>
        Dull or Aching Sensation: Chronic back pain is often described as a
        dull, aching sensation. The pain may be constant or intermittent and can
        vary in intensity throughout the day.
       </p>
       <p>
        Stiffness and reduced flexibility: Chronic back pain can lead to
        stiffness and limited range of motion in the back. This stiffness may be
        more pronounced after prolonged periods of inactivity, such as waking up
        in the morning or sitting for extended periods.
       </p>
       <p>
        Radiating Pain: In some cases, chronic back pain may radiate to other
        areas of the body. This is commonly known as referred pain and can be
        felt in the buttocks, hips, or down the legs. It may be accompanied by
        other symptoms like numbness, tingling, or weakness.
       </p>
       <p>
        Muscle Tension and Spasms: Chronic back pain can cause muscle tension
        and spasms in the back muscles. These spasms may result in sudden, sharp
        pain and make it challenging to find a comfortable position.
       </p>
       <p>
        Fatigue and sleep disturbances: Living with chronic pain can lead to
        fatigue and disrupt sleep patterns. Poor sleep quality and lack of
        restorative sleep can further contribute to the perception of pain and
        affect overall well-being.
       </p>
       <p>
        Emotional and psychological impact: Chronic back pain can take a toll on
        a person's emotional well-being. It can lead to feelings of frustration,
        anxiety, stress, or depression. The persistent nature of the pain and
        its impact on daily activities and quality of life can contribute to
        emotional distress.
       </p>
      </article>
     </div>
    </div>
   </section>
   {/* next section */}
   <section className=" bg-blue-50">
    <div className="max-w-screen-xl px-8 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16">
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
       <Image
        className="absolute inset-0 z-10 object-contain bg-center bg-no-repeat bg-contain"
        alt="banner"
        src="/images/back2.jpg"
        height={500}
        width={500}
        loading="lazy"
       />
      </div>

      <div>
       <h2 className="text-3xl font-bold sm:text-4xl">
        How We Treat Chronic Pain
       </h2>
       <p className="mt-4 text-justify text-gray-600">
        Experience the Power of Shockwave Therapy: Our skilled team of medical
        professionals specializes in utilizing shockwave therapy to effectively
        treat chronic pain conditions. By delivering targeted acoustic waves to
        the affected area, shockwave therapy stimulates the body's natural
        healing response, promoting tissue regeneration and reducing
        inflammation. This non-invasive and FDA-approved treatment is safe,
        painless, and requires no downtime, allowing you to get back to the
        activities you love.
       </p>
       <p className="mt-4 text-justify text-gray-600">
        A Personalized Approach to Your Pain: At Primewave, we understand that
        chronic pain is unique to each individual. That's why we take a
        personalized approach to your care. Our team will conduct a thorough
        assessment, taking into account your medical history and specific pain
        symptoms. Based on this evaluation, we'll tailor a shockwave therapy
        treatment plan designed to address the root cause of your pain and
        provide long-lasting relief.
       </p>

       <div className="">
        <Button
         text="Request Consultation"
         href="https://cal.com/primewavehealth/appointment"
         icon=<svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-auto "
          viewBox="0 0 24 24"
         >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
         </svg>
        />
       </div>
      </div>
     </div>
    </div>
   </section>
   {/* next section */}
   <section className="bg-slate-100">
    <div className="max-w-screen-xl px-8 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16">
     <h2 className="text-2xl font-bold sm:text-3xl">
      Why Choose Primewave for your Chronic Pain Treatment in Las Vegas?
     </h2>
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:py-12">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
       <Image
        className="absolute inset-0 z-10 object-contain bg-center bg-no-repeat bg-contain"
        alt="banner"
        src="/images/back1.jpg"
        height={500}
        width={500}
        loading="lazy"
       />
      </div>

      <div>
       <p className="mt-4 text-justify text-gray-600">
        <strong>Expertise</strong>: Our medical professionals are highly
        experienced in shockwave therapy and have a deep understanding of
        chronic pain management.
        <br />
        <br />
        <strong>Advanced Technology</strong>: We utilize state-of-the-art
        shockwave therapy equipment to ensure precise and effective treatment.
        <br />
        <br />
        <strong>Comprehensive Care</strong>: We offer a holistic approach to
        pain management, combining shockwave therapy with other complementary
        treatments if needed. <br />
        <br />
        <strong>Compassionate Support</strong> : We're dedicated to providing
        compassionate care and supporting you throughout your pain relief
        journey.
       </p>
       <br />
       <p className="mt-4 text-justify text-gray-600">
        Don't let chronic pain dictate your life any longer. Take the first step
        towards a pain-free future by contacting Primewave today. Our
        knowledgeable team is ready to answer your questions and guide you
        towards a customized treatment plan using shockwave therapy. Reclaim
        your freedom from pain and embrace a life of vitality and well-being.
        You deserve it.
       </p>

       <div className="">
        <Button
         text="Request Consultation"
         href="https://cal.com/primewavehealth/appointment"
         icon=<svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-auto "
          viewBox="0 0 24 24"
         >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
         </svg>
        />
       </div>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
}

export default page;

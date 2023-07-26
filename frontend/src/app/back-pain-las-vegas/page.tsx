import Button from "@/components/UI/Button";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import Image from "next/image";
import back from "/public/images/back-pain-lv.jpg";

export const metadata: Metadata = {
 title: "Lower Back Pain Treatment in Las Vegas",
 description:
  "Experience personalized care for chronic lower back pain care in las vegas. Our expert team offers effective treatments to alleviate discomfort and improve your quality of life. Schedule a consultation today!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Lower Back Pain Treatment in Las Vegas"
    body="Whether you have right lower back pain or left lower back pain, our back pain specialists in Las Vegas utlitize  advanced technology to deliver lower back pain relief. Through state-of-the-art techniques such as non-invasive shockwave therapy, we provide unparalleled precision and efficacy in relieving back pain and restoring function. Experience a new era of back pain treatment in Las Vegas and regain control of your life."
    src={back}
    height={400}
    width={400}
    alt="back-pain"
    btn={{
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services",
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
       What is Chronic Back Pain?
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Chronic back pain refers to persistent or long-lasting pain in the back
        that persists for a duration of three months or more. It is different
        from acute back pain, which typically lasts for a short period and is
        often associated with a specific injury or trauma. Chronic back pain can
        be a complex condition that affects millions of people worldwide and can
        have a significant impact on daily life. The experience of chronic back
        pain can vary widely among individuals, both in terms of the intensity
        of pain and the specific symptoms experienced.
       </p>
      </article>
     </div>
     <div className="max-w-3xl pt-10 mx-auto text-base text-justify md:text-lg">
      <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
       What Causes Chronic Back Pain?
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Back pain can occur when any of the structures in the back are affected
        or injured. Common causes of back pain include muscle strains,sciatica,
        ligament sprains, herniated discs, degenerative disc disease,
        osteoarthritis, spinal stenosis, and abnormalities like scoliosis.
        Injuries from accidents or falls can also lead to back pain. Poor
        posture, lack of exercise, obesity, and sedentary lifestyle can
        contribute to the development of back pain. When the structures of the
        back are compromised or subjected to excessive stress, it can result in
        localized pain, radiating pain, stiffness, muscle spasms, and limited
        range of motion.
       </p>
      </article>
     </div>
     <div className="max-w-3xl pt-10 mx-auto text-base text-justify md:text-lg">
      <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
       Symptoms of Chronic Lower Back Pain
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Constant or intermittent pain: Chronic back pain can be present
        continuously or may come and go in episodes. The pain may vary in
        intensity, ranging from mild to severe.
       </p>
       <p>
        Dull, aching, or throbbing pain: The pain is often described as a
        persistent ache, dull sensation, or throbbing discomfort in the back. It
        may be localized to a specific area or may radiate to other parts of the
        body, such as the hips, buttocks, or legs.
       </p>
       <p>
        Stiffness and reduced flexibility: Chronic back pain can lead to
        stiffness and limited range of motion in the back. This stiffness may be
        more pronounced after prolonged periods of inactivity, such as waking up
        in the morning or sitting for extended periods.
       </p>
       <p>
        Shooting or sharp pain: Some individuals with chronic back pain may
        experience sharp, shooting pain that radiates down the legs. This type
        of pain is commonly associated with conditions like sciatica, where the
        sciatic nerve is compressed or irritated.
       </p>
       <p>
        Muscle spasms: Chronic back pain can be accompanied by muscle spasms,
        which are involuntary contractions of the back muscles. These spasms can
        cause sudden, intense pain and may be triggered by certain movements or
        activities.
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
        How We Treat Back Pain
       </h2>

       <p className="mt-4 text-justify text-gray-600">
        Are you tired of living with constant back pain? Primewave is here to
        offer you a revolutionary solution: Shockwave Therapy. Our experienced
        team of pain specialists in las vegas provide effective and non-invasive
        treatment for chronic back pain using state-of-the-art shockwave therapy
        technology.
       </p>
       <br />
       <p className="mt-4 text-justify text-gray-600">
        Say goodbye to endless appointments, ineffective pain medications, and
        restricted mobility. With shockwave therapy at Primewave, you can
        experience long-lasting relief and regain control over your life. Our
        cutting-edge treatment method utilizes targeted shockwave to stimulate
        healing deep within your tissues, addressing the root cause of your
        chronic back pain.
       </p>
       <br />

       <div className="">
        <Button
         text="Request Consultation"
         href="https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services"
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
      Why Choose Primewave for your Lower Back Pain Treatment in Las Vegas?
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
        Our pain doctors in las Vegas have a proven track record of success in
        helping patients find lasting lower back pain relief. By harnessing the
        power of shockwave therapy, we can significantly reduce inflammation,
        relieve muscle tension, and promote tissue regeneration. You'll feel the
        difference as your pain subsides and your mobility improves, allowing
        you to enjoy life to the fullest once again.
       </p>
       <br />
       <p className="mt-4 text-justify text-gray-600">
        At Primewave, we prioritize your comfort and well-being throughout your
        treatment journey. Our friendly staff will guide you through each step,
        ensuring a personalized approach tailored to your specific needs. With
        our state-of-the-art facility and commitment to delivering exceptional
        care, you can trust that you're in the best hands.
       </p>
       <br />
       <p className="mt-4 text-justify text-gray-600">
        Don't let chronic back pain hold you back any longer. Experience the
        life-changing benefits of shockwave therapy at Primewave. Schedule your
        consultation today and take the first step towards a pain-free future.
        Reclaim your life and embrace a brighter, pain-free tomorrow with
        Primewave. You deserve it!
       </p>
       <br />
       <div className="">
        <Button
         text="Request Consultation"
         href="https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services"
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

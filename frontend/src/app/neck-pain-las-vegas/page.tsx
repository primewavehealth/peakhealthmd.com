import Consultation from "@/components/AppointmentForm";
import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import neck from "/public/images/neck-pain.jpg";

export const metadata: Metadata = {
 title: "Neck Pain Treatment in Las Vegas",
 description:
  "Affordable neck pain treatment in Las Vegas: Expert care to relieve your discomfort and restore your quality of life. Get relief today!",
 alternates: {
  canonical: "/neck-pain-las-vegas",
 },
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Neck Pain Treatment in Las Vegas"
    body="Relieve neck pain and reclaim your comfort with our affordable neck pain treatment in Las Vegas. Our team of pain specialists understands the debilitating effects of neck pain and is dedicated to crafting a personalized treatment plan to suit your needs. Say goodbye to those persistent aches and stiffness, and hello to a life with unrestricted movement and vitality. Trust us to be your partner in wellness, as we help you break free from the constraints of neck pain right here in Las Vegas."
    src={neck}
    height={400}
    width={400}
    alt="neck-pain"
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
   />
   {/* next section */}

   <section className="">
    <div className="container flex flex-wrap">
     <div className="items-center justify-center mx-auto lg:pl-16 lg:w-1/4">
      <Consultation />
     </div>
     <div className="w-full px-8 text-lg lg:px-4 lg:w-3/4 lg:py-16">
      <div className="max-w-3xl mx-auto text-base text-justify md:text-lg">
       <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
        What is Neck Pain?
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Neck pain refers to discomfort or pain experienced in the area of the
         neck, which connects the head to the torso. It can range from mild to
         severe and may be acute or chronic. The neck is composed of several
         structures, including bones, muscles, ligaments, tendons, nerves, and
         blood vessels, all of which play a role in supporting the head and
         facilitating movement. Symptoms of neck pain often include pain and
         stiffness in the neck region, headaches, muscle tenderness, decreased
         mobility, numbness or tingling in the arms or hands, difficulty
         sleeping, muscle spasms, and associated symptoms like dizziness or jaw
         pain.
        </p>
       </article>
      </div>

      <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
       <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
        What Causes Neck Pain?
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Muscle Strain: Straining or spraining the muscles and ligaments in the
         neck, often due to poor posture, sudden movements, or overuse, can
         result in neck pain.
        </p>
        <p>
         Herniated Discs: When the soft inner portion of an intervertebral disc
         protrudes through the outer layer, it can compress nearby nerves,
         causing neck pain and possibly radiating pain or numbness into the
         arms.
        </p>
        <p>
         Osteoarthritis: The breakdown of cartilage between the cervical
         vertebrae due to aging or wear and tear can lead to osteoarthritis.
         This condition can cause neck pain and stiffness.
        </p>
        <p>
         Cervical Spinal Stenosis: Narrowing of the spinal canal in the neck can
         put pressure on the spinal cord and nerves, leading to neck pain,
         weakness, and numbness in the arms and legs.
        </p>
        <p>
         Trauma or Injury: Whiplash, a common neck injury caused by sudden
         backward and forward movement of the neck, often due to car accidents,
         can result in neck pain and stiffness.
        </p>
       </article>
      </section>

      <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
       <h2 className="pb-4 text-2xl font-bold text-center sm:text-3xl">
        ShockWave Therapy for Neck Pain Treatment
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Shockwave therapy, also known as extracorporeal shockwave therapy
         (ESWT), is a non-invasive medical treatment that uses high-energy sound
         waves to stimulate the healing process in damaged tissues. Shockwave
         therapy aims to alleviate pain and promote tissue healing in the neck
         area. The procedure involves a handheld device that delivers
         controlled, high-intensity sound waves to the affected area. These
         sound waves generate mechanical pressure on the tissues, leading to
         several therapeutic effects, including:
        </p>
        <p>
         <strong>Pain Reduction</strong>: Shockwave therapy helps to inhibit
         pain signals in the nerves, reducing the sensation of pain in the neck.
        </p>
        <p>
         <strong>Improved Blood Circulation</strong>: The mechanical pressure
         from the sound waves stimulates blood flow to the affected area,
         promoting tissue regeneration and healing.
        </p>
        <p>
         <strong>Tissue Repair and Remodeling</strong>: Shockwave therapy
         triggers the release of growth factors and stimulates the production of
         collagen, which is essential for the repair and remodeling of damaged
         tissues.
        </p>
        <p>
         <strong> Reduction of Muscle Spasms</strong>: The treatment can help
         relax muscle spasms in the neck, which often contribute to neck pain
         and stiffness.
        </p>
       </article>
      </section>

      {/*  next section  */}
      <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
       <h2 className="pb-4 text-2xl font-bold sm:text-3xl">
        Your Ultimate Solution for Neck Pain Relief in Las Vegas
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Are you tired of living with nagging neck pain? Say goodbye to
         discomfort and limited mobility with Primewave, your trusted
         destination for effective neck pain treatment. We're excited to
         introduce our cutting-edge solution: Shockwave Therapy! Why choose
         Primewave for your neck pain treatment needs? Here's what sets us
         apart:
        </p>
        <p>
         <strong>Expertise and Experience</strong>: At Primewave, our team of
         highly skilled and experienced healthcare professionals specializes in
         providing advanced treatments for musculoskeletal conditions. Our
         clinicians have extensive knowledge in administering Shockwave Therapy,
         ensuring you receive the highest level of care.
        </p>
        <p>
         <strong>State-of-the-Art Technology</strong>: We take pride in
         equipping our clinic with the latest state-of-the-art technology,
         including advanced Shockwave Therapy devices. Our cutting-edge
         equipment delivers precise, focused sound waves to target your neck
         pain with exceptional accuracy, enhancing the effectiveness of your
         treatment.
        </p>
        <p>
         <strong>Non-Invasive and Drug-Free Solution</strong>: Say goodbye to
         invasive procedures and reliance on pain medications! Shockwave Therapy
         offered at Primewave is a non-invasive, drug-free treatment option that
         harnesses the power of sound waves to stimulate healing and reduce
         pain. Experience natural relief without the need for surgery or
         medications.
        </p>
        <p>
         <strong> Personalized Treatment Plans</strong>: We understand that each
         individual is unique, and so are their neck pain concerns. At
         Primewave, we tailor our treatment plans to your specific needs,
         ensuring personalized care and optimal results. Our healthcare
         professionals will assess your condition, develop a customized
         treatment plan, and guide you every step of the way.
        </p>
        <p>
         <strong> Results That Speak for Themselves</strong>: We have witnessed
         countless success stories and delighted patients who have found lasting
         relief from neck pain through Shockwave Therapy at Primewave. Join our
         growing community of satisfied individuals and regain the freedom to
         live life to the fullest.
        </p>
       </article>
      </section>
     </div>
    </div>
   </section>

   {/* next section */}
   <CTA
    heading="Get Neck Pain Relief in Las Vegas"
    body="Don't let neck pain hold you back any longer! Take the first step toward a pain-free future by scheduling a consultation at Primewave today. Our dedicated team is ready to provide the exceptional care and expertise you deserve. Reclaim your life from neck pain and embrace a healthier, happier you!"
    src="/images/happy-man.avif"
    alt="Neck Pain Treatment in Las Vegas"
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

   {/* faqs*/}
   <section className="max-w-3xl mx-auto my-12">
    <h2 className="py-4 text-center">
     Frequently Asked Questions About Neck Pain
    </h2>
    <div className="space-y-4">
     <details
      className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
     >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Is there a link between smartphone and computer use and neck pain?
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
       Yes, excessive use of smartphones and computers, particularly when
       looking down at screens, can strain the neck and lead to a condition
       known as "tech neck." Proper ergonomics and posture while using these
       devices can help prevent such pain.
      </p>
     </details>

     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Is there a connection between sleep position and neck pain?
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
       Yes, sleeping positions can impact neck pain. Sleeping with improper neck
       support or in positions that strain the neck can lead to discomfort.
       Choosing the right pillow and mattress and maintaining good sleep posture
       is essential for preventing neck pain.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Are there any dietary factors that can worsen or alleviate neck pain?
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
       Diet can influence inflammation, which plays a role in neck pain.
       Consuming an anti-inflammatory diet rich in fruits, vegetables, and
       omega-3 fatty acids may help reduce neck pain. Conversely, excessive
       sugar and processed foods may worsen inflammation.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can emotional stress and mental health impact neck pain?
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
       Yes, emotional stress and mental health issues can contribute to neck
       pain. Stress often leads to muscle tension in the neck and shoulders,
       exacerbating discomfort. Managing stress and addressing mental health can
       help alleviate neck pain.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can neck pain be a symptom of underlying heart or vascular problems?
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
       Yes, in some cases, neck pain can be a symptom of heart or vascular
       issues, such as angina or carotid artery disease. If neck pain is
       accompanied by other concerning symptoms, it should be evaluated by a
       healthcare professional.
      </p>
     </details>
    </div>
   </section>
  </div>
 );
}

export default page;

import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import neck from "/public/images/neck-pain.jpg";

export const metadata: Metadata = {
 title: "Neck Pain Care in Las Vegas",
 description:
  "Relieve neck pain and restore mobility with expert neck pain care services. Our tailored treatments and therapies provide effective relief for a pain-free life. Book now!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Neck Pain Care in Las Vegas"
    body="Are you suffering from neck pain? Primewave offers specialized neck pain care to alleviate discomfort and restore your well-being. Our team of experts understands the complexities of neck pain, whether it's caused by muscle strain, poor posture, or underlying conditions. Experience relief and regain mobility under the care of our dedicated professionals. Book your appointment today and take the first step towards a pain-free neck."
    src={neck}
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

   <div className="max-w-screen-xl px-8 py-16 mx-auto text-lg">
    <section className="max-w-3xl mx-auto text-base text-justify md:text-lg">
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
       mobility, numbness or tingling in the arms or hands, difficulty sleeping,
       muscle spasms, and associated symptoms like dizziness or jaw pain.
      </p>
     </article>
    </section>
    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
      What Causes Neck Pain?
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       Muscle Strain: Straining or spraining the muscles and ligaments in the
       neck, often due to poor posture, sudden movements, or overuse, can result
       in neck pain.
      </p>
      <p>
       Herniated Discs: When the soft inner portion of an intervertebral disc
       protrudes through the outer layer, it can compress nearby nerves, causing
       neck pain and possibly radiating pain or numbness into the arms.
      </p>
      <p>
       Osteoarthritis: The breakdown of cartilage between the cervical vertebrae
       due to aging or wear and tear can lead to osteoarthritis. This condition
       can cause neck pain and stiffness.
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
       Shockwave therapy, also known as extracorporeal shockwave therapy (ESWT),
       is a non-invasive medical treatment that uses high-energy sound waves to
       stimulate the healing process in damaged tissues. Shockwave therapy aims
       to alleviate pain and promote tissue healing in the neck area. The
       procedure involves a handheld device that delivers controlled,
       high-intensity sound waves to the affected area. These sound waves
       generate mechanical pressure on the tissues, leading to several
       therapeutic effects, including:
      </p>
      <p>
       <strong>Pain Reduction</strong>: Shockwave therapy helps to inhibit pain
       signals in the nerves, reducing the sensation of pain in the neck.
      </p>
      <p>
       <strong>Improved Blood Circulation</strong>: The mechanical pressure from
       the sound waves stimulates blood flow to the affected area, promoting
       tissue regeneration and healing.
      </p>
      <p>
       <strong>Tissue Repair and Remodeling</strong>: Shockwave therapy triggers
       the release of growth factors and stimulates the production of collagen,
       which is essential for the repair and remodeling of damaged tissues.
      </p>
      <p>
       <strong> Reduction of Muscle Spasms</strong>: The treatment can help
       relax muscle spasms in the neck, which often contribute to neck pain and
       stiffness.
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
       Are you tired of living with nagging neck pain? Say goodbye to discomfort
       and limited mobility with Primewave, your trusted destination for
       effective neck pain treatment. We're excited to introduce our
       cutting-edge solution: Shockwave Therapy! Why choose Primewave for your
       neck pain treatment needs? Here's what sets us apart:
      </p>
      <p>
       <strong>Expertise and Experience</strong>: At Primewave, our team of
       highly skilled and experienced healthcare professionals specializes in
       providing advanced treatments for musculoskeletal conditions. Our
       clinicians have extensive knowledge in administering Shockwave Therapy,
       ensuring you receive the highest level of care.
      </p>
      <p>
       <strong>State-of-the-Art Technology</strong>: We take pride in equipping
       our clinic with the latest state-of-the-art technology, including
       advanced Shockwave Therapy devices. Our cutting-edge equipment delivers
       precise, focused sound waves to target your neck pain with exceptional
       accuracy, enhancing the effectiveness of your treatment.
      </p>
      <p>
       <strong>Non-Invasive and Drug-Free Solution</strong>: Say goodbye to
       invasive procedures and reliance on pain medications! Shockwave Therapy
       offered at Primewave is a non-invasive, drug-free treatment option that
       harnesses the power of sound waves to stimulate healing and reduce pain.
       Experience natural relief without the need for surgery or medications.
      </p>
      <p>
       <strong> Personalized Treatment Plans</strong>: We understand that each
       individual is unique, and so are their neck pain concerns. At Primewave,
       we tailor our treatment plans to your specific needs, ensuring
       personalized care and optimal results. Our healthcare professionals will
       assess your condition, develop a customized treatment plan, and guide you
       every step of the way.
      </p>
      <p>
       <strong> Results That Speak for Themselves</strong>: We have witnessed
       countless success stories and delighted patients who have found lasting
       relief from neck pain through Shockwave Therapy at Primewave. Join our
       growing community of satisfied individuals and regain the freedom to live
       life to the fullest.
      </p>
     </article>
    </section>
   </div>

   {/* next section */}
   <CTA
    heading="Affordable Neck Pain Treatment in Las Vegas"
    body="Don't let neck pain hold you back any longer! Take the first step toward a pain-free future by scheduling a consultation at Primewave today. Our dedicated team is ready to provide the exceptional care and expertise you deserve. Reclaim your life from neck pain and embrace a healthier, happier you!"
    src="/images/happy-man.avif"
    alt="Neck Pain Treatment in Las Vegas"
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
  </div>
 );
}

export default page;

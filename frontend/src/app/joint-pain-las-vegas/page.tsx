import Button from "@/components/UI/Button";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import Image from "next/image";
import joint from "/public/images/joint-pain-lv.jpg";

export const metadata: Metadata = {
 title: "Joint Pain Care in Las Vegas",
 description:
  "Find relief from joint pain with our specialized care services. Our pain specialists in Las Vegas provides personalized treatment options for improved mobility and a pain-free life. Schedule your consultation now!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Joint Pain Care in Las Vegas"
    body="Don't let joint pain limit your life. At Primewave, we understand the debilitating effects of joint pain, whether it's due to arthritis, injury, or other underlying conditions. Our dedicated team of specialists offers a comprehensive range of treatment options tailored to your specific needs. We have the expertise and cutting-edge technology to provide effective relief and restore optimal joint function. Take the first step towards a pain-free life and trust our compassionate team to deliver personalized care that addresses the root cause of your joint pain."
    src={joint}
    height={400}
    width={400}
    alt="joint-pain"
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
       What is Joint Pain?
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Joint pain refers to discomfort or soreness experienced in the joints,
        which are the connections between two or more bones in the body. Joints
        are complex structures that allow for movement and provide support to
        the skeletal system. They are composed of bones, cartilage, ligaments,
        tendons, and other tissues. The ends of the bones within a joint are
        covered with a layer of smooth cartilage, which helps reduce friction
        and absorb shock during movement. Surrounding the joint is the synovial
        membrane, which produces synovial fluid to lubricate the joint and
        provide nourishment to the cartilage. Ligaments connect the bones,
        providing stability, while tendons connect muscles to bones, enabling
        movement. Joint pain can occur due to various reasons, including
        inflammation, injury, degeneration, or underlying medical conditions.
       </p>
      </article>
     </div>
     <div className="max-w-3xl pt-10 mx-auto text-base text-justify md:text-lg">
      <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
       What Causes Joint Pain?
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Inflammatory Conditions: Conditions such as arthritis (e.g., rheumatoid
        arthritis, psoriatic arthritis) and autoimmune diseases can cause
        inflammation in the joints, leading to pain, swelling, and stiffness.
       </p>
       <p>
        Degenerative Conditions: Degenerative joint diseases, such as
        osteoarthritis, occur when the cartilage in the joints gradually wears
        down, resulting in joint pain, stiffness, and reduced mobility.
       </p>
       <p>
        Injuries: Joint pain can be caused by injuries, such as sprains,
        strains, dislocations, or fractures. These injuries can damage the
        structures within the joint, including ligaments, tendons, and
        cartilage.
       </p>
       <p>
        Overuse or Repetitive Strain: Continuous or repetitive movements,
        excessive stress, or overuse of joints, particularly in sports or
        certain occupations, can lead to joint pain and inflammation.
       </p>
       <p>
        Infections: Infections, such as septic arthritis, can cause joint pain
        by affecting the synovial membrane and joint structures.
       </p>
       <p>
        Other Factors: Joint pain can also be influenced by factors such as age,
        genetics, obesity, hormonal changes, and certain systemic diseases.
       </p>
      </article>
     </div>
     <div className="max-w-3xl pt-10 mx-auto text-base text-justify md:text-lg">
      <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
       Symptoms of Joint Pain
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        Joint pain can manifest in various ways depending on the underlying
        cause, but here are some common symptoms associated with joint pain:
       </p>
       <p>
        Pain: Persistent or intermittent pain in one or more joints is the
        primary symptom. The pain can range from mild to severe and may be
        described as aching, throbbing, sharp, or dull. The intensity and
        duration of pain can vary.
       </p>
       <p>
        Swelling: Inflammation within the joint can lead to swelling, which may
        cause visible enlargement of the affected joint. The swelling can be
        accompanied by warmth and tenderness around the joint.
       </p>
       <p>
        Stiffness: Joint stiffness refers to a reduced range of motion or
        difficulty in moving the affected joint. This can make it challenging to
        perform daily activities or engage in physical tasks.
       </p>
       <p>
        Redness and warmth: Inflammatory conditions can cause increased blood
        flow to the affected joint, resulting in redness and warmth in the
        surrounding area.
       </p>
       <p>
        Grinding or popping sensation: Some people may experience a grinding or
        popping sensation within the joint during movement. This can occur due
        to damage or irregularities in the joint structure.
       </p>
       <p>
        Weakness: Joint pain can cause muscle weakness in the surrounding area,
        particularly if the pain limits your ability to exercise or engage in
        physical activities.
       </p>
       <p>
        Limited mobility: Joint pain often restricts movement, leading to a
        decreased range of motion. You may find it difficult to bend, flex, or
        extend the affected joint fully.
       </p>
      </article>
     </div>
    </div>
   </section>
   {/* next section */}
   <section className=" bg-blue-50">
    <div className="max-w-screen-xl px-8 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16">
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative hidden h-64 overflow-hidden rounded-lg lg:flex sm:h-80 lg:order-first lg:h-full">
       <Image
        className="absolute inset-0 z-10 object-contain bg-center bg-no-repeat bg-contain"
        alt="banner"
        src="/images/joint1.jpg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
       />
      </div>

      <div>
       <h2 className="text-3xl font-bold sm:text-4xl">
        How We Treat Joint Pain
       </h2>

       <p className="mt-4 text-justify text-gray-600">
        Are you tired of living with persistent joint pain that limits your
        mobility and hampers your quality of life? Say goodbye to discomfort and
        hello to freedom with Primewave's groundbreaking shockwave therapy!
       </p>
       <p className="mt-4 text-justify text-gray-600">
        Imagine a life without the constant ache and stiffness in your joints.
        Our state-of-the-art shockwave therapy is a non-invasive, drug-free
        solution designed to alleviate joint pain and restore your body's
        natural harmony. It's time to take control of your well-being and
        embrace a pain-free future.
       </p>

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
     <h2 className="text-2xl font-bold text-center sm:text-3xl">
      Why Choose Primewave for your Joint Pain Treatment in Las Vegas?
     </h2>
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:py-12">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full ">
       <Image
        className="absolute inset-0 z-10 object-contain bg-center bg-no-repeat bg-contain"
        alt="banner"
        src="/images/joint2.jpg"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
       />
      </div>

      <div>
       <p className="mt-4 text-justify text-gray-600">
        <strong>Revolutionary Technology</strong>: Our shockwave therapy
        harnesses the power of high-energy sound waves to target the root cause
        of your joint pain. By stimulating your body's healing mechanisms, it
        promotes tissue regeneration, reduces inflammation, and improves blood
        circulation in the affected area. Experience the transformative benefits
        of this cutting-edge approach!
        <br />
        <br />
        <strong>Customized Treatment Plans</strong>: We understand that every
        individual is unique, and so are their joint pain challenges. Our team
        of experienced professionals will assess your condition thoroughly and
        develop a personalized treatment plan tailored to your specific needs.
        With Primewave, you'll receive the care and attention you deserve,
        ensuring optimal results.
        <br />
        <br />
        <strong>Non-Invasive and Safe</strong>: Unlike invasive procedures or
        medications with unwanted side effects, shockwave therapy is a
        non-surgical, non-pharmaceutical treatment option. It is gentle,
        non-invasive, and has minimal downtime. You can undergo Primewave
        sessions with confidence, knowing that your well-being and safety are
        our top priorities. <br />
        <br />
        <strong>Rapid Relief and Long-Term Benefits</strong>: Primewave delivers
        both immediate pain relief and long-lasting benefits. Many patients
        report a significant reduction in pain after just a few sessions,
        allowing them to regain their freedom of movement and engage in
        activities they love. Our therapy aims to address the underlying cause
        of your joint pain for sustainable, lasting results.
       </p>
       <br />
       <p className="mt-4 text-justify text-gray-600">
        Don't let joint pain hold you back any longer. Experience the remarkable
        power of shockwave therapy with Primewave. Reclaim your mobility,
        rediscover your joy, and embrace a life without limits. Schedule your
        consultation today and let us help you embark on a pain-free future.
       </p>

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
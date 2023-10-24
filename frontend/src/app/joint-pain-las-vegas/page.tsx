import Consultation from "@/components/AppointmentForm";
import Button from "@/components/UI/Button";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import Image from "next/image";
import joint from "/public/images/joint-pain-lv.jpg";

export const metadata: Metadata = {
 title: "Joint Pain Treatment in Las Vegas",
 description:
  "Affordable joint pain treatment in Las Vegas: Regain mobility and relief without breaking the bank. Trust our experts for lasting comfort",
 alternates: {
  canonical: "/joint-pain-las-vegas",
 },
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Joint Pain Treatment in Las Vegas"
    body="Discover the path to pain-free living with our top-notch joint pain treatment in Las Vegas. At our state-of-the-art facility, we're dedicated to providing you with the relief you deserve. Our experienced team of pain specialists understands the challenges of joint pain and will create a personalized treatment plan to restore your mobility and comfort. Say goodbye to stiffness and discomfort and hello to a more active, pain-free life. Take the first step towards healthier joints – trust us with your well-being."
    src={joint}
    height={400}
    width={400}
    alt="joint-pain"
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
         Other Factors: Joint pain can also be influenced by factors such as
         age, genetics, obesity, hormonal changes, and certain systemic
         diseases.
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
         difficulty in moving the affected joint. This can make it challenging
         to perform daily activities or engage in physical tasks.
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
         href="https://primewavehealth.setmore.com"
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
         id="consult"
         href="https://primewavehealth.setmore.com"
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

   {/* faqs*/}
   <section className="max-w-3xl mx-auto my-12">
    <h2 className="py-4 text-center">
     Frequently Asked Questions About Joint Pain
    </h2>
    <div className="space-y-4">
     <details
      className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
     >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can weather and climate affect joint pain?
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
       Yes, some people report increased joint pain in response to changes in
       weather, particularly in cold and damp conditions. While the exact
       mechanisms are not fully understood, it's believed that changes in
       temperature and atmospheric pressure may influence joint discomfort.
      </p>
     </details>

     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Are there different types of joint pain, and do they require different
        treatments?
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
       Yes, there are various types of joint pain, including osteoarthritis,
       rheumatoid arthritis, gout, and more. Each type may require different
       treatments and management approaches tailored to the underlying
       condition.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can joint pain be a symptom of an underlying medical condition unrelated
        to the joints?
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
       Yes, joint pain can sometimes be a symptom of systemic illnesses like
       lupus, Lyme disease, or certain infections. Identifying and addressing
       the underlying condition is crucial for effective treatment.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Do genetics play a role in joint pain susceptibility?
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
       Yes, genetics can influence an individual's predisposition to certain
       joint conditions, such as osteoarthritis or rheumatoid arthritis.
       Understanding genetic factors can help tailor treatment approaches.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can lifestyle factors like diet and exercise impact joint pain?
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
       Absolutely, lifestyle choices play a significant role in joint health.
       Maintaining a balanced diet, staying physically active, and managing
       weight can help reduce joint pain and improve overall joint function.
      </p>
     </details>
    </div>
   </section>
  </div>
 );
}

export default page;

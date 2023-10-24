import Consultation from "@/components/AppointmentForm";
import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import knee from "/public/images/knee-pain1.jpg";

export const metadata: Metadata = {
 title: "Knee Pain Treatment in Las Vegas",
 description:
  "Affordable knee pain treatment in Las Vegas: Say goodbye to discomfort, regain mobility, and enjoy life fully with our specialized care.",
 alternates: {
  canonical: "/knee-pain-las-vegas",
 },
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Affordable Knee Pain Treatment in Las Vegas"
    body="Experience the freedom of movement once again with our affordable knee pain treatment in Las Vegas. Our team of pain experts is committed to addressing the root causes of your knee pain, tailoring a comprehensive treatment plan just for you. Don't let knee discomfort limit your activities – we're here to help you regain your mobility and enjoy life to the fullest. Say goodbye to the limitations of knee pain and take the first step towards a pain-free, active lifestyle with us in Las Vegas."
    src={knee}
    height={400}
    width={400}
    alt="knee-pain"
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
        What is Knee Pain?
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Knee pain is a common complaint that can occur due to various reasons,
         including injury, overuse, underlying medical conditions, or the
         natural aging process. The knee is a complex joint composed of bones,
         ligaments, tendons, muscles, and cartilage, and any disruption or
         damage to these structures can lead to knee pain.
        </p>
       </article>
      </div>

      <div className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
       <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
        What Causes Knee Pain?
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Injuries: Knee pain often results from injuries, such as sprains,
         strains, tears, or fractures. These injuries can occur due to sudden
         movements, overextension, or direct trauma to the knee. For example,
         tearing of the ACL or meniscus commonly leads to knee pain.
        </p>
        <p>
         Overuse: Repeated stress on the knee joint, often caused by activities
         like running, jumping, or repetitive movements, can lead to overuse
         injuries. Conditions like patellofemoral pain syndrome or iliotibial
         band syndrome can develop, causing pain around the kneecap or the outer
         side of the knee, respectively.
        </p>
        <p>
         Osteoarthritis: This is a degenerative joint disease that commonly
         affects the knee joint. Over time, the cartilage that cushions the
         bones in the knee can wear away, leading to bone-on-bone contact and
         resulting in pain, stiffness, and swelling.
        </p>
        <p>
         Rheumatoid Arthritis: Rheumatoid arthritis is an autoimmune condition
         that can cause inflammation and damage to the knee joint, leading to
         pain, stiffness, and swelling.
        </p>
        <p>
         Tendonitis: Inflammation of the tendons around the knee, such as
         patellar tendonitis (also known as jumper's knee) or quadriceps
         tendonitis, can cause knee pain.
        </p>
       </article>
      </div>
      <div className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
       <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
        What are the Symptoms of Knee Damage?
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Pain: Knee pain can range from a dull ache to sharp, stabbing pain. The
         intensity and location of the pain may vary depending on the specific
         condition or injury. Swelling: Inflammation of the knee joint can lead
         to visible swelling, often accompanied by warmth and tenderness around
         the joint.
        </p>
        <p>
         Stiffness: Knee pain may cause stiffness and reduced range of motion,
         making it difficult to fully bend or straighten the knee.
        </p>
        <p>
         Weakness or instability: Some individuals with knee pain may experience
         weakness or a feeling of instability in the knee, making it challenging
         to bear weight or perform certain activities.
        </p>
        <p>
         Clicking or popping: In some cases, knee pain may be accompanied by
         clicking, popping, or grinding sounds during movement. These sounds can
         indicate the presence of a meniscal tear or other structural issues
         within the knee joint.
        </p>
       </article>
      </div>

      <div className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
       <h2 className="pb-4 text-2xl font-bold text-center sm:text-3xl">
        Shockwave Therapy for Knee Pain Treatment
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Unlike traditional treatments, such as medication or surgery, shockwave
         therapy stimulates the body's natural healing mechanisms to address the
         underlying issues causing your knee pain. Through the use of focused,
         high-energy sound waves, this advanced therapy accelerates tissue
         repair, reduces inflammation, and promotes regeneration in the affected
         area.
        </p>
       </article>
      </div>

      {/*  next section  */}
      <div className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
       <h2 className="pb-4 text-2xl font-bold sm:text-3xl">
        The Primewave Solution for Knee Pain Treatment in Las Vegas
       </h2>

       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         Expert Care: Our experienced team of medical professionals will assess
         your condition thoroughly, taking into account your medical history and
         unique needs. With their expertise and in-depth knowledge of shockwave
         therapy, they will develop a personalized treatment plan tailored
         specifically to you. Cutting-Edge Technology: Primewave is equipped
         with the latest shockwave therapy technology, ensuring precise and
         targeted treatment. Our advanced equipment allows for controlled energy
         delivery, maximizing the therapeutic effects while minimizing
         discomfort.
        </p>
        <p>
         Non-Invasive and Safe: Say goodbye to invasive surgeries and lengthy
         recovery periods. Shockwave therapy is a non-invasive procedure that
         requires no incisions or anesthesia. It's a safe and reliable treatment
         option with minimal side effects.
        </p>
        <p>
         Fast and Effective: We understand that time is of the essence when it
         comes to your well-being. With shockwave therapy, many patients
         experience significant pain relief and improved functionality after
         just a few sessions. Get back to doing what you love faster with
         Primewave.
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>

   {/* next section */}
   <CTA
    heading="Knee Pain Relief is Here"
    body="Don't let knee pain hold you back any longer. Take the first step towards a pain-free future by scheduling a consultation with our pain specialists in Las Vegas. Our compassionate team is ready to guide you on your journey to regaining your mobility and enjoying life to the fullest. Contact us today and discover the transformative power of shockwave therapy for knee pain.
"
    src="/images/happy-man.avif"
    alt="Neck Pain Treatment in Las Vegas"
    btn={{
     href: "https://primewavehealth.setmore.com",
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
     Frequently Asked Questions About Knee Pain
    </h2>
    <div className="space-y-4">
     <details
      className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
     >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can weather changes affect knee pain?
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
       Some individuals with knee issues report increased pain during changes in
       weather, particularly in cold and damp conditions. The exact reasons are
       not well understood, but it may be related to changes in joint pressure
       or fluid levels.
      </p>
     </details>

     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Is there a relationship between knee pain and mental health issues?
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
       Yes, chronic knee pain can have a significant impact on mental health,
       leading to conditions like depression and anxiety. Managing both physical
       and emotional aspects of knee pain is crucial for overall well-being.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can certain types of exercise or sports increase the risk of knee pain?
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
       Yes, high-impact sports or activities that involve repetitive knee
       movements, like running or basketball, can increase the risk of knee
       injuries and pain. Proper training techniques, conditioning, and
       protective gear are essential to reduce this risk.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can knee pain be triggered or worsened by food allergies or
        sensitivities?
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
       For some individuals, food allergies or sensitivities may lead to
       inflammation, which can exacerbate knee pain, particularly in cases of
       underlying joint conditions. Identifying and eliminating trigger foods
       may help.
      </p>
     </details>
     <details className="group border-s-4 border-yellow-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
       <h2 className="text-lg font-bold text-gray-900">
        Can previous injuries or surgeries in other parts of the body contribute
        to knee pain?
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
       Yes, injuries or surgeries in other areas of the body, like the hip or
       lower back, can alter gait and biomechanics, potentially leading to knee
       pain over time.
      </p>
     </details>
    </div>
   </section>
  </div>
 );
}

export default page;

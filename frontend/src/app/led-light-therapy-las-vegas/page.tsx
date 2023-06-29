import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import led from "/public/images/led-light-therapy.jpg";

/* export const metadata: Metadata = {
 title: "LED Light Therapy in Las Vegas",
 description:
  "Transform your skin with our LED Light Therapy - a non-invasive, painless treatment for acne, wrinkles, and other skin imperfections in Las Vegas.",
}; */

export const metadata: Metadata = {
 robots: {
  index: false,
  follow: false,
  nocache: false,
  googleBot: {
   index: false,
   follow: false,
  },
 },
};

function page() {
 return (
  <div>
   <PageBanner
    heading="LED Light Therapy in Las Vegas"
    body="

 LED light therapy is a non-invasive and highly effective treatment that uses low-level light energy to stimulate cellular activity and promote healing. Our LED light therapy services can be used to treat a range of conditions, including acne, fine lines and wrinkles, sun damage, and more. This innovative therapy is safe and painless, and can provide dramatic results in a short amount of time. Our experienced team will work with you to create a customized treatment plan that meets your unique needs and goals. Whether you're looking to improve your skin's appearance or treat a specific condition, our LED light therapy services can help you achieve the results you desire.
 "
    src={led}
    height={400}
    width={400}
    alt="led light therapy"
    btn={{
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/start",
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
   <section>
    <div className="max-w-screen-xl px-8 py-8 pt-16 mx-auto lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 text-base lg:grid-cols-2 lg:gap-16 md:text-lg">
      <div className="lg:py-4 ">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h3 className="text-xl font-bold sm:text-4xl">
         Benefits of LED Light Therapy for Skin Disorders
        </h3>
       </div>
       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         LED light therapy has been found to be effective in treating a range of
         skin disorders. Some of the most common conditions treated with LED
         light therapy include acne, rosacea, and fine lines and wrinkles. This
         therapy can also help to reduce inflammation and improve skin texture,
         leaving the skin looking smoother and more youthful.
        </p>
       </article>
      </div>

      <div className="py-4">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h3 className="text-xl font-bold sm:text-4xl">
         LED Light Therapy for Chronic Pain{" "}
        </h3>
       </div>
       <article className="space-y-4 text-justify text-gray-600">
        <p>
         In addition to treating skin disorders, LED light therapy can also be
         used to treat chronic pain. This therapy works by stimulating cellular
         function and promoting healing in the affected area, which can help to
         reduce pain and inflammation.
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>
   {/* next section */}

   <section className="">
    <div className="px-6 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
     <div className="max-w-3xl mx-auto text-base text-center md:text-lg">
      <h2 className="text-3xl font-bold sm:text-4xl">
       What are the Types of Light Therapy?
      </h2>

      <p className="my-4 text-justify">
       There are several types of light therapy devices available, each with its
       own benefits and risks. Some common types of light therapy include:
      </p>

      <ul className="space-y-4 text-justify">
       <li className="">
        <span>
         Bright Light Therapy: In this type of therapy, we use a lightbox or
         light visor to deliver bright, full-spectrum light to the eyes. It is
         often used to treat SAD, sleep disorders, and jet lag.
        </span>
       </li>
       <li className="">
        <span>
         Red Light Therapy: In this therapy, we use low-level red light to
         stimulate the body's natural healing processes. It has been found to be
         effective in treating skin conditions such as psoriasis and eczema, as
         well as reducing inflammation and pain.
        </span>
       </li>
       <li className="">
        <span>
         Blue Light Therapy: In this therapy, we use blue light to treat acne,
         as it kills the bacteria that cause acne.
        </span>
       </li>
       <li className="">
        <span>
         Laser Therapy: This therapy uses focused beams of light to treat a
         range of conditions, including skin disorders, hair removal, and vision
         correction.
        </span>
       </li>
      </ul>
     </div>
    </div>
   </section>
   {/* next section */}
   <section className="">
    <div className="px-6 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
     <div className="max-w-3xl mx-auto text-base text-center md:text-lg">
      <h4 className="text-3xl font-bold sm:text-4xl">Consultation</h4>

      <p className="my-4 text-justify">
       At the Las Vegas, we understand that every patient is unique, which is
       why we provide personalized consultations for light therapy treatments.
       During your consultation, our experienced staff will conduct a physical
       examination and review your medical history to determine if LED light
       therapy is a suitable treatment option for your individual needs. We will
       also provide guidance on how to safely use the LED light therapy device
       and develop a customized treatment plan tailored to your specific
       condition. Our goal is to provide you with the most effective treatment
       possible, so you can enjoy the best possible results.
      </p>
     </div>
    </div>
   </section>
   {/* CTA */}
   <CTA
    heading="Light Therapy in Las Vegas"
    body="
Prime Wave offers different types of light therapy, including blue light therapy for acne, red light therapy for fine lines and wrinkles, and combination light therapy for skin disorders. Our highly competent and experienced staff will work with you to determine the best course of treatment for your individual needs. Contact us today to learn more about how we can help improve your skin and alleviate chronic pain through the use of LED light therapy."
    src="/images/happy-man.avif"
    alt="led-therapy-las-vegas"
    btn={{
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/start",
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

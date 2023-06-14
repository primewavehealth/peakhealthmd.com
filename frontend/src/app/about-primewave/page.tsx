import Image from "next/image";
import Link from "next/link";
import about from "/public/images/about-vegas-clinic1.jpg";

function About() {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="container px-4 py-8 mx-auto text-center sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <article className="max-w-5xl mx-auto prose">
     <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
      We Are Here For You
     </h3>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      Welcome to Primewave, a leading chronic pain management clinic in Las
      Vegas, Nevada. We are dedicated to providing comprehensive care and
      effective solutions for individuals experiencing acute and chronic pain.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      At Primewave, we understand that pain can significantly impact your
      quality of life, limiting your ability to perform everyday activities and
      enjoy the things you love. Our compassionate team of pain specialists is
      here to support you on your journey to pain relief and improved
      well-being.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      We believe in a personalized approach to pain management, recognizing that
      each patient's experience is unique. Our highly skilled medical
      professionals utilize cutting-edge diagnostic techniques and
      evidence-based treatments to accurately identify the source of your pain
      and develop tailored treatment plans that address your specific needs.{" "}
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      Our clinic offers a wide range of advanced pain management options,
      including medication-based therapies, minimally invasive procedures,
      physical therapy, alternative and complementary therapies, and
      psychological support. We prioritize your comfort and safety throughout
      every step of your treatment, ensuring that you receive the highest
      standard of care.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      At Primewave, we are dedicated to not only alleviating your pain but also
      empowering you with the knowledge and resources to actively participate in
      your own pain management. We emphasize patient education, providing you
      with the tools and strategies necessary to effectively cope with your pain
      and optimize your overall well-being.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      We understand the challenges that come with chronic pain, and our team is
      committed to being your partner in your journey to find relief and regain
      control of your life. We are here to listen, support, and guide you
      towards a brighter future, free from the constraints of pain.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      Take the first step towards a pain-free life and schedule a consultation
      with our experienced team at Primewave. Let us help you regain your
      independence, rediscover your passions, and embrace a life without limits.
     </p>
     <div className="mt-4 md:mt-8">
      <Link
       href="/contact"
       className="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
       Get in Touch
      </Link>
     </div>
    </article>

    <div className="flex justify-center mt-10">
     <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
       <div className="relative col-span-1 mt-12 overflow-hidden rounded-lg lg:order-last">
        <Image
         className=""
         alt="about Prime Wave"
         src={about}
         width={400}
         height={600}
         quality={100}
        />
       </div>

       <article className="col-span-2 prose lg:text-xl">
        <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
         A Comprehensive Approach To Healing
        </h3>
        <p className="text-justify">
         <strong>Patient-Centered Approach</strong>: We place the patient at the
         center of our care, valuing their unique experiences, preferences, and
         goals. By actively involving patients in shared decision-making, we
         collaborate to create individualized treatment plans that align with
         their specific needs, promoting a sense of ownership and partnership in
         the healing process.
        </p>{" "}
        <p className="text-justify">
         <strong>Focus on Patient Education and Empowerment</strong>: We believe
         in empowering our patients with the knowledge and skills to actively
         participate in their pain management. Through comprehensive patient
         education, we equip individuals with effective coping strategies,
         self-care techniques, and lifestyle modifications to enhance their
         well-being and long-term pain management.
        </p>{" "}
        <p className="text-justify">
         <strong> Continuity of Care and Long-Term Support</strong>: Our
         commitment to our patients extends beyond initial pain relief. We
         provide comprehensive continuity of care, offering long-term support,
         follow-up consultations, and ongoing monitoring to ensure sustained
         pain management and overall well-being.
        </p>{" "}
        <p className="text-justify">
         <strong>Focus on Functional Restoration</strong>: Our clinic aims not
         only to reduce pain but also to restore functionality and improve
         quality of life. We work with patients to set functional goals,
         offering therapies and treatments that target pain reduction, physical
         rehabilitation, and functional optimization.
        </p>{" "}
        <p className="text-justify">
         <strong>Positive Patient Outcomes</strong>: Our track record of
         successful patient outcomes speaks to the effectiveness of our
         treatments and the dedication of our team. We are proud to have helped
         numerous individuals regain control over their lives, overcome pain,
         and return to the activities they love.
        </p>{" "}
        <p className="text-justify">
         At our pain care clinic, we are committed to providing exceptional
         care, effective solutions, and unwavering support to help our patients
         find relief, restore function, and embrace a life without limits.
        </p>
       </article>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default About;

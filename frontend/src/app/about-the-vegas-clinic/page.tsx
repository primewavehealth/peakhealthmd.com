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
      At the <Link href="https://www.lasvegasnevada.gov/">Vegas</Link> Clinic,
      we are dedicated to providing you with exceptional healthcare solutions
      that prioritize your well-being and transform your life. Our value offer
      encompasses a comprehensive range of services, including{" "}
      <Link href="/erectile-dysfunction-treatment-las-vegas">
       erectile dysfunction treatment
      </Link>
      ,{" "}
      <Link href="/low-testosterone-treatment-las-vegas">
       low testosterone treatment
      </Link>
      , <Link href="/pain-treatment-in-las-vegas">pain management</Link>,{" "}
      <Link href="/weight-loss-las-vegas">weight gain</Link>, and{" "}
      <Link href="/IV-therapy-las-vegas">IV therapy.</Link>{" "}
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      With our expertise and specialized knowledge in these areas, we offer
      personalized treatments tailored to your unique needs and goals. Our
      experienced medical professionals will work closely with you, guiding you
      through every step of your journey towards improved health and vitality.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      By choosing the Vegas Clinic, you gain access to cutting-edge treatments
      and state-of-the-art technology, ensuring that you receive the most
      advanced and effective care available. We are committed to staying at the
      forefront of medical advancements, continuously updating our practices and
      treatments to provide you with the best possible outcomes.{" "}
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      We understand that your health concerns can have a significant impact on
      your overall quality of life. That's why we take a holistic approach,
      addressing not only the physical symptoms but also the emotional and
      psychological aspects of your well-being. Our comprehensive care focuses
      on improving your overall wellness, helping you regain confidence,
      vitality, and a renewed sense of self.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      At the Vegas Clinic, your satisfaction, comfort, and confidentiality are
      our top priorities. We provide a welcoming and non-judgmental environment
      where you can feel at ease discussing your concerns. Our compassionate and
      dedicated team is here to support you throughout your healthcare journey,
      offering personalized attention and guidance every step of the way.
     </p>
     <p className="px-4 text-base leading-6 text-justify lg:text-xl dark:text-gray-300">
      Experience the transformative power of our medical services and unlock a
      brighter, healthier future. Choose the Vegas Clinic for unmatched
      expertise, personalized care, cutting-edge treatments, and a commitment to
      your overall well-being. Together, we will empower you to live life to the
      fullest and achieve optimal health and vitality.
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
         alt="about the vegas clinic"
         src={about}
         width={400}
         height={600}
         quality={100}
        />
       </div>

       <article className="col-span-2 prose lg:text-xl">
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
         About Us
        </h1>
        <p className="text-justify">
         Our mission at the{" "}
         <Link href="/" target="_blank">
          Vegas Clinic
         </Link>{" "}
         is to empower individuals to live their lives to the fullest by
         delivering exceptional medical care and promoting holistic well-being.
         We are dedicated to:
        </p>
        <p className="text-justify">
         <strong>Providing Effective Treatments</strong>: We strive to offer the
         most effective and evidence-based treatments for erectile dysfunction,
         low testosterone, pain management, weight loss, and IV therapy. By
         staying abreast of the latest research and utilizing advanced medical
         technologies, we aim to achieve optimal results for our patients.
        </p>{" "}
        <p className="text-justify">
         <strong>Fostering Personalized Care</strong>: We believe in building
         strong patient-provider relationships based on trust, compassion, and
         open communication. Our mission is to deliver personalized care that
         addresses the unique needs of each patient, ensuring their comfort and
         satisfaction throughout their healthcare journey.
        </p>{" "}
        <p className="text-justify">
         <strong> Promoting Wellness and Quality of Life</strong>: We are
         committed to improving the overall well-being of our patients. Our goal
         is to not only treat specific conditions but also help individuals
         achieve a higher quality of life by focusing on their physical,
         emotional, and mental health. We provide comprehensive care that goes
         beyond the surface-level symptoms, ultimately supporting long-term
         wellness
        </p>{" "}
        <p className="text-justify">
         <strong>Advancing Healthcare</strong>: As a forward-thinking medical
         service provider, we are dedicated to advancing the field of
         healthcare. We actively engage in research, innovation, and ongoing
         education to continuously enhance our knowledge and improve the
         effectiveness of our treatments. Through our contributions, we aim to
         make a positive impact on the health and well-being of individuals in
         our community and beyond.
        </p>{" "}
        <p className="text-justify">
         At the Vegas Clinic, we are driven by our mission to be the trusted
         healthcare partner for individuals seeking specialized treatments,
         compassionate care, and improved overall well-being.
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

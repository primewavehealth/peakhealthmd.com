import Link from "next/link";

function AboutHeroSection() {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="container px-4 py-8 mx-auto text-center sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="max-w-2xl mx-auto">
     <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
      Our Commitment
     </h1>
     <p className="px-4 py-8 mt-6 text-justify text-gray-500 lg:text-2xl dark:text-gray-300">
      To provide quality health services and facilities for the community, to
      promote wellness, to relieve suffering, and to restore health as swiftly,
      safely, and humanely as it can be done, consistent with the best service
      we can give at the highest value for all concerned.
     </p>
     <div className="mt-4 md:mt-8">
      <Link
       href="/contact"
       className="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
       Get in Touch
      </Link>
     </div>
    </div>

    <div className="flex justify-center mt-10">
     <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
       <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
         alt="Party"
         src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
         className="absolute inset-0 object-cover w-full h-full"
        />
       </div>

       <article className="prose lg:text-xl lg:py-24">
        <p className="text-justify">
         Welcome to the Vegas Clinic offering exceptional pain management,
         aesthetics, weight loss, and hormone therapies in Las Vegas. Our team
         of experienced medical professionals is dedicated to providing the
         highest quality care to help you achieve optimal health and wellness.
        </p>
        <p className="text-justify">
         At our clinic, we understand that pain can be debilitating, and that's
         why we offer a comprehensive pain management program tailored to meet
         your unique needs. We use the latest techniques and technology to help
         alleviate pain and improve your quality of life.
        </p>{" "}
        <p className="text-justify">
         In addition to pain management, we also offer a range of aesthetics
         services to help you look and feel your best. Whether you're interested
         in Botox, fillers, or other cosmetic treatments, our team can help you
         achieve your desired results.
        </p>{" "}
        <p className="text-justify">
         For those looking to lose weight, we offer a variety of weight loss
         programs designed to help you shed those extra pounds and keep them
         off. Our team of experts will work with you to develop a personalized
         plan that fits your lifestyle and goals.
        </p>{" "}
        <p className="text-justify">
         We also specialize in hormone therapies, helping patients manage
         hormonal imbalances that can lead to a range of health issues. Our
         hormone therapy program is designed to help balance hormones and
         improve overall health and wellbeing.
        </p>{" "}
        <p className="text-justify">
         At our clinic, we pride ourselves on providing compassionate,
         personalized care to every patient. We understand that every person is
         unique, and we tailor our treatments to meet your specific needs. We
         use the latest technology and techniques to ensure that you receive the
         best possible care.
        </p>{" "}
        <p className="text-justify">
         If you're looking for a medical service offering exceptional pain
         management, aesthetics, weight loss, and hormone therapies in Las
         Vegas, look no further. Contact us today to schedule your consultation
         and take the first step towards a healthier, happier you.
        </p>
       </article>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default AboutHeroSection;

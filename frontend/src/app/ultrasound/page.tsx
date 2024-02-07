import Link from "next/link";

function page() {
 return (
  <div>
   {/* hero */}

   <header>
    {/*  <!-- Container --> */}
    <div className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-32">
     <div className="max-w-3xl mx-auto text-center">
      {/*  <!-- Title --> */}
      <h1 className="mb-4 text-4xl font-bold md:text-6xl">
       Primewave Health Ultrasound Services in Las Vegas
      </h1>
      <p className="mb-6 text-sm text-[#636262] sm:text-xl lg:mb-8">
       Experience precise and reliable ultrasound diagnostics with our expert
       team.
      </p>
      {/*     <!-- Button --> */}
      <a
       href="/appointment"
       className="items-center inline-block px-8 py-4 mr-6 font-semibold text-center text-white bg-black rounded-md lg:mr-8"
      >
       Schedule An Appointment
      </a>
     </div>
     {/*  <!-- List --> */}
    </div>
   </header>
   {/* end of hero */}
   {/*   body */}
   <section className="p-16">
    <div className="container mx-auto">
     <h2 className="mb-8 text-3xl font-bold text-center">Our Services</h2>
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">Vascular Ultrasound</h3>
       <p>
        Detecting and monitoring vascular conditions is crucial for maintaining
        overall health. Our vascular ultrasound services utilize Doppler imaging
        to assess blood flow and identify potential issues such as blood clots
        or arterial blockages.
       </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">Diagnostic Ultrasound</h3>
       <p>
        Our diagnostic ultrasound services are designed to help physicians
        accurately diagnose and monitor a variety of medical conditions. From
        evaluating abdominal pain to assessing the health of your organs, we
        strive to provide valuable insights into your health.
       </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">Breast Ultrasound</h3>
       <p>
        Our breast ultrasound services play a vital role in breast cancer
        detection and monitoring. With our advanced imaging technology, we can
        detect abnormalities early, providing peace of mind and facilitating
        prompt medical intervention if necessary.
       </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">Prenatal Ultrasound</h3>
       <p>
        Experience the joy of seeing your baby for the first time with our
        prenatal ultrasound services. Our trained technicians use advanced
        imaging techniques to provide clear images of your baby's development.
       </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">
        Musculoskeletal Ultrasound
       </h3>
       <p>
        For athletes and individuals with musculoskeletal injuries, our
        musculoskeletal ultrasound services offer a non-invasive way to evaluate
        soft tissue injuries, joint inflammation, and other orthopedic
        conditions.
       </p>
      </div>
     </div>
    </div>
   </section>
   <section className="flex items-center justify-center px-6 my-8">
    <div className="flex flex-col items-center justify-center mx-auto md:max-w-4xl">
     {/* <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-5xl">
      No Need For Medical{" "}
      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
       Experience
      </span>
     </h2> */}

     <p className="mb-4 text-lg leading-8 text-gray-700">
      At Primewave Health, we are dedicated to providing top-quality ultrasound
      imaging services to the residents of Las Vegas and beyond. Our
      state-of-the-art facility is equipped with the latest technology and
      staffed by experienced professionals who are committed to delivering
      accurate and timely results
     </p>
    </div>
   </section>
   <section className="p-16">
    <div className="container mx-auto">
     <h2 className="mb-8 text-3xl font-bold text-center">Why Choose Us?</h2>
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">Advanced Technology</h3>
       <p>
        Our facility is equipped with the latest ultrasound technology, ensuring
        high-quality imaging and accurate results.
       </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">Experienced Professionals</h3>
       <p>
        Our team of ultrasound technicians and radiologists are highly trained
        and experienced in performing a wide range of ultrasound procedures.
       </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">Compassionate Care</h3>
       <p>
        We understand that undergoing medical imaging can be stressful, which is
        why we prioritize patient comfort and provide compassionate care
        throughout the process.
       </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
       <h3 className="mb-4 text-xl font-semibold">Convenient Location:</h3>
       <p>
        Located in the heart of Las Vegas, our facility offers easy access and
        ample parking for our patients' convenience.
       </p>
      </div>
     </div>
    </div>
   </section>
   {/* end of body */}
   {/*   CTA */}
   <section>
    <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
     <div className="mx-auto w-full max-w-7xl bg-[#f2f2f7] px-4 py-32 text-center">
      <h2 className="flex-col max-w-3xl mx-auto mb-6 text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12">
       Book Your Ultrasound Appointment Today
      </h2>
      <p className="mx-auto mb-6 max-w-xl  text-[#636262] text-lg md:mb-12">
       Don't wait, schedule your ultrasound with our experienced professionals
       now.
      </p>
      <Link
       href="/contact"
       className="mb-4 flex flex-row items-center w-[300px] mx-auto bg-blue-900 px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
      >
       <p className="mr-6 font-bold">Get Started</p>
       <svg
        fill="currentColor"
        className="flex-none w-4 h-4"
        viewBox="0 0 20 21"
        xmlns="http://www.w3.org/2000/svg"
       >
        <title>Arrow Right</title>
        <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
       </svg>
      </Link>
     </div>
    </div>
   </section>
   {/*  End of CTA */}
  </div>
 );
}

export default page;

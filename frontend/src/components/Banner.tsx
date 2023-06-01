import Button from "./UI/Button";

function Banner() {
 return (
  //   <section>
  //    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
  //     <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
  //      <div className="hidden w-full h-full md:flex lg:order-last">
  //       <Image
  //        className="absolute inset-0 object-cover overflow-hidden bg-contain -z-10"
  //        alt="banner"
  //        src="/images/couple-vegas-clinic.jpg"
  //        width={1500}
  //        height={1000}
  //       />
  //      </div>

  //    <div className="px-10 space-y-3 lg:py-40">
  //     {/* <div className="hidden sm:mb-8 sm:flex ">
  //      <div className="relative px-3 py-1 text-sm leading-6 rounded-full text-neutral-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
  //       Peak Health is now Vegas Clinic. <br />
  //       Get 15% off All IV Therapies. Hurry, Offer lasts tills 5/30.{" "}
  //       <Link
  //        href="/IV-therapy-las-vegas"
  //        className="font-semibold text-indigo-600"
  //       >
  //        <span className="absolute inset-0" aria-hidden="true" />
  //        Learn More <span aria-hidden="true">&rarr;</span>
  //       </Link>
  //      </div>
  //     </div> */}
  //     <h2 className="text-xl font-bold sm:text-2xl">Fabulous You</h2>

  //     <h2 className="leading-loose text-blue-600 lg:text-4xl ">
  //      Win Your Health Back
  //      <br />
  //      at The Vegas Clinic
  //     </h2>

  //     <div className="">
  //      <Button
  //       text="Request Consultation"
  //       href="https://cal.com/thevegasclinic/appointment"
  //       icon=<svg
  //        fill="none"
  //        stroke="currentColor"
  //        strokeLinecap="round"
  //        strokeLinejoin="round"
  //        strokeWidth="2"
  //        className="w-4 h-4 ml-auto"
  //        viewBox="0 0 24 24"
  //       >
  //        <path d="M5 12h14M12 5l7 7-7 7"></path>
  //       </svg>
  //      />
  //     </div>
  //    </div>

  //     </div>
  //    </div>
  //   </section>

  <section className="relative bg-[url('/images/couple-vegas-clinic.jpg')] bg-cover bg-center bg-no-repeat">
   <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

   <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="px-10 space-y-3 lg:py-40">
     {/* <div className="hidden sm:mb-8 sm:flex ">
         <div className="relative px-3 py-1 text-sm leading-6 rounded-full text-neutral-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Peak Health is now Vegas Clinic. <br />
          Get 15% off All IV Therapies. Hurry, Offer lasts tills 5/30.{" "}
          <Link
           href="/IV-therapy-las-vegas"
           className="font-semibold text-indigo-600"
          >
           <span className="absolute inset-0" aria-hidden="true" />
           Learn More <span aria-hidden="true">&rarr;</span>
          </Link>
         </div>
        </div> */}
     <h2 className="text-xl font-bold sm:text-2xl">Fabulous You</h2>

     <h2 className="leading-loose text-blue-600 lg:text-4xl ">
      Win Your Health Back
      <br />
      at The Vegas Clinic
     </h2>

     <div className="">
      <Button
       text="Request Consultation"
       href="https://cal.com/thevegasclinic/appointment"
       icon=<svg
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
      />
     </div>
    </div>
   </div>
  </section>
 );
}

export default Banner;

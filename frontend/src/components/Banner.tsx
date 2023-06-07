import Image from "next/image";
import Button from "./UI/Button";

function Banner() {
 return (
  <section>
   <div className="max-w-full min-h-full mx-auto">
    <div className="relative grid grid-cols-1 lg:grid-cols-2">
     <div className="hidden md:flex lg:order-last">
      <Image
       className="absolute inset-0 object-cover overflow-hidden bg-contain -z-10"
       alt="banner"
       src="/images/vegas-clinic.png"
       fill
      />
     </div>

     <div className="py-32 pl-10 lg:pl-24 xl:pl-36 xl:py-52 lg:space-y-3">
      {/* <div className="hidden sm:mb-8 sm:flex ">
       <div className="relative px-3 py-1 text-sm leading-6 rounded-full text-neutral-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Peak Health is now Prime Wave. <br />
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
      <h2 className="text-xl font-bold text-blue-800 sm:text-2xl">
       Hey, Fabulous You
      </h2>

      <h2 className="leading-loose text-blue-900 lg:text-4xl ">
       Win Your Health Back
       <br />
       at PrimeWave
      </h2>

      <div className="">
       <Button
        text="Request Consultation"
        href="https://cal.com/primewavehealth/appointment"
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
 );
}

export default Banner;

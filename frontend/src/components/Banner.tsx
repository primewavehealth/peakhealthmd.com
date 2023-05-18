import Image from "next/image";
import Link from "next/link";

function Banner() {
 return (
  <section>
   <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     <div className="hidden h-64 overflow-hidden rounded-lg md:flex sm:h-80 lg:order-last lg:h-full">
      <Image
       className="absolute inset-0 object-cover bg-center bg-no-repeat bg-contain -z-10"
       alt="banner"
       src="/images/vegas-clinic.png"
       fill
      />
     </div>

     <div className="lg:py-16">
      <div className="hidden sm:mb-8 sm:flex ">
       <div className="relative px-3 py-1 text-sm leading-6 rounded-full text-neutral-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Peakhealth is now Vegas Clinic. Get 15% off All IV Therapies.
        <br /> Hurry, Offer lasts tills 5/30.{" "}
        <Link
         href="/IV-therapy-las-vegas"
         className="font-semibold text-indigo-600"
        >
         <span className="absolute inset-0" aria-hidden="true" />
         Learn More <span aria-hidden="true">&rarr;</span>
        </Link>
       </div>
      </div>
      <h2 className="text-xl font-bold sm:text-2xl">
       Unlock Your Full Potentials
      </h2>

      <h2 className="mt-4 leading-10 text-blue-600 lg:text-5xl ">
       Discover the Power <br />
       of Wellness at <br />
       the Vegas Clinic
      </h2>

      <Link
       href="/contact"
       className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
       Make An Appointment
      </Link>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Banner;

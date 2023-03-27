import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function page() {
 return (
  <div>
   {" "}
   <Head>
    <title>
     PRP Facials in Las Vegas | Pain Treatment Specialists at the Vegas Clinic
    </title>
    <meta
     name="description"
     content=" Get Affordable PRP Facial Rejuvination in Las Vegas. We are a PRP Injection specialists in Las Vegas."
     key="desc"
    />
    <meta
     name="keywords"
     content="best PRP Facials in las vegas, PLATELET-RICH PLASMA THERAPY, top prp injections in Vegas"
    />
   </Head>
   <header className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
       <Image
        alt="facial"
        src="/prp_facials.avif"
        className="absolute inset-0 object-contain w-full h-full"
        width={450}
        height={450}
       />
      </div>

      <div className="lg:py-24">
       <h1 className="text-3xl font-bold sm:text-4xl">
        Las Vegas PRP Facials Rejuvination.
       </h1>

       <p className="mt-4 text-gray-600">
        Amazing Natural Skin is possible at the Las Vegas PRP Facials
        Specialist. Harnesses your body’s own natural power to heal itself.
        Increase your collagen production.Say good bye to wrinkle and lines. Get
        tighter and firmer skin. Enhance your skin tone and texture and enhance
        your skin's moisture retention.
       </p>

       <Link
        href="/telehealth"
        className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
       >
        Schedule An Appointment
       </Link>
      </div>
     </div>
    </div>
   </header>
  </div>
 );
}

export default page;

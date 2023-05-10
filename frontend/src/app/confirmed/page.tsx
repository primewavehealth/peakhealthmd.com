import type { Metadata } from "next";
import Image from "next/image";

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
  <section>
   <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
      <Image
       className="absolute inset-0 object-cover bg-center bg-no-repeat bg-contain -z-10"
       alt="banner"
       src="/images/peptide.avif"
       fill
      />
     </div>

     <div className="lg:py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">
       Thank You for Booking Your Appointment
      </h2>

      <p className="mt-4 text-gray-600">We look forward to meeting you.</p>

      <a
       href="/"
       className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
       Visit Our Home Page
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}

export default page;

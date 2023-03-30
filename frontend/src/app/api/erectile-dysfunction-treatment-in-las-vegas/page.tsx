import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title:
  "Erectile Dysfunction Treatment by Erectile Dysfunction Specialists in Las Vegas",
 description:
  "Say goodbye to impotence ans erectile dysfunction. Get Affordable erectile dysfunction treatment in Las Vegas. We some top erectile dysfunction specialists in Las Vegas.",
};

function page() {
 return (
  <div>
   <header className="bg-gradient-to-b from-blue-50 to-sky-400">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
       <Image
        alt="facial"
        src="/erectile-dysfunction.avif"
        className="absolute inset-0 object-contain w-full h-full"
        width={450}
        height={450}
       />
      </div>

      <div className="px-6 lg-px-0 lg:py-24">
       <h1 className="text-3xl font-bold sm:text-4xl">
        Erectile Dysfunction Treatment in Las Vegas
       </h1>

       <p className="mt-4 text-justify">
        Erectile dysfunction (ED) is a common problem that affects many men. It
        is the inability to get or maintain an erection firm enough for sexual
        intercourse. ED can be a source of frustration and embarrassment for
        those who experience it. It is important to understand the causes,
        symptoms, and treatment options available for this condition.
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

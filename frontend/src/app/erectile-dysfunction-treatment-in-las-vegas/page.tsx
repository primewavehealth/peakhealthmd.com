import Image from "next/image";
import Link from "next/link";

import EdPrincing from "@/components/EdPrincing";
import PageCTA from "@/components/PageCTA";
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
   {/* cta */}
   <div className="container px-6 py-5 m-auto ">
    <div className="flex flex-col items-center h-auto border-2 border-gray-800 rounded-lg bg-blue-50 lg:border-4 justify-evenly md:flex-row w-100 md:h-60">
     <div className="px-4 pt-4 text-xl lg:text-2xl lg:pt-0 lg:w-8/12">
      <span>
       You're not alone in this. Roughly 1 out of 4 men over 65 - and a
       significant number over 40 - suffer from erectile dysfunction.
      </span>
     </div>
     <div className="relative px-4 py-4 my-5 text-lg font-medium text-center text-white bg-blue-600 rounded shadow-md cursor-pointer w-60 hover:bg-blue-500">
      <span className="absolute top-0 right-0 inline-flex w-3 h-3 bg-blue-600 rounded-full animate-ping"></span>
      Request Consultation
     </div>
    </div>
   </div>

   {/* next section */}
   <section className="px-6 bg-white">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-24 lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-16">
      <div className="lg:py-2">
       <article className="space-y-4 prose text-gray-600">
        <h2>What are the Causes of Erectile Dysfunction?</h2>

        <p className="text-justify ">
         ED can be caused by physical or psychological factors. Physical causes
         may include high blood pressure, diabetes, heart disease, obesity, and
         certain medications. Psychological causes may include stress, anxiety,
         depression, and relationship problems.
        </p>
       </article>
      </div>

      <div className="lg:py-2">
       <article className="space-y-4 prose text-gray-600">
        <h2>What are the Symptoms of Erectile Dysfunction?</h2>

        <p className="text-justify ">
         The main symptoms of ED are difficulty getting an erection, difficulty
         maintaining an erection, and decreased sexual desire. If you experience
         any of these symptoms, it is important to seek medical help..
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>
   <EdPrincing />
   <PageCTA />
  </div>
 );
}

export default page;

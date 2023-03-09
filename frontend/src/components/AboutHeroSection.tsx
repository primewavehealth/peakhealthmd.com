import Image from "next/image";
import Link from "next/link";

function AboutHeroSection() {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="container px-6 py-16 mx-auto text-center">
    <div className="max-w-2xl mx-auto">
     <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
      Our Story
     </h1>
     <p className="py-8 mt-6 text-2xl text-gray-500 dark:text-gray-300">
      To provide quality health services and facilities for the community, to
      promote wellness, to relieve suffering, and to restore health as swiftly,
      safely, and humanely as it can be done, consistent with the best service
      we can give at the highest value for all concerned.
     </p>
     <div className="mt-4 md:mt-8">
      <Link
       href="#"
       className="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
       Get in Touch
      </Link>
     </div>
    </div>

    <div className="flex justify-center mt-10">
     <Image
      className="object-cover w-full h-97 rounded-xl lg:w-4/5"
      src="/main_banner.jpg"
      alt="About"
      width={900}
      height={500}
     />
    </div>
   </div>
  </section>
 );
}

export default AboutHeroSection;

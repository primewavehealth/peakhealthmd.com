import Image from "next/image";
import Link from "next/link";

function AboutSection() {
 return (
  <section className="bg-gradient-to-r from-blue-600 to-blue-800">
   <div className="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 ">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
     <div className="p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="max-w-xl mx-auto text-center">
       <h2 className="text-2xl font-bold text-white md:text-3xl">
        The Vegas Clinic:&nbsp;&nbsp;Our Mission
       </h2>

       <p className="hidden text-justify text-white/90 sm:mt-4 sm:block">
        To provide quality health services and facilities for the community, to
        promote wellness, to relieve suffering, and to restore health as
        swiftly, safely, and humanely as it can be done, consistent with the
        best service we can give at the highest value for all concerned.
       </p>

       <div className="mt-4 md:mt-8">
        <Link
         href="/about-the-vegas-clinic"
         className="inline-block px-12 py-3 text-sm font-medium text-blue-500 transition bg-white border border-white rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
        >
         Learn More
        </Link>
       </div>
      </div>
     </div>

     <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
      <Image
       alt="Student"
       src="/man-outdoors.jpg"
       className="object-cover w-full h-40 sm:h-56 md:h-full hover:scale-95"
       height={300}
       width={250}
       quality={100}
      />

      <Image
       alt="Student"
       src="/happy-couple1.jpg"
       className="object-cover w-full h-40 sm:h-56 md:h-full hover:scale-95"
       height={300}
       width={250}
       quality={100}
      />
     </div>
    </div>
   </div>
  </section>
 );
}

export default AboutSection;

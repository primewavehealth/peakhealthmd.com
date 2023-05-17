import Image from "next/image";
import Link from "next/link";

function AboutSection() {
 return (
  <section className="bg-gradient-to-r from-blue-600 to-blue-800">
   <div className="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 ">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
     <div className="p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="max-w-xl mx-auto text-center">
       <span className="text-white">Welcome to </span>
       <h1 className="mb-4 text-xl font-bold text-white md:text-4xl">
        The Vegas Clinic
       </h1>

       <p className="text-base text-justify lg:text-lg text-white/90 sm:mt-4">
        We specialize in pain management and wellness, offering personalized
        treatment plans to help our patients achieve optimal health. We treat a
        variety of pain conditions, including chronic pain, back pain, neck pain
        and joint pain. We also offer a range of wellness services such as IV
        therapy, shockwave therapy and weight loss programs. Our experienced
        medical professionals are dedicated to providing compassionate,
        patient-centered care to help our patients live their best lives.
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
       src="/images/run.jpg"
       className="object-cover w-full h-40 sm:h-56 md:h-full hover:scale-95"
       height={300}
       width={250}
       quality={100}
      />

      <Image
       alt="Student"
       src="/images/gentle.jpg"
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

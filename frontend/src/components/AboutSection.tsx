import Link from "next/link";
import Edge from "./Edge";

function AboutSection() {
 return (
  <section className="text-blue-900">
   <div className="mx-auto lg:my-16 max-w-screen-2xl">
    <div className="grid grid-cols-1 lg:grid-cols-2">
     <div className="relative mx-auto lg:pt-14">
      <Edge />
     </div>
     <div className="p-8 md:p-12 lg:px-16 lg:py-30">
      <div className="max-w-xl px-6 pt-12 mx-auto space-y-3">
       <span className="text-4xl font-semibold">
        Experience Unrivaled Pain Relief at Our Premier Care Clinic{" "}
       </span>

       <p className="py-6 leading-10 text-justify sm:mt-4 ">
        Greetings and warmest welcome to Primewave Health in the heart of{" "}
        <Link href="https://www.lasvegasnevada.gov/">Las Vegas</Link>.We take a
        holistic approach to wellness. We stand by your side with a team of
        compassionate wellness experts in Las Vegas, ready to craft personalized
        treatment journeys that lead you back to a life filled with joy,
        movement, and improved wellness.
       </p>

       <div className="mt-4 md:mt-8">
        <Link
         className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-blue-900 bg-yellow-400 rounded-full hover:text-white hover:bg-blue-900"
         href="/appointment"
        >
         <span>Request Consultation</span>{" "}
         <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
           fill="currentColor"
           fillRule="evenodd"
           clipRule="evenodd"
          ></path>
         </svg>
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default AboutSection;

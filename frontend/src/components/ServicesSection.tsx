import Link from "next/link";
import Button from "./UI/Button";

const mobileData = [
 {
  name: "Chronic Pain",
  href: "/chronic-pain",
 },
 {
  name: "Joint Pain",
  href: "/joint-pain",
 },
 { name: "Pain Mgt", href: "/pain-treatment-in-las-vegas" },

 {
  name: "Chronic Fatigue",
  href: "/chronic-fatigue-syndrome-las-vegas",
 },

 {
  name: "Back Pain",
  href: "/back-pain",
 },

 { name: "Weight Loss", href: "/weight-loss-las-vegas" },
];
function ServicesSection() {
 return (
  <section className="py-24 bg-sky-100 sm:py-32">
   {/* mobile */}
   <div className="text-gray-600 md:hidden body-font">
    <div className="container px-5 py-16 mx-auto">
     <div className="mb-20 text-center">
      <p className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
       Our Specialties
      </p>
      <p className="px-4 mx-auto text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4">
       We care for all pain conditions.
      </p>
     </div>
     <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
      {mobileData.map(({ name, href }) => (
       <div className="w-full p-2 sm:w-1/2" key={name}>
        <Link href={href} passHref>
         <div className="flex items-center h-full p-4 bg-white rounded">
          <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="3"
           className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500"
           viewBox="0 0 24 24"
          >
           <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
           <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="font-medium title-font">{name}</span>
         </div>
        </Link>
       </div>
      ))}
     </div>

     <div className="text-center">
      <Button
       text="Request Consultation"
       href="https://cal.com/primewavehealth/appointment"
       icon=<svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-auto"
        viewBox="0 0 24 24"
       >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
       </svg>
      />
     </div>
    </div>
   </div>

   {/* desktop */}
   <div className="hidden w-full px-6 mx-auto md:block lg:px-4">
    <div className="max-w-2xl mx-auto lg:text-center">
     <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Our Specialties
     </p>
     <p className="py-4 mt-6 text-lg leading-8 text-center text-gray-600">
      We care for all pain conditions.
     </p>
    </div>
    <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-7xl">
     <div className="grid justify-center grid-cols-3 gap-y-4 grid-x-4 place-items-center">
      {mobileData.map(({ name, href }) => (
       <div className="p-4 border-4 border-black w-[300px] h-[100px] text-center">
        <Link href={href}>
         <span className="text-3xl">{name}</span>
        </Link>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}

export default ServicesSection;

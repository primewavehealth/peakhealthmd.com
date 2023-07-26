import Link from "next/link";
import Button from "./UI/Button";

const mobileData = [
 {
  name: "Chronic Pain",
  href: "/chronic-pain-las-vegas",
  text:
   "Persistent, debilitating discomfort that endures beyond the expected healing time, chronic pain affects daily life, hindering activities and causing distress.",
 },
 {
  name: "Back Pain",
  href: "/back-pain-las-vegas",
  text:
   "Discomfort in the back region, ranging from mild to severe, caused by various factors like muscle strain, injury, or spinal issues.",
 },
 {
  name: "Joint Pain",
  href: "/joint-pain-las-vegas",
  text:
   "Discomfort or soreness in the joints, commonly caused by arthritis, injury, or inflammation, leading to limited mobility and hindrance in daily activities.",
 },
 {
  name: "Neck Pain",
  href: "/neck-pain-las-vegas",
  text:
   "Discomfort or pain experienced in the area of the neck, which connects the head to the torso. It can range from mild to severe and may be acute or chronic.",
 },

 {
  name: "Knee Pain",
  href: "/knee-pain-las-vegas",
  text:
   "Knee pain is a common complaint that can occur due to various reasons, including injury, overuse, underlying medical conditions, or the natural aging process.",
 },

 {
  name: "Fibromylagia",
  href: "/fibromyalgia-treatment-las-vegas",
  text:
   "Fibromyalgia is a chronic disorder causing widespread pain, fatigue, and cognitive difficulties with heightened sensitivity to stimuli.",
 },
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
       <div className="w-full p-2 sm:w-1/2 " key={name}>
        <Link href={href} passHref>
         <div className="flex items-center h-full p-4 bg-white rounded hover:border-4 hover:border-blue-600">
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
       href="https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services"
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
      Pain Conditions we treat
     </p>
     {/* <p className="py-4 mt-6 text-lg leading-8 text-center text-gray-600">
      We care for all pain conditions.
     </p> */}
    </div>
    <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-7xl">
     <div className="grid justify-center grid-cols-3 gap-y-8 grid-x-8 place-items-center">
      {mobileData.map(({ name, href, text }) => (
       <Link href={href} key={href}>
        {/* <div className="relative flex flex-col justify-center min-h-screen py-6 overflow-hidden bg-gray-50 sm:py-12"> */}

        <div className="relative p-6 w-[450px] h-[400px] text-gray-600 bg-white shadow-xl hover:border-4 hover:border-blue-600 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-6">
         <div className="max-w-md mx-auto">
          <div className="divide-y divide-gray-300/50">
           <div className="py-8 space-y-6 text-base leading-7">
            <h3 className="text-center">{name} </h3>

            <p className="text-justify duration-300 ">{text}</p>
           </div>
           <div className="pt-8 text-base font-semibold leading-7">
            {/* <span className=" hover:scale-125"> &rarr;</span> */}
           </div>
          </div>
         </div>
        </div>
        {/* </div> */}
       </Link>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}

export default ServicesSection;

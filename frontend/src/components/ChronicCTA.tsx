import Button from "./UI/Button";

function ChronicCTA() {
 return (
  <div className="my-12 bg-slate-100">
   <div className="z-20 w-full px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
     <span className="block">Speed up Your Healing</span>
     {/* <span className="block text-indigo-500">It&#x27;s today or never.</span> */}
    </h2>
    <p className="max-w-xl mx-auto mt-4 text-2xl text-gray-600">
     Shockwave Therapy accelerates the body's natural healing processes,
     promoting tissue regeneration and reducing inflammation. By stimulating
     blood flow and breaking up scar tissue, it helps you get back to an active,
     pain-free lifestyle faster.
    </p>
    <div className="pt-6 lg:mt-0 lg:flex-shrink-0">
     <Button
      text="Schedule An Appointment"
      href="/consultation"
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
 );
}

export default ChronicCTA;

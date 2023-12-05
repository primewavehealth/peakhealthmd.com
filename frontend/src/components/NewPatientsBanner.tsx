import Link from "next/link";

function NewPatientBanner() {
 return (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
   <div className="p-8 rounded shadow-xl sm:p-16">
    <div className="flex flex-col lg:flex-row">
     <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
      <h2 className="font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl sm:leading-none">
       Primewave Health is
       <br className="hidden md:block" />
       Accepting{" "}
       <span className="inline-block text-blue-600">New Patients</span>
      </h2>
     </div>
     <div className="lg:w-1/2">
      <p className="mb-4 text-xl text-gray-700">
       We welcome new patients with open arms. Whether you prefer the
       convenience of a brisk walk-in or the comfort of a telehealth visit, our
       dedicated team is ready to provide exceptional care tailored to your
       unique needs.
      </p>
      <Link
       className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-blue-900 bg-yellow-400 rounded-full hover:text-white hover:bg-blue-900"
       href="/appointment"
      >
       <span>Schedule an Appointnment</span>{" "}
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
 );
}

export default NewPatientBanner;

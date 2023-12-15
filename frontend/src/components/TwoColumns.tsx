import Link from "next/link";
import NewPatientBanner from "./NewPatientsBanner";

const TwoColumnSection = () => {
 return (
  <div className="flex flex-col md:flex-row">
   {/* First Column (2/5 width) */}
   <div className="w-full md:mt-32 md:w-2/5">
    <div className="flex items-center justify-center">
     <div className="px-16 rounded-lg bg-gray-50 py-14">
      <div className="flex justify-center">
       <div className="p-6 bg-green-200 rounded-full">
        <div className="flex items-center justify-center w-16 h-16 p-4 bg-green-500 rounded-full">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white"
         >
          <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M4.5 12.75l6 6 9-13.5"
          />
         </svg>
        </div>
       </div>
      </div>
      <h3 className="my-4 text-3xl font-semibold text-center text-gray-700">
       15% Holiday Discount
      </h3>
      <p className="text-xl font-bold text-center ">
       Get 15% off all treatments till new year
      </p>
      <Link
       href="/appointment"
       className="block px-6 py-3 mx-auto mt-10 text-base font-medium text-center text-yellow-100 bg-yellow-400 border-4 border-transparent rounded-xl outline-8 hover:outline hover:duration-300"
      >
       Claim Offer Now
      </Link>
     </div>
    </div>
   </div>

   {/* Second Column (3/5 width) */}
   <div className="w-full px-4 my-8 md:w-3/5">
    <NewPatientBanner />
   </div>
  </div>
 );
};

export default TwoColumnSection;

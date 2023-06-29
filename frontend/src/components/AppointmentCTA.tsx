import { PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const phoneNumber = "(702) 625-4334";

function AppointnmentCTA() {
 return (
  <div className="flex flex-col items-center justify-center gap-6 p-10 mt-8 border-blue-50 bg-blue-50 md:flex-row">
   <div className="text-3xl">
    <svg
     fill="#2962ff"
     width="206px"
     height="150px"
     viewBox="0 0 1920 1920"
     xmlns="http://www.w3.org/2000/svg"
     stroke="#2962ff"
    >
     <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
     <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
     ></g>
     <g id="SVGRepo_iconCarrier">
      {" "}
      <path
       d="M1411.824 0c31.17 0 56.47 25.3 56.47 56.471v56.47h169.412c93.403 0 169.412 76.01 169.412 169.412V1920H113V282.353c0-93.402 76.009-169.412 169.412-169.412h169.41v-56.47c0-31.172 25.3-56.47 56.472-56.47s56.47 25.298 56.47 56.47v56.47h790.589v-56.47c0-31.172 25.299-56.47 56.47-56.47Zm282.352 564.705H225.942v1242.353h1468.234V564.705Zm-1016.47 677.648v338.824H338.882v-338.824h338.824Zm451.765 0v338.824H790.647v-338.824h338.824Zm451.764 0v338.824h-338.823v-338.824h338.823Zm-1016.47 112.941H451.824v112.941h112.941v-112.941Zm451.764 0H903.588v112.941h112.941v-112.941Zm451.765 0h-112.941v112.941h112.941v-112.941ZM677.706 790.588v338.824H338.882V790.588h338.824Zm451.765 0v338.824H790.647V790.588h338.824Zm451.764 0v338.824h-338.823V790.588h338.823ZM564.765 903.53H451.824v112.941h112.941V903.53Zm451.764 0H903.588v112.941h112.941V903.53Zm451.765 0h-112.941v112.941h112.941V903.53ZM451.823 225.882H282.412c-31.06 0-56.47 25.3-56.47 56.471v169.412h1468.234V282.353c0-31.172-25.411-56.47-56.47-56.47h-169.412v56.47c0 31.172-25.3 56.471-56.47 56.471-31.172 0-56.471-25.299-56.471-56.47v-56.472H564.765v56.471c0 31.172-25.3 56.471-56.471 56.471-31.171 0-56.471-25.299-56.471-56.47v-56.472Z"
       fillRule="evenodd"
      ></path>{" "}
     </g>
    </svg>
   </div>
   <div className="flex-col font-bold text-center text-blue-700">
    <p className="text-2xl lg:text-4xl ">Request An Appointment</p>
    {/* <p>We are the Go to Pain Treatment Center in Las Vegas.</p> */}
   </div>
   <div className="flex justify-between text-2xl font-bold align-baseline">
    <PhoneIcon className="w-8 h-8 pt-1 text-blue-600" />
    <Link
     href="tel:7026254334"
     // onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
    >
     <p className="text-xl font-bold text-blue-700 dark:text-blue-400 ">
      (702) 625-4334
     </p>
    </Link>
   </div>

   <Link
    href="https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/start"
    className="inline-block px-6 py-4 my-1 mr-4 text-base font-medium text-white transition bg-blue-700 rounded hover:text-blue-200 md:px-9 lg:px-6 xl:px-9"
   >
    FInd A Specialist
   </Link>
  </div>
 );
}

export default AppointnmentCTA;

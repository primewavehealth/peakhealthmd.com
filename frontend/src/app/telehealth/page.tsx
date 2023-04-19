import Button from "@/components/UI/Button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Telehealth in Las Vegas",
 description:
  "Get convenient and accessible healthcare with telehealth services in Las Vegas - connect with our experienced healthcare providers from the comfort of your own home.",
};

function TeleHealth() {
 return (
  <section className="py-20 bg-white">
   <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
    <div className="relative">
     <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
      {" "}
      Find A Specialist
     </h2>
     <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
      Meet our team of experienced medical professionals who are available to
      speak with you and provide solutions to your health needs.
     </p>
    </div>

    <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
     <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
      <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
       {" "}
       {/* Your tagline{" "} */}
      </h2>
      <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
       {" "}
       Dr. Maxine Ingham{" "}
      </h1>
      <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
       {" "}
       Dr. Ingham is our Chief medical director. She specializes in internal
       medicine.{" "}
      </p>
      <div className="flex flex-col justify-between w-full lg:flex-row">
       <div className="mt-4">
        <Link
         style={{ display: "block" }}
         href="https://www.zocdoc.com/practice/prime-wave-77528"
         className="zd-plugin"
         data-type="book-button"
         data-practice-id={77528}
         title="Prime Wave"
        >
         <img
          src="https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png"
          alt="Prime Wave"
          title="Prime Wave"
          style={{ border: 0 }}
         />
        </Link>
       </div>
       <Button
        href="https://www.cal.com/drmaxine"
        text="Schedule An Appointment"
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
     <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
      <Image
       className="object-cover object-center rounded-lg "
       width={450}
       height={450}
       alt="profile-photo"
       src="/images/drmaxine.webp"
      />
     </div>
    </div>

    <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
     <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
      <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
       {" "}
       {/* Your tagline{" "} */}
      </h2>
      <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
       {" "}
       Dr. Alton Walters{" "}
      </h1>
      <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
       {" "}
       Dr. Walters specializes in Internal and integrative medicine.{" "}
      </p>
      <div className="flex flex-col justify-between w-full lg:flex-row">
       <div className="mt-4">
        <Link
         style={{ display: "block" }}
         href="https://www.zocdoc.com/practice/prime-wave-77528"
         className="zd-plugin"
         data-type="book-button"
         data-practice-id={77528}
         title="Prime Wave"
        >
         <img
          src="https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png"
          alt="Prime Wave"
          title="Prime Wave"
          style={{ border: 0 }}
         />
        </Link>
       </div>
       <Button
        href="https://www.cal.com/drerich"
        text="Schedule An Appointment"
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
     <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
      <Image
       className="object-cover object-center rounded-lg "
       width={450}
       height={450}
       alt="profile-photo"
       src="/images/walters.png"
      />
     </div>
    </div>

    <div className="flex flex-col items-center p-4 mt-6 shadow-sm rounded-xl bg-blue-50 text-slate-800 dark:bg-slate-900 dark:text-slate-400 md:p-12">
     <div className="inline-flex items-center">
      <svg
       className="w-6 h-6 mr-2 text-teal-900 fill-current dark:text-teal-400"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512"
      >
       <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM432 224h-160C263.2 224 256 231.2 256 240S263.2 256 272 256h160C440.8 256 448 248.8 448 240S440.8 224 432 224zM224 240C224 231.2 216.8 224 208 224h-128C71.16 224 64 231.2 64 240S71.16 256 80 256h128C216.8 256 224 248.8 224 240zM144 288h-32C103.2 288 96 295.2 96 304S103.2 320 112 320h32C152.8 320 160 312.8 160 304S152.8 288 144 288zM400 288h-32C359.2 288 352 295.2 352 304s7.156 16 16 16h32c8.844 0 16-7.156 16-16S408.8 288 400 288zM304 288h-96C199.2 288 192 295.2 192 304S199.2 320 208 320h96c8.844 0 16-7.156 16-16S312.8 288 304 288z" />
      </svg>
      <h2 className="text-xl font-semibold text-teal-900 dark:text-teal-400">
       Got A Question
      </h2>
     </div>
     <p className="max-w-2xl mt-6 mb-6 text-center text-slate-800 dark:text-teal-400">
      We are ever ready to answer your questions.
     </p>{" "}
     <Button
      href="/contact"
      text="Contact Us"
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
  </section>
 );
}

export default TeleHealth;

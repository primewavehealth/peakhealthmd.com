import Button from "./UI/Button";

function CTASection() {
 return (
  <section className="py-5 lg:py-[50px] bg-blue-900">
   <div className="container mx-auto">
    <div className="bg-primary relative z-10 overflow-hidden rounded py-6 px-8 md:p-[70px]">
     <div className="flex flex-wrap items-center -mx-4">
      <div className="w-full px-4 lg:w-1/2">
       <span className="mx-auto mb-2 text-base font-semibold text-center text-yellow-400 lg:text-left md:block">
        Your Path to Pain-Free Living Starts Here
       </span>
       <p className=" text-center md:text-start mb-6 text-xl lg:text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
        Experience Expert Pain Care in Las Vegas{" "}
       </p>
      </div>
      <div className="w-full px-4 lg:w-1/2">
       <div className="flex flex-wrap justify-center lg:space-x-4 lg:justify-end">
        <Button
         text="Book An Appointment"
         href="https://primewavehealth.setmore.com"
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
        <Button
         text="Contact Us"
         href="/contact"
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
     <div>
      <span className="absolute top-0 left-0 z-[-1]">
       <svg
        width="189"
        height="162"
        viewBox="0 0 189 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        <ellipse
         cx="16"
         cy="-16.5"
         rx="173"
         ry="178.5"
         transform="rotate(180 16 -16.5)"
         fill="url(#paint0_linear)"
        />
        <defs>
         <linearGradient
          id="paint0_linear"
          x1="-157"
          y1="-107.754"
          x2="98.5011"
          y2="-106.425"
          gradientUnits="userSpaceOnUse"
         >
          <stop stopColor="white" stopOpacity="0.07" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
         </linearGradient>
        </defs>
       </svg>
      </span>
      <span className="absolute bottom-0 right-0 z-[-1]">
       <svg
        width="191"
        height="208"
        viewBox="0 0 191 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        <ellipse
         cx="173"
         cy="178.5"
         rx="173"
         ry="178.5"
         fill="url(#paint0_linear)"
        />
        <defs>
         <linearGradient
          id="paint0_linear"
          x1="-3.27832e-05"
          y1="87.2457"
          x2="255.501"
          y2="88.5747"
          gradientUnits="userSpaceOnUse"
         >
          <stop stopColor="white" stopOpacity="0.07" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
         </linearGradient>
        </defs>
       </svg>
      </span>
     </div>
    </div>
   </div>
  </section>
 );
}

export default CTASection;

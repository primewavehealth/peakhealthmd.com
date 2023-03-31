import Image from "next/image";

function PageCTA() {
 return (
  <div className="bg-zinc-100 dark:bg-gray-800">
   <div className="flex flex-col py-8 lg:flex-row justify-evenly">
    <div className="flex flex-col w-2/3 px-4 py-12 mx-auto text-start sm:px-6 lg:py-16 lg:px-8">
     <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
      <span className="block">
       Overcome Erectile Dysfunction and stay satisfied.
      </span>
     </h2>
     <p className="mt-4 text-xl text-gray-600">
      We are the go to erectile dysfunction treatment center in Las Vegas. Call
      today and solve your ED problem-for good! Our licensed physicians offer
      personalized, medical solutions that are private, discreet and guaranteed
      to work for you.
     </p>

     <button className="flex items-center w-[300px] px-4 py-4 mt-4 text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-gray-500">
      Schedule an Appointment
      <svg
       fill="none"
       stroke="currentColor"
       stroke-linecap="round"
       stroke-linejoin="round"
       stroke-width="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     </button>
    </div>
    <div className="p-4 mx-auto">
     <Image
      src="/happy-man.avif"
      className="bg-cover "
      width={350}
      height={350}
      alt="erectile-dysfunction"
     />
    </div>
   </div>
  </div>
 );
}

export default PageCTA;

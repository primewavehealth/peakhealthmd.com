import Image from "next/image";
import Link from "next/link";

function Hero() {
 return (
  <header>
   <div className="px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-32">
    <div className="w-full max-w-3xl mx-auto mb-8 text-center md:mb-12 lg:mb-16">
     <h1 className="mb-4 text-4xl font-bold text-blue-900 md:text-6xl">
      Primewave Visa Franchise{" "}
      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
       Advantage
      </span>
     </h1>
     <p className="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-6 lg:mb-8">
      Embark on an exciting venture by becoming a franchise partner with
      Primewave Health
     </p>

     <div className="flex items-stretch justify-center">
      <Link
       href="#"
       className="inline-block px-8 py-4 mr-5 font-semibold text-center text-white bg-black rounded-md md:mr-6 lg:mr-8"
      >
       Get Started
      </Link>
      <Link
       href="#"
       className="flex items-center justify-center px-6 py-3 font-bold text-black border border-black border-solid rounded-md"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-youtube"
       >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
       </svg>
       <p className="text-sm text-black sm:text-base">Watch Demo</p>
      </Link>
     </div>
    </div>

    <Image
     src="/images/passport2.jpg"
     alt=""
     className="inline-block max-h-[512px] w-full object-cover"
     height={667}
     width={1000}
    />
   </div>
  </header>
 );
}

export default Hero;

import Image from "next/image";
import Link from "next/link";

function Banner() {
 return (
  <div className="w-full overflow-hidden bg-blue-50">
   <div className="flex bg-white h-[600px]">
    <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2 ">
     <div>
      <h1 className="text-4xl font-black text-center text-blue-900 lg:pt-8 sm:mx-auto sm:w-10/12 md:w-2/3 sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
       Affordable Pain Care in <br className="hidden lg:block" />{" "}
       <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
        Las Vegas
       </span>
       .
      </h1>
      <p className="py-4 text-2xl font-medium text-blue-900">
       Fast Relief, Personalized Care, and Peace of Mind – Because You Deserve
       It. <br />{" "}
       <span className="text-lg lg:text-2xl">
        #1 Shockwave treatment center in Vegas
       </span>
      </p>
      <div className="flex flex-col justify-center gap-3 mt-5 md:justify-start md:flex-row">
       <Link
        href="#treatments"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-left text-blue-900 bg-blue-100 rounded-full hover:text-white hover:bg-blue-900"
       >
        <span className="">Our Services</span>

        <svg
         width="15"
         height="15"
         viewBox="0 0 15 15"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
         ></path>
        </svg>
       </Link>
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

    <div className="hidden lg:block lg:w-1/2 clip-bg">
     <div className="w-full h-full">
      <Image
       alt="banner"
       src="/images/pain-clinic.jpeg"
       className="object-contain"
       width={1000}
       height={1000}
       sizes="100vw"
       quality={100}
       priority
      />
      <div className="h-full bg-blue-800 opacity-75"></div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Banner;

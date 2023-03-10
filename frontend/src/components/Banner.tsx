import Link from "next/link";

function Banner() {
 return (
  <main className="bg-gradient-to-r from-sky-400 to-cyan-300 isolate">
   <div className="relative px-6 lg:px-8">
    {/* <Image
     className="absolute inset-0 object-cover bg-center bg-no-repeat bg-contain"
     alt="banner"
     // src="https://img.freepik.com/free-photo/race-women-looking-young-horizontal-standing_1291-32.jpg?w=1380&t=st=1678338083~exp=1678338683~hmac=6e156971d795465e4e2a90b5e9c6e749c862d551bffd42add20d0be39b9acd43"
     src="/main_banner.jpg"
     fill
     quality={100}
    /> */}
    <div className="max-w-4xl py-32 mx-auto sm:py-48 lg:py-56">
     <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative px-3 py-1 text-sm leading-6 rounded-full text-neutral-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
       Get 15% for All Hormone Therapies. Hurry, Offer lasts tills 3/30.{" "}
       <Link href="#" className="font-semibold text-indigo-600">
        <span className="absolute inset-0" aria-hidden="true" />
        Learn More <span aria-hidden="true">&rarr;</span>
       </Link>
      </div>
     </div>
     <div className="text-center">
      <h1 className="text-2xl font-bold tracking-tight text-blue-600 sm:text-6xl">
       <span className="text-black">Welcome to</span> Peak Health
      </h1>
      <p className="mt-6 text-sm leading-8 lg:text-xl text-neutral-800">
       Patient-centered healthcare with excellence in quality
      </p>
      <div className="flex items-center justify-center mt-10 gap-x-6">
       <Link
        href="#"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
       >
        Find A Specialist
       </Link>
       <Link
        href="/contact"
        className="text-sm font-semibold leading-6 text-gray-900"
       >
        Get in Touch <span aria-hidden="true">→</span>
       </Link>
      </div>
      {/* <div className="relative px-3 py-1 text-sm leading-8 rounded-full text-neutral-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
       Get 15% for All Hormone Therapies. Hurry, Offer lasts tills 3/30.{" "}
       <Link href="#" className="font-semibold text-indigo-600">
        <span className="absolute inset-0" aria-hidden="true" />
        Learn More <span aria-hidden="true">&rarr;</span>
       </Link>
      </div> */}
     </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
     <svg
      className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
      viewBox="0 0 1155 678"
     >
      <path
       fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
       fillOpacity=".3"
       d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      {/* <defs>
       <linearGradient
        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
        x1="1155.49"
        x2="-78.208"
        y1=".177"
        y2="474.645"
        gradientUnits="userSpaceOnUse"
       >
        <stop stopColor="#9089FC" />
        <stop offset={1} stopColor="#FF80B5" />
       </linearGradient>
      </defs> */}
     </svg>
    </div>
   </div>
  </main>
 );
}

export default Banner;

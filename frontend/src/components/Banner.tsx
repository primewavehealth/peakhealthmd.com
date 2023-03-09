import Image from "next/image";

function Banner() {
 return (
  <section className="relative ">
   <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
   <Image
    className="absolute inset-0 object-cover bg-center bg-no-repeat bg-contain"
    alt="banner"
    src="https://img.freepik.com/free-photo/race-women-looking-young-horizontal-standing_1291-32.jpg?w=1380&t=st=1678338083~exp=1678338683~hmac=6e156971d795465e4e2a90b5e9c6e749c862d551bffd42add20d0be39b9acd43"
    fill
    quality={100}
   />
   <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="max-w-xl text-center sm:text-left">
     <h1 className="text-3xl font-extrabold text-blue-500 sm:text-5xl">
      Welcome to PeakHealth
      <strong className="block pt-4 font-medium text-blue-700">
       Better Health care is here
      </strong>
     </h1>

     <p className="max-w-lg mt-4 text-2xl font-bold text-blue-700 sm:leading-relaxed">
      World class health care services using latest medical technologies
     </p>

     <div className="flex flex-wrap gap-4 mt-8 text-center">
      <a
       href="#"
       className="px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
       FInd A Specialist
      </a>

      <a
       href="#"
       className="px-12 py-3 text-sm font-medium text-blue-600 bg-white rounded shadow hover:text-blue-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
      >
       Get in Touch
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Banner;

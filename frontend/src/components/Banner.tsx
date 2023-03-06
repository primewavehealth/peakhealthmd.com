function Banner() {
 return (
  <section className="relative bg-[url(https://img.freepik.com/free-photo/asian-young-main-group-hospital-professional_1291-37.jpg?w=996&t=st=1677702113~exp=1677702713~hmac=e75f5cbb6db88b0e3599d698bf05ccda9a841c8a93fc55a92ccfc7db9e6af0c9)] bg-contain bg-center bg-no-repeat h-[420px] lg:h-[600px]">
   <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

   <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="max-w-xl text-center sm:text-left">
     <h1 className="pb-8 text-3xl font-extrabold text-blue-500 sm:text-5xl">
      Welcome to PeakHealth
      <strong className="block pt-4 font-medium text-blue-700">
       Better Health care is here
      </strong>
     </h1>

     <p className="max-w-lg mt-4 text-xl font-medium text-blue-700 sm:leading-relaxed">
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

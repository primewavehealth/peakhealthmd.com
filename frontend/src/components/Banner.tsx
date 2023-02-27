function Banner() {
 return (
  <section className="relative bg-[url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
   <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

   <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="max-w-xl text-center sm:text-left">
     <h1 className="pb-8 text-3xl font-extrabold sm:text-5xl">
      Welcome to PeakHealth
      <strong className="block pt-4 font-medium text-blue-700">
       Better Mens Health care is here
      </strong>
     </h1>

     <p className="max-w-lg mt-4 font-medium sm:text-xl sm:leading-relaxed">
      World class mens health care services using latest medical technologies
     </p>

     <div className="flex flex-wrap gap-4 mt-8 text-center">
      <a
       href="#"
       className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
       Get Started
      </a>

      <a
       href="#"
       className="block w-full px-12 py-3 text-sm font-medium text-blue-600 bg-white rounded shadow hover:text-blue-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
      >
       Learn More
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Banner;

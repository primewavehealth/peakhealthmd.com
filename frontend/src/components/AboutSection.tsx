function AboutSection() {
 return (
  <section>
   <div className="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
     <div className="p-8 bg-blue-600 md:p-12 lg:px-16 lg:py-24">
      <div className="max-w-xl mx-auto text-center">
       <h2 className="text-2xl font-bold text-white md:text-3xl">
        About PeakHealth
       </h2>

       <p className="hidden text-white/90 sm:mt-4 sm:block">
        PeakHealth is health care company dedicated to creating world class
        medical care for men. Our goal is to help regain their health, their
        vitality and boost their confidence.
       </p>

       <div className="mt-4 md:mt-8">
        <a
         href="#"
         className="inline-block px-12 py-3 text-sm font-medium text-blue-500 transition bg-white border border-white rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
        >
         Learn More
        </a>
       </div>
      </div>
     </div>

     <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
      <img
       alt="Student"
       src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
       className="object-cover w-full h-40 sm:h-56 md:h-full"
      />

      <img
       alt="Student"
       src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
       className="object-cover w-full h-40 sm:h-56 md:h-full"
      />
     </div>
    </div>
   </div>
  </section>
 );
}

export default AboutSection;

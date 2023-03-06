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
        medical care. Our goal is to help people access quality health care.
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
       src="https://img.freepik.com/free-photo/young-man-hiking-outdoors-giving-five-his-wife_651396-3489.jpg?w=826&t=st=1677620662~exp=1677621262~hmac=e9417c1bef8600c6092d8fdebfe882625066189bde512544e5b02cd2b6474064"
       className="object-cover w-full h-40 sm:h-56 md:h-full hover:scale-95"
      />

      <img
       alt="Student"
       src="https://img.freepik.com/free-photo/sport-oudoor_144627-44629.jpg?w=996&t=st=1678127041~exp=1678127641~hmac=39e2fea17b7e4d32058e671148a43b0c57198758ec92d2e25426265e176e01ee"
       className="object-cover w-full h-40 sm:h-56 md:h-full hover:scale-95"
      />
     </div>
    </div>
   </div>
  </section>
 );
}

export default AboutSection;

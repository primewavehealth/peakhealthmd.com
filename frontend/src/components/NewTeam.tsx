import Image from "next/image";

function NewTeam() {
 return (
  <section className="w-full px-7 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-32">
   <div className="flex flex-col items-center md:flex-row">
    <div className="">
     <h2 className="pb-2 text-3xl text-center font-bold header-color md:mb-6 md:text-5xl lg:mb-4">
      Meet Our{" "}
      <span className="header-gradient-color">
       Providers
      </span>
     </h2>
     <p className="text-gray-600 text-center lg:mx-auto">
      Meet our dedicated team of compassionate and experienced healthcare
      professionals at the forefront of pain management in Las Vegas. With a
      shared commitment to improving your quality of life, we're here to provide
      personalized care and support on your journey to a pain-free future.
     </p>

    <div className="mt-8 md:mt-0"> 
     <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4">
      {/*  <div className="text-center">
       <Image
        className="inline-block object-cover w-full h-full mb-4"
        src="/images/naysha-isom.jpg"
        alt="Dr. Naysha M. Isom"
        width={288}
        height={281}
       />

       <p className="text-lg font-semibold">Dr. Naysha M. Isom</p>
       <span className="block text-sm text-gray-500">Family Medicine</span>
      </div> */}

      <div className="text-center pb-20 md:p-20 sm:pb-20">
       <Image
        className="inline-block object-cover w-full h-full mb-4"
        src="/images/primewavehealth-doctor.jpg"
        alt="Dr. Kyrah Bacote"
        width={288}
        height={281}
       />
       <p className="text-lg font-semibold">Dr. Kyrah Bacote</p>
       <span className="block text-sm text-gray-500">Integrative Medicine</span>
      </div>
      {/*
      <div className="text-center pb-20 md:p-20">
       <Image
        className="inline-block object-cover w-full h-full mb-4"
        src="/images/primewavehealth-doctor.jpg"
        alt="Another Doctor"
        width={288}
        height={281}
       />
       <p className="text-lg font-semibold">Another Doctor</p>
       <span className="block text-sm text-gray-500">Another Medicine</span>
      </div>
      
      <div className="text-center md:p-20">
       <Image
        className="inline-block object-cover w-full h-full mb-4"
        src="/images/primewavehealth-doctor.jpg"
        alt="Another Doctor"
        width={288}
        height={281}
       />
       <p className="text-lg font-semibold">Another Another Doctor</p>
       <span className="block text-sm text-gray-500">Another Another Medicine</span>
      </div>
      */}
      <div className="text-center"></div>
     </div>
    </div>
    </div>
   </div>
  </section>
 );
}

export default NewTeam;

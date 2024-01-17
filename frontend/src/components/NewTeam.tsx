import Image from "next/image";

function NewTeam() {
 return (
  <section className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-32">
   <div className="flex flex-col items-center md:flex-row">
    <div className="md:w-1/2 md:pr-8">
     <h2 className="pb-2 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-4">
      Meet Our Providers
     </h2>
     <p className="text-gray-600 lg:mx-auto">
      Meet our dedicated team of compassionate and experienced healthcare
      professionals at the forefront of pain management in Las Vegas. With a
      shared commitment to improving your quality of life, we're here to provide
      personalized care and support on your journey to a pain-free future.
     </p>
    </div>

    <div className="mt-8 md:w-1/2 md:mt-0">
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

      <div className="text-center">
       <Image
        className="inline-block object-cover w-full h-full mb-4"
        src="/images/kyrahbacote.png"
        alt="Dr. Kyrah Bacote"
        width={288}
        height={281}
       />
       <p className="text-lg font-semibold">Dr. Kyrah Bacote</p>
       <span className="block text-sm text-gray-500">Integrative Medicine</span>
      </div>
      <div className="text-center"></div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default NewTeam;

import Image from "next/image";
export default function Team() {
 return (
  <div className="py-20 bg-gray-50">
   <div className="container px-6 mx-auto md:px-12 xl:px-32">
    <div className="mb-16 text-center">
     <h2 className="mb-4 text-2xl font-bold text-center text-gray-900 md:text-4xl">
      Meet Our Providers
     </h2>
     <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
      Meet our dedicated team of compassionate and experienced healthcare
      professionals at the forefront of pain management in Las Vegas. With a
      shared commitment to improving your quality of life, we're here to provide
      personalized care and support on your journey to a pain-free future.
     </p>
    </div>
    <div className="grid items-center gap-12 md:grid-cols-2">
     <div className="col-span-1 space-y-4 text-center">
      <Image
       className="object-cover w-64 h-64 mx-auto rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
       src="/images/victorkim.png"
       alt="team"
       width={288}
       height={281}
      />
      <div>
       <h3 className="text-2xl">Dr. Victor Kim</h3>
       <span className="block text-sm text-gray-500">Osteopathic Medicine</span>
      </div>
     </div>

     <div className="col-span-1 space-y-4 text-center">
      <Image
       className="object-cover w-64 h-64 mx-auto rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
       src="/images/kyrahbacote.png"
       alt="team"
       width={288}
       height={281}
      />
      <div>
       <h3 className="text-2xl">Dr. Kyrah Bacote</h3>
       <span className="block text-sm text-gray-500">Integrative Medicine</span>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

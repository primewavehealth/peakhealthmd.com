import Image from "next/image";

const Features5 = () => {
 return (
  <div className="relative w-full py-10 mx-auto text-white bg-blue-900">
   {/* :BACKGROUND IMAGE */}
   <Image
    className="absolute top-0 left-0 object-cover w-full h-full opacity-50"
    alt="neck-pain"
    src="/images/neck-pain-3d.jpg"
    fill
    sizes="100vw"
    quality={100}
   />

   {/* :MAIN CONTAINER */}
   <div className="relative flex flex-col items-center justify-center w-full lg:py-12 lg:px-12 lg:flex-row">
    {/* ::TITLE CONTAINER */}
    <div className="flex-shrink-0 px-4 mx-auto mb-10 text-center lg:text-left">
     {/* :::Title */}
     <h2 className="space-y-3 text-2xl tracking-wider text-white sm:text-4xl lg:text-5xl text-opacity-80 font-rubik">
      <span className="block">
       Why Choose <b className="text-white">Primewave</b>
      </span>
      <span className="block">
       for your <b className="text-white">Pain Care</b>
      </span>
     </h2>
     {/* :::Bottom line */}
     <span className="mt-5 mx-auto lg:mx-0 w-32 h-1.5 block rounded-3xl bg-white" />
    </div>

    {/* ::FEATURES CONTAINER */}
    <dl className="grid flex-grow-0 grid-cols-2 gap-4 px-4">
     {/* :::Feature 1 -> Expertise */}
     <div className=" col-span-2 md:col-span-1 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 sm:border-blue-300 lg:border-gray-100 bg-blue-900 bg-opacity-80 text-center">
      {/* Icon */}
      {/* <span className="inline-flex items-center justify-center bg-gray-100 rounded-full w-14 h-14 sm:bg-blue-300 lg:bg-gray-100">
       <LightBulbIcon className="w-10 h-10 text-blue-300 sm:text-white lg:text-blue-300" />
      </span> */}
      {/* Feature name */}
      <dt className="font-bold tracking-widest uppercase lg:text-lg font-rubik">
       Advanced Treatment Options
      </dt>
      {/* Description */}
      <dd className="p-4 text-left text-white lg:text-base text-opacity-80">
       At Primewave, we use shockwave therapy to treat different types of pain
       by delivering focused shockwaves to the affected areas. These shockwaves
       promote tissue regeneration, reduce inflammation, and alleviate pain.
      </dd>
     </div>

     {/* :::Feature 2 -> Leadership */}
     <div className="col-span-2 md:col-span-1 lgmx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 sm:border-gray-100 lg:border-blue-300 bg-blue-900  text-center">
      {/* Icon */}
      {/* <span className="inline-flex items-center justify-center bg-blue-300 rounded-full w-14 h-14 sm:bg-gray-100 lg:bg-blue-300">
       <CheckBadgeIcon className="w-10 h-10 text-white sm:text-blue-300 lg:text-white" />
      </span> */}
      {/* Feature name */}
      <dt className="font-bold tracking-widest uppercase lg:text-lg font-rubik">
       Expert Multidisciplinary Team
      </dt>
      {/* Description */}
      <dd className="p-4 text-left text-white lg:text-base text-opacity-80 ">
       Our clinic is staffed by a highly skilled and experienced
       multidisciplinary team of pain management doctors in las Vegas working
       collaboratively to provide holistic care and optimal outcomes for our
       patients.
      </dd>
     </div>

     {/* :::Feature 3 -> Careers */}
     <div className="col-span-2 md:col-span-1 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 md:border-blue-300 bg-blue-900 bg-opacity-80 text-center">
      {/* Icon */}
      {/* <span className="inline-flex items-center justify-center bg-gray-100 rounded-full w-14 h-14 md:bg-blue-300">
       <ArrowTrendingUpIcon className="w-10 h-10 text-blue-300 md:text-white" />
      </span> */}
      {/* Feature name */}
      <dt className="font-bold tracking-widest uppercase lg:text-lg font-rubik">
       Technology Driven
      </dt>
      {/* Description */}
      <dd className="p-4 text-left text-white lg:text-base text-opacity-80">
       We utilize the latest diagnostic technologies and techniques to
       accurately identify the underlying causes of pain, enabling us to develop
       targeted treatment plans and provide precise interventions for effective
       pain management.
      </dd>
     </div>

     {/* :::Feature 4 -> Partnership */}
     <div className="col-span-2 md:col-span-1 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-blue-900 bg-opacity-80 text-center">
      {/* Icon */}
      {/* <span className="inline-flex items-center justify-center bg-blue-300 rounded-full w-14 h-14 md:bg-gray-100">
       <UserGroupIcon className="w-10 h-10 text-white md:text-blue-300" />
      </span> */}
      {/* Feature name */}
      <dt className="font-bold tracking-widest uppercase lg:text-lg font-rubik">
       Patient-Centered Care
      </dt>
      {/* Description */}
      <dd className="p-4 text-left text-white lg:text-base text-opacity-80">
       At Prime Wave, we prioritize the needs and well-being of our patients
       above all else. We strive to create a warm and compassionate environment
       where individuals feel heard, respected, and actively involved in their
       healthcare journey.
      </dd>
     </div>
    </dl>
   </div>
  </div>
 );
};

export default Features5;

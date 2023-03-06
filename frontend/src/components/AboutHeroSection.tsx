import Image from "next/image";

function AboutHeroSection() {
 return (
  <section className="bg-white dark:bg-gray-900">
   <div className="container px-6 py-16 mx-auto text-center">
    <div className="max-w-2xl mx-auto">
     <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white lg:text-4xl">
      Our Story
     </h1>
     <p className="py-8 mt-6 text-2xl text-gray-500 dark:text-gray-300">
      Outstanding medical care from highly experienced professionals. We tackle
      even the toughest cases and make your life better.
     </p>
     <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
      Get In Touch
     </button>
    </div>

    <div className="flex justify-center mt-10">
     <Image
      className="object-cover w-full h-97 rounded-xl lg:w-4/5"
      src="https://img.freepik.com/free-photo/close-up-medical-team-ready-work_23-2149152535.jpg?w=996&t=st=1677630293~exp=1677630893~hmac=8833db50de09b0fef4b666fa1086114fba06e33c70ae66a98bd8fbebbbfea12f"
      alt="About"
      width={900}
      height={500}
     />
    </div>
   </div>
  </section>
 );
}

export default AboutHeroSection;

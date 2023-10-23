"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
 const router = useRouter();
 return (
  <section className="flex items-center min-h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
   <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
    <div className="max-w-md text-center">
     <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
      <span className="sr-only">Error</span>THANK YOU
     </h2>
     <p className="pb-8 text-2xl font-semibold md:text-3xl">
      Your message has been sent. Thank you for contacting us. We will get back
      to you shortly.
     </p>

     <button
      className="px-8 py-3 font-semibold rounded dark:bg-blue-600 dark:text-gray-900"
      onClick={() => router.push("/")}
     >
      Back to our homepage
     </button>
    </div>
   </div>
  </section>
 );
}

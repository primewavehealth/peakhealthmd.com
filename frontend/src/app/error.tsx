"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
 error,
 reset,
}: {
 error: Error;
 reset: () => void;
}) {
 useEffect(() => {
  // Log the error to an error reporting service
  console.error(error);
 }, [error]);

 return (
  //   <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
  //    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
  //     <div className="max-w-md text-center">
  //      <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
  //       <span className="sr-only">Error</span>404
  //      </h2>
  //      <p className="text-2xl font-semibold md:text-3xl">
  //       Sorry, we couldn't find this page.
  //      </p>
  //      <p className="mt-4 mb-8 dark:text-gray-400">
  //       But dont worry, you can find plenty of other things on our homepage.
  //      </p>
  //      <Link
  //       rel="noopener noreferrer"
  //       href="/"
  //       className="px-8 py-3 font-semibold rounded dark:bg-blue-600 dark:text-gray-900"
  //      >
  //       Back to homepage
  //      </Link>
  //     </div>
  //    </div>
  //   </section>
  <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
   <div className="text-center">
    <p className="text-base font-semibold text-indigo-600">OOPs</p>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
     Something Went Wrong
    </h1>
    <p className="mt-6 text-base leading-7 text-gray-600">
     Sorry, we couldn’t find the page you’re looking for.
    </p>
    <div className="flex items-center justify-center mt-10 gap-x-6">
     <Link
      href="/"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
     >
      Go back home
     </Link>
     <Link href="/contact" className="text-sm font-semibold text-gray-900">
      Contact support <span aria-hidden="true">&rarr;</span>
     </Link>
    </div>
   </div>
  </main>
 );
}

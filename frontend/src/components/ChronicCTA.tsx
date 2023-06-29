import { buttonVariants } from "@/components/UI/buttons";
import { cn } from "@/lib/utils";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function ChronicCTA() {
 return (
  <div className="my-12 bg-slate-100">
   <div className="z-20 w-full px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
     <span className="block">Speed up Your Healing</span>
     {/* <span className="block text-indigo-500">It&#x27;s today or never.</span> */}
    </h2>
    <p className="max-w-xl mx-auto mt-4 text-2xl text-gray-600">
     Shockwave Therapy accelerates the body's natural healing processes,
     promoting tissue regeneration and reducing inflammation. By stimulating
     blood flow and breaking up scar tissue, it helps you get back to an active,
     pain-free lifestyle faster.
    </p>
    <div className="pt-6 lg:mt-0 lg:flex-shrink-0">
     <div className="inline-flex mt-12 rounded-md shadow">
      <Link
       href="https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/start"
       className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "self-start -mt-20 rounded-none"
       )}
      >
       <span className="font-bold">Schedule An Appointment</span>
       <ArrowSmallRightIcon className="w-4 h-4 mr-2" />
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}

export default ChronicCTA;

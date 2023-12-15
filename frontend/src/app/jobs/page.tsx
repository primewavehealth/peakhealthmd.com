import Link from "next/link";

interface JobsProps {
 id: number;
 title: string;
 description: string;
 requirements: string;
 duties: string;
 salary: string;
}

function page() {
 const jobs: JobsProps[] = require("./jobs.json");
 console.log(jobs);
 return (
  <div className="container p-8 mx-auto bg-gray-50">
   <h1 className="my-8 text-3xl font-bold">Current Job Openings</h1>

   <div className="relative flex flex-col items-center justify-center p-6 overflow-hidden sm:py-12">
    {jobs.map((job) => (
     <Link
      key={job.id}
      href={`/jobs/${job.id}`}
      className="flex flex-col justify-between w-full max-w-4xl gap-3 px-5 py-4 my-6 bg-white rounded-md shadow-xl shadow-gray-100 sm:flex-row sm:items-center"
     >
      <div>
       <span className="text-sm text-blue-800">Medical</span>
       <h3 className="mt-px">{job.title}</h3>
       <div className="flex items-center gap-3 mt-2">
        <span className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full">
         Full-time
        </span>
        <span className="flex items-center gap-1 text-sm text-slate-600">
         {" "}
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
         >
          <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
         </svg>{" "}
         Las Vegas, Nevada
        </span>
       </div>
      </div>
      <div>
       <button className="flex items-center gap-1 px-4 py-2 font-medium text-white bg-blue-900 rounded-md">
        Apply Now{" "}
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-4 h-4"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="2"
        >
         <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
         />
        </svg>
       </button>
      </div>
     </Link>
    ))}
   </div>
  </div>
 );
}

export default page;

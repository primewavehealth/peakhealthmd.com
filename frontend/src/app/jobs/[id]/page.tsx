"use client";

import { useParams } from "next/navigation";

type JobProp = {
 id: string;
 title: string;
 description: string;
 requirements: string[];
 duties: string[];
 salary: string;
 url: string;
};

function Job() {
 const params = useParams();

 const jobs: JobProp[] = require("../jobs.json");

 const job = jobs.find((job) => job.id == params.id);

 return (
  <article className="container p-4 mx-auto my-12 prose lg:pl-16 max-w-none">
   {/* <!-- Job Details Card --> */}
   <div className="p-8 mt-8 bg-white rounded-lg">
    {/* <!-- Job Title --> */}
    <h1 className="mb-4 text-3xl font-bold">{job?.title}</h1>
    {/* 
            <!-- Job Description --> */}
    <div className="mb-4">
     <h2 className="mb-2 text-xl font-semibold">Job Description</h2>
     <p>{job?.description}</p>
    </div>

    {/*     <!-- Requirements --> */}
    {/* <div className="mb-4">
      <h2 className="mb-2 text-xl font-semibold">Requirements</h2>
      <ul className="list-disc list-inside">
       {job.requirements && job.requirements.map((req, i) => (
        <li key={i}>{req}</li>
       ))}
      </ul>
     </div> */}

    {/*  <!-- Job Duties --> */}
    <div className="mb-4">
     <h2 className="mb-2 text-xl font-semibold">Duties</h2>
     <ul className="list-disc list-inside">
      {job?.duties &&
       job.duties.map((duty, i) => (
        <li className="mb-4" key={i}>
         {duty}
        </li>
       ))}
     </ul>
    </div>

    {/* <!-- Salary --> */}
    <div>
     <h2 className="mb-2 text-xl font-semibold">Salary</h2>
     <p>Competitive salary based on experience and qualifications.</p>
    </div>
   </div>
  </article>
 );
}

export default Job;

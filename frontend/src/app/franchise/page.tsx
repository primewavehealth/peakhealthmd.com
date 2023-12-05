import AboutFranchise from "@/components/AboutFranchise";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Franchise",
 description:
  "Explore lucrative franchising with Primewave Health franchise – a proven opportunity to own a thriving business while promoting men's well-being.",
 alternates: {
  canonical: "/franchise",
 },
};

function page() {
 return (
  <div>
   <AboutFranchise />
   {/* next section */}
   <section id="more" className="flex items-center justify-center px-6 my-16">
    <div className="flex flex-col items-center justify-center mx-auto md:max-w-4xl">
     <h2 className="mb-4 text-3xl font-bold">
      Reasons to Join the Primewave Family?
     </h2>
     <p className="mb-4 text-lg text-gray-700">
      Visa Franchise Program & Pathway to U.S.A Citizenship
     </p>
     <p className="mb-4 text-lg leading-8 text-gray-700">
      Primewave is a medical health franchise that can help you explore the
      opportunities in the VISA Franchise and Citizenship programs that allow
      foreign nationals and ten family members to qualify for Visas such as E2,
      EB4, EB5 and E1. A Primewave Franchise is an avenue for Immigrants living
      in the U.S, a pathway to U.S Citizenship. It is also a great option for
      student immigrants on student visa’s such as H1B, L-1 looking to stay in
      the U.S, build their careers and ultimately become U.S Citizens. As a
      Primewave Franchisee you will have access to our resources and support
      that come with being a part of our franchise family.
     </p>
     <p className="mb-6 text-lg leading-8 text-gray-700">
      Our Franchise is turnkey and streamlined to ensure optimum revenue, that
      can support employing ten employees, which is a minimum requirement for
      most Visa Programs. All medical staff are trained to see patients in an
      efficient manner that produces income.
     </p>
     <Link
      className="inline-flex items-center justify-center gap-2 px-6 py-3 my-6 font-bold text-blue-900 bg-yellow-400 rounded-full hover:text-white hover:bg-blue-900"
      href="/contact"
     >
      <span>Apply Today</span>{" "}
      <svg
       width="15"
       height="15"
       viewBox="0 0 15 15"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
       ></path>
      </svg>
     </Link>
    </div>
   </section>
   <section className="flex items-center justify-center px-6 my-8">
    <div className="flex flex-col items-center justify-center mx-auto md:max-w-4xl">
     <h3 className="mb-6 text-xl font-semibold">
      Medical Health Experience Not Required
     </h3>

     <p className="mb-4 text-lg leading-8 text-gray-700">
      We supply highly qualified medical professionals that are knowledgeable in
      the business. We also take care of Billing, Insurance, Electronic Medical
      Records, Marketing, Front office and Back office. Our system allows you to
      become a successful franchise owner without prior experience in medical or
      healthcare. You do not need to be a licensed medical health clinician to
      own a Primewave franchise. We can provide the medical staff needed to
      fulfil the USCIS U.S immigration citizenship programs. Staff includes
      (Medical Director, Doctor(s), Nurse(s) & Medical Assistant(s), franchisees
      also receive ongoing and extensive training on running a medical clinic,
      regardless of experience.
     </p>
    </div>
   </section>
   <section className="flex px-6 my-8 text-left">
    <div className="flex flex-col items-center justify-center mx-auto md:max-w-4xl">
     <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>

     <p className="mb-4 text-xl leading-8 text-gray-700">
      Primewave was Founded in 2018
      <br /> Located in the Dignity Hospital / San Martin Medical Arts Pavilion
      <br /> 8285 W. Arby Ave. Suite 175 Las Vegas, Nevada 89113
      <br /> 1(702)625-4334 <br />
      www.primewavehealth.com
     </p>
    </div>
   </section>
  </div>
 );
}

export default page;

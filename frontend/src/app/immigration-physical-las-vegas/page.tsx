import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import immigrants from "/public/images/immigrants.jpg";

/* export const metadata: Metadata = {
 title: "Immigration Physical services in Las Vegas",
 description:
  "Get your immigration physical exam done quickly and efficiently with our certified medical professionals in Las Vegas.",
}; */
export const metadata: Metadata = {
 robots: {
  index: false,
  follow: false,
  nocache: false,
  googleBot: {
   index: false,
   follow: false,
  },
 },
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Affordable Immigration Physical in Las Vegas"
    body=" At Prime Wave, we offer comprehensive immigration health services to support the health and well-being of individuals and families who are making this transition. Our experienced team provides a range of services, including health screenings, vaccinations, and medical evaluations, to help ensure that our patients are healthy and prepared for life in their new home. We also provide resources and support to help our patients navigate the healthcare system and access the care they need. Our goal is to provide compassionate and effective healthcare services that promote the health and well-being of all individuals, regardless of their background or immigration status."
    src={immigrants}
    height={400}
    width={400}
    alt="Immigration Physical las vegas"
    btn={{
     href: "/appointment",
     text: "Schedule An Appointment",
     id: "schedule",

     icon: (
      <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     ),
    }}
   />
   <section>
    <div className="max-w-screen-xl px-8 py-8 pt-16 mx-auto lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 text-base lg:grid-cols-2 lg:gap-16 md:text-lg">
      <div className="lg:py-4 ">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h2 className="text-2xl font-bold sm:text-4xl">
         What is an Immigration Physical Exam?
        </h2>
       </div>
       <article className="space-y-4 text-justify text-gray-600 ">
        <p>
         An immigration physical exam is a medical examination that is required
         by the U.S. Citizenship and Immigration Services (USCIS) for anyone
         applying for permanent residency or a green card. The exam is designed
         to ensure that the applicant is not carrying any communicable diseases
         that could pose a threat to public health. The exam is also used to
         identify any medical conditions that could make the applicant
         inadmissible to the United States. It is important to get an
         immigration physical exam from a certified Civil Surgeon who has been
         designated by the USCIS to perform these exams.
        </p>
       </article>
      </div>

      <div className="py-4">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h2 className="text-2xl font-bold sm:text-4xl">
         What to Expect During the Exam?
        </h2>
       </div>
       <article className="space-y-4 text-justify text-gray-600">
        <p>
         During the immigration physical exam, the Civil Surgeon will conduct a
         thorough medical examination, which includes a review of your medical
         history and a physical examination. The exam will also include a
         tuberculosis (TB) test, blood test, and urine test to check for a
         variety of medical conditions. The Civil Surgeon will also review any
         required documentation and complete the necessary forms for the USCIS.
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>
   {/* next section */}
   <section className="">
    <div className="px-6 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
     <div className="max-w-3xl mx-auto text-base text-center md:text-lg">
      <h2 className="text-2xl font-bold sm:text-4xl">
       The Benefits of Getting an Immigration Physical Exam
      </h2>

      <p className="my-4 text-justify">
       Getting an immigration physical exam is not only a requirement for
       immigration to the United States, but it also has many benefits. The exam
       can help identify and treat medical conditions that may have gone
       undiagnosed, and it can also help prevent the spread of communicable
       diseases. In addition, having a complete and accurate medical record can
       be helpful if you need medical care while you are in the United States.
      </p>
     </div>
    </div>
   </section>

   {/* next section */}
   <CTA
    heading=" Comprehensive Immigration Physical in Las Vegas"
    body="At Prime Wave, we understand the importance of completing an immigration physical exam. Our experienced and compassionate team is committed to providing our patients with high-quality care and ensuring that the exam process is as stress-free as possible. If you are in need of an immigration physical exam, we encourage you to contact our office to schedule an appointment. We look forward to helping you navigate the immigration process and achieve your goal of living and working in the United States."
    src="/images/happy-man.avif"
    alt="erectile-dysfunction-las-vegas"
    btn={{
     href: "/appointment",
     text: "Schedule An Appointment",
     id: "cta",

     icon: (
      <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     ),
    }}
   />
  </div>
 );
}

export default page;

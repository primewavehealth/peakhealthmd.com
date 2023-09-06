import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import tmj from "/public/images/tmj.jpg";

export const metadata: Metadata = {
 title: "TMJ Treatment in Las Vegas",
 description:
  "Discover effective TMJ treatment options in Las Vegas. Find relief from jaw pain, headaches, and discomfort at our specialized pain clinic.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="TMJ Treatment in Las Vegas"
    body="Temporomandibular Joint Disorder, commonly known as TMJ, is a condition that affects millions of people worldwide. 
This disorder can cause severe pain and discomfort in the jaw joint and surrounding areas, making it difficult to eat, speak, and even sleep.
 If you're one of the many individuals in Las Vegas suffering from TMJ, you're not alone. Fortunately, 
there are effective treatment options available to help alleviate your pain and improve your quality of life."
    src={tmj}
    height={400}
    width={400}
    alt="tmj"
    btn={{
     href: "https://primewavehealth.setmore.com",
     text: "Schedule An Appointment",

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
   <div className="max-w-screen-xl px-8 py-16 mx-auto text-lg">
    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
      Understanding Temporomandibular Joint Disorder (TMJ)
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       The temporomandibular joint is the hinge that connects your jaw to your
       skull, allowing you to perform everyday activities like chewing,
       speaking, and yawning. When this joint becomes misaligned or damaged, it
       can lead to a variety of symptoms, including:
      </p>
      <p>
       <ol>
        <li>Jaw pain</li>
        <li>Headaches</li>
        <li>Earaches</li>
        <li>Clicking or popping sounds in the jaw</li>
        <li>Difficulty opening or closing your mouth</li>
        <li>Facial pain or tenderness</li>
        <li>Lockjaw</li>
       </ol>
      </p>

      <p>
       If you're experiencing any of these symptoms, seeking treatment is
       essential to find relief and regain control of your life.
      </p>
     </article>
    </section>

    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
      Shockwave Therapy for TMJ in Las Vegas
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       Shockwave therapy, a non-invasive and innovative approach, has emerged as
       a promising treatment for TMJ (Temporomandibular Joint) disorders. This
       therapy utilizes high-energy shockwaves to stimulate healing and reduce
       pain in the jaw joint. By promoting tissue repair and improving blood
       flow, shockwave therapy can offer relief from the debilitating symptoms
       of TMJ, including jaw pain, muscle tension, and limited jaw mobility.
       Unlike surgery or medication, it carries minimal risks and allows
       patients to resume their daily activities quickly. If you're seeking an
       effective, pain-free solution for TMJ, shockwave therapy may be a
       game-changer in restoring your quality of life.
      </p>
     </article>
    </section>

    {/*  next section  */}
   </div>

   {/* next section */}
   <CTA
    heading="Experience TMJ Relief"
    body="
We pride ourselves on offering the most advanced TMJ treatment in Las Vegas. Our combination of shockwave therapy and medication stands out. Our experienced staff, well-versed in the complexities of TMJ disorders, ensures that you receive the highest level of care. With a deep understanding of shockwave therapy's effectiveness and a tailored medication regimen, our experts work together to alleviate your TMJ symptoms. Count on our expertise to bring you lasting relief, helping you regain pain-free jaw function and improved quality of life. Trust us for comprehensive, effective TMJ treatment that truly makes a difference."
    src="/images/happy-man.avif"
    alt="Chronic Pain Treatment in Las Vegas"
    btn={{
     href: "https://primewavehealth.setmore.com",
     text: "Schedule An Appointment",

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

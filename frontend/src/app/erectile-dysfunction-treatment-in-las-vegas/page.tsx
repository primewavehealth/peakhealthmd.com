import EdPricing from "@/components/EdPricing";
import Button from "@/components/UI/Button";
import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import ed from "/public/images/erectile-dysfunction-las-vegas.jpg";

export const metadata: Metadata = {
 title: "Affordable Erectile Dysfunction Treatment in Las Vegas",
 description:
  "Regain your sexual health and confidence with our advanced Erectile Dsyfunction treatment in Las Vegas.",
};

function page() {
 return (
  <>
   <PageBanner
    heading="Erectile Dysfunction Treatment in Las Vegas"
    body="Erectile dysfunction (ED) is a common problem that affects many men. It is the inability to get or maintain an erection firm enough for sexual intercourse. ED can be a source of frustration and embarrassment for those who experience it. It is important to understand the causes, symptoms, and treatment options available for this condition."
    src={ed}
    height={400}
    width={400}
    alt="erectile-dysfunction"
    btn={{
     href: "/telehealth",
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
   />{" "}
   {/* cta */}
   <div className="container px-6 m-auto lg:py-6 ">
    <div className="flex flex-col items-center h-auto py-6 mt-6 border-2 border-gray-800 rounded-lg bg-blue-50 lg:border-4 justify-evenly md:flex-row w-100 md:h-60">
     <div className="px-4 pt-4 text-xl lg:text-2xl lg:pt-0 lg:w-8/12">
      <span>
       You're not alone in this. Roughly 1 out of 4 men over 65 - and a
       significant number over 40 - suffer from erectile dysfunction.
      </span>
     </div>
     <Button
      href="/telehealth"
      text="Request Consultation"
      icon=<svg
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
     />
    </div>
   </div>
   {/* next section */}
   <section className="px-6 bg-white">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-24 lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-16">
      <div className="lg:py-2">
       <article className="space-y-4 prose text-gray-600">
        <h2>What are the Causes of Erectile Dysfunction?</h2>

        <p className="text-justify ">
         ED can be caused by physical or psychological factors. Physical causes
         may include high blood pressure, diabetes, heart disease, obesity, and
         certain medications. Psychological causes may include stress, anxiety,
         depression, and relationship problems.
        </p>
       </article>
      </div>

      <div className="lg:py-2">
       <article className="space-y-4 prose text-gray-600">
        <h2>What are the Symptoms of Erectile Dysfunction?</h2>

        <p className="text-justify ">
         The main symptoms of ED are difficulty getting an erection, difficulty
         maintaining an erection, and decreased sexual desire. If you experience
         any of these symptoms, it is important to seek medical help..
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>
   <EdPricing />
   <blockquote className="max-w-screen-xl px-8 py-8 mx-auto">
    <span className="py-10">
     {" "}
     <span className="text-lg font-bold">We are the destination for</span>{" "}
     <span className="relative inline-block px-2">
      <div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
      <h3 className="relative py-3 text-white">
       Men’s Health in Las Vegas, Nevada
      </h3>
     </span>
    </span>
   </blockquote>
   <CTA
    heading=" Get Permanent Cure for Erectile Dysfunction in Las Vegas"
    body="The Vegas Clinic is a leading trt clinic in Las Vegas. We offer effective and discreet treatment options for erectile dysfunction. Our experienced and compassionate board certified doctors understands the sensitive nature of this condition and provides personalized care to help patients regain their confidence and sexual satisfaction. Our state-of-the-art facility offers cutting-edge treatments such as shockwave therapy and custom-compounded medications to address the root cause of ED. Don't suffer in silence any longer - contact us today to schedule a consultation and take the first step towards reclaiming your sexual health."
    src="/images/happy-man.avif"
    alt="erectile-dysfunction-las-vegas"
    btn={{
     href: "/telehealth",
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
  </>
 );
}

export default page;

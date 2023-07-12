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
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services",
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
      href="https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services"
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
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 lg:gap-16">
      <div className="lg:py-2">
       <article className="space-y-4 prose text-gray-600">
        <h2>What are the Causes of Erectile Dysfunction?</h2>

        <p className="text-justify ">
         here are several possible causes of ED, both physical and
         psychological. Physical causes of ED include conditions that affect
         blood flow to the penis, such as diabetes, high blood pressure, or
         heart disease. Neurological disorders like multiple sclerosis or
         Parkinson's disease can also contribute to ED. Lifestyle factors like
         smoking, excessive alcohol consumption, or drug use can damage blood
         vessels and nerves, leading to ED. Hormonal imbalances, including low
         levels of testosterone, can also cause ED. In addition to physical
         factors, psychological factors can also play a role in ED, such as
         stress, anxiety, depression, or relationship problems. Identifying the
         underlying cause of ED is crucial to developing an effective treatment
         plan.
        </p>
       </article>
      </div>

      <div className="lg:py-2">
       <article className="space-y-4 prose text-gray-600">
        <h2>What are the Symptoms of Erectile Dysfunction?</h2>

        <p className="text-justify ">
         Erectile dysfunction, also known as impotence, is a condition where a
         man is unable to achieve or maintain an erection sufficient for sexual
         intercourse. The symptoms of erectile dysfunction may vary depending on
         the underlying cause of the condition, but common signs include
         difficulty achieving an erection, difficulty maintaining an erection,
         and reduced sexual desire. Other symptoms may include premature
         ejaculation, delayed ejaculation, or a lack of orgasm
        </p>
       </article>
      </div>
     </div>
    </div>
   </section>
   <EdPricing />
   {/* next section */}
   <section className="px-6 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 ">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
     <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      Consultation
     </h2>
     <article className="space-y-4 text-base text-justify text-gray-700 md:text-lg">
      <p>
       We are the choice ED Clinic in Las Vegas. We understand that erectile
       dysfunction can be a sensitive and difficult issue to discuss. That's why
       we offer personalized and discreet consultations to help patients
       understand their condition and develop an effective treatment plan.
       During your consultation, our experienced staff will conduct a
       comprehensive medical history and physical exam, as well as discuss your
       symptoms and concerns in a private and confidential setting. We will work
       closely with you to develop a personalized treatment plan that addresses
       your unique needs and goals, taking into account your medical history,
       lifestyle, and other factors. Our goal is to provide you with the highest
       level of care and support, so you can effectively manage your symptoms
       and achieve a satisfying sex life.
      </p>
     </article>
    </div>
   </section>
   <blockquote className="max-w-screen-xl px-8 pb-12 mx-auto">
    <span className="py-10">
     {" "}
     <span className="text-lg font-bold">We are the destination</span>{" "}
     <span className="relative inline-block px-2">
      <div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
      <h3 className="relative py-3 text-white">
       ED Clinic in Las Vegas, Nevada
      </h3>
     </span>
    </span>
   </blockquote>
   <CTA
    heading="  ED Experts in Las Vegas"
    subheading=" Get Permanent Cure for Erectile Dysfunction in Las Vegas"
    body="Our state-of-the-art facility offers cutting-edge treatments such as shockwave therapy and custom-compounded medications to address the root cause of ED. With our expert care and support, you can regain your sexual confidence and enjoy a fulfilling sex life. Don't suffer in silence any longer - contact us today to schedule an appointment and take the first step towards reclaiming your sexual health."
    src="/images/happy-man.avif"
    alt="erectile-dysfunction-las-vegas"
    btn={{
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services",
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

import Consultation from "@/components/AppointmentForm";
import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
// @ts-ignore
import type { Metadata } from "next";
import low from "public/images/low-testosterone-lasvegas.jpg";

export const metadata: Metadata = {
 title: "Low Testosterone Treatment in Las Vegas",
 description:
  "Affordable low testosterone treatment in Las Vegas: Rejuvenate your vitality. Expert care for lasting results at budget-friendly prices.",
 alternates: {
  canonical: "/low-testosterone-treatment-las-vegas",
 },
};

function page() {
 return (
  <>
   <PageBanner
    heading="Low Testosterone Treatment in Las Vegas"
    body="Revitalize your life with affordable low testosterone treatment in Las Vegas. Don't let low energy, mood swings, and decreased vitality hold you back any longer. Our expert team of ED specialists is committed to helping you regain your vigor and zest for life. Experience a transformation in your overall well-being without breaking the bank – because you deserve nothing but the best at prices you can afford."
    src={low}
    height={400}
    width={400}
    alt="Low Testosterone Treatment in Las Vegas"
    btn={{
     href: "#form",
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
    <div className="max-w-screen-2xl px-8 pb-4 mx-auto lg:px-8">
     <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 md:gap-28">
      <div className="lg:py-4">
       <div className="max-w-3xl pb-4 mx-auto text-center">
        <h2 className="text-3xl font-bold">What is Low Testosterone?</h2>
       </div>
       <article className="space-y-4 text-justify text-xl text-gray-600">
        <p>
         Low testosterone, or low T, is a medical condition in which the body
         does not produce enough testosterone, a hormone that is important for
         male development and physical characteristics. Testosterone plays a key
         role in maintaining muscle mass, bone density, sex drive, and energy
         levels in men. Low testosterone levels can result in a range of
         symptoms, including fatigue, decreased sex drive, erectile dysfunction,
         depression, and decreased muscle mass. It is more common in older men,
         but can also affect younger men due to certain medical conditions or
         lifestyle factors.
        </p>
        <p>
         Low testosterone can also have effects on the body, including increased
         risk of osteoporosis, cardiovascular disease, and type 2 diabetes. It's
         important to note that these symptoms can also be caused by other
         medical conditions or lifestyle factors, so it's important to consult
         with a qualified healthcare provider for an accurate diagnosis.
        </p>
       </article>
      </div>

      <div className="py-4">
       <div className="max-w-3xl pb-4 mx-auto text-justify">
        <h2 className="text-3xl font-bold text-center tracking-tight">
         Symptoms of Low Testosterone
        </h2>
       </div>
       <article className="space-y-4 text-justify text-xl text-gray-600">
        <p>
         The symptoms of low testosterone in men, also known as low T, can
         include:
        </p>
        <ul className="list-none md:list-disc">
         <li>- Reduced sex drive and erectile dysfunction.</li>
         <li>- Fatigue or lack of energy.</li>
         <li>- Decreased muscle mass and strength.</li>
         <li>- Increased body fat.</li>
         <li>- Decreased bone density.</li>
         <li>- Infertility or decreased sperm count.</li>
         <li>- Reduced body hair.</li>
         <li>- Hot flashes.</li>
         <li>- Depression</li>
         <li>- Mood changes, irritability and difficulty concentrating.</li>
        </ul>
       </article>
      </div>
     </div>
    </div>
   </section>

   {/* next section */}
   <section className="bg-gray-50">
    <blockquote className="max-w-screen-xl px-8 py-12 mx-auto text-center">
     <span className="py-10">
      {" "}
      <span className="text-4xl font-bold">We are the go to</span>{" "}
      <span className="relative inline-block px-2">
       <div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
       <h3 className="relative py-3 text-white">
        Mens Health Clinic in Las Vegas{" "}
       </h3>
      </span>
     </span>
    </blockquote>
    <div className="container flex flex-wrap">
     <div className="w-full px-8 text-lg lg:px-4 lg:pt-16 grid md:grid-cols-2 gap-8 md:gap-28">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
       <h2 className="mb-6 font-sans text-3xl font-bold text-center     leading-none tracking-tight text-gray-900 md:mx-auto">
        Benefits of Testosterone Replacement Therapy
       </h2>
       <article className="space-y-4 text-base text-justify text-gray-700 md:text-lg">
        <p>
         Testosterone replacement therapy (TRT) is a medical treatment that
         involves supplementing the body with testosterone to increase low
         levels of this hormone. Testosterone is a hormone that is important for
         male development and physical characteristics, such as maintaining
         muscle mass, bone density, sex drive, and energy levels.The type of TRT
         and dosage will depend on the individual's specific needs and medical
         history.
        </p>
        <p>
         TRT can have a range of benefits, including increased sex drive,
         improved erectile function, increased muscle mass and strength,
         improved bone density, increased energy levels, and improved mood.
        </p>
       </article>
      </div>
      <div>
       <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 text-center">
        Hear from our Customers
       </h2>
       {/* video */}
       <div className="mx-auto my-6 md:w-[600px] h-[300px]">
        <iframe
         width="100%"
         height="100%"
         src="https://www.youtube.com/embed/II7AG16M6fQ?si=qYGjMKaitrTH0VIp"
         title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen={true}
        ></iframe>
       </div>
      </div>
     </div>
     <div className="w-full items-center justify-center py-8 mx-auto max-w-[86%]  md:max-h-[650px] bg-gray-50">
      <Consultation />
     </div>
    </div>
   </section>

   <CTA
    heading="Low Testosterone Treatment in Las Vegas"
    body="If you're experiencing symptoms of low testosterone, Prime Wave can help. We are a leading trt clinic in Las Vegas. Our experienced board certified doctors provide comprehensive testing and customized treatment plans to help you feel your best. We understand the impact that low testosterone can have on your quality of life, including decreased energy, decreased muscle mass, and decreased libido. That's why we offer a range of treatment options, including testosterone replacement therapy, to help you regain your vitality and confidence. Don't let low testosterone hold you back - contact us today to schedule a consultation and start feeling like yourself again."
    src="/images/happy-man.avif"
    alt="low-testosterone-treatment-las-vegas"
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
  </>
 );
}

export default page;

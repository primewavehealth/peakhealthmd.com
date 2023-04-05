import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import led from "/public/led-light-therapy.jpg";

export const metadata: Metadata = {
 title: "LED Light Therapy in Las Vegas",
 description:
  "Transform your skin with our LED Light Therapy - a non-invasive, painless treatment for acne, wrinkles, and other skin imperfections in Las Vegas.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="LED Light Therapy"
    body="

 LED light therapy is a non-invasive and highly effective treatment that uses low-level light energy to stimulate cellular activity and promote healing. Our LED light therapy services can be used to treat a range of conditions, including acne, fine lines and wrinkles, sun damage, and more. This innovative therapy is safe and painless, and can provide dramatic results in a short amount of time. Our experienced team will work with you to create a customized treatment plan that meets your unique needs and goals. Whether you're looking to improve your skin's appearance or treat a specific condition, our LED light therapy services can help you achieve the results you desire.
 "
    src={led}
    height={400}
    width={400}
    alt="led light therapy"
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
  </div>
 );
}

export default page;

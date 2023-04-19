import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import weight from "public/images/weight-loss-las-vegas.jpg";

export const metadata: Metadata = {
 title: "Weight Loss Treatment in Las Vegas",
 description:
  "Achieve your weight loss goals with our proven and personalized weight loss service in Las Vegas - transform your body and improve your health today.",
};

function Weightloss() {
 return (
  <div>
   <PageBanner
    heading="Weight Loss Treatment"
    body="Weight loss can have numerous benefits for both physical and mental health. By shedding excess pounds, individuals can reduce their risk of chronic diseases such as diabetes, heart disease, and certain cancers. Losing weight can also improve joint health, mobility, and overall energy levels. In addition, weight loss can enhance self-confidence and improve mood, leading to a more positive outlook on life."
    src={weight}
    height={400}
    width={400}
    alt="weight loss las vegas"
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

export default Weightloss;

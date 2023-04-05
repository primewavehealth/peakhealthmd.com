import PageBanner from "@/components/UI/PageBanner";
import weight from "public/weight-loss-las-vegas.jpg";

function Weightloss() {
 return (
  <div>
   <PageBanner
    heading="Weight Loss Treatment"
    body="Weight loss can have numerous benefits for both physical and mental health. By shedding excess pounds, individuals can reduce their risk of chronic diseases such as diabetes, heart disease, and certain cancers. Losing weight can also improve joint health, mobility, and overall energy levels. In addition, weight loss can enhance self-confidence and improve mood, leading to a more positive outlook on life."
    src={weight}
    height={400}
    width={400}
    alt="shockwave-therapy"
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

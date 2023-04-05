import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import sleep from "/public/sleep-therapy-las-vegas.jpg";

export const metadata: Metadata = {
 title: "Sleep Therapy in Las Vegas",
 description:
  "Experience better sleep and improved quality of life with sleep therapy in Las Vegas - our personalized treatment plans can help you overcome sleep disorders and achieve restful, rejuvenating sleep.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Sleep Therapy"
    body="Sleep therapy, also known as sleep counseling or behavioral sleep medicine, is a form of therapy that aims to improve sleep quality and address sleep disorders such as insomnia. It involves identifying and addressing the underlying causes of sleep problems and implementing behavioral changes that promote healthy sleep habits. The benefits of sleep therapy can be significant and include improved overall health, reduced symptoms of depression and anxiety, increased daytime alertness and productivity, improved memory and cognitive function, and a decreased risk of developing chronic conditions such as obesity and diabetes. "
    src={sleep}
    height={400}
    width={400}
    alt="sleep-therapy"
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

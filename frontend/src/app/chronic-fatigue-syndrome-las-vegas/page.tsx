import PageBanner from "@/components/UI/PageBanner";
import fibromyalgia from "/public/images/fibromyalgia-las-vegas.jpg";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Chronic Fatigue Syndrome Treatment n Las Vegas",
 description:
  "Get relief from chronic fatigue syndrome with our specialized fatigue treatment in Las Vegas.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Chronic Fatigue Syndrome"
    body="Chronic fatigue syndrome (CFS) is a debilitating condition that can significantly impact a person's quality of life. Treatment for CFS is crucial in managing symptoms and improving overall health. There are a variety of treatment options available, including medication, lifestyle changes, and therapy. These treatments can provide numerous benefits, such as reducing fatigue, improving sleep quality, increasing energy levels, and enhancing overall well-being. Additionally, early intervention and proper management of symptoms can prevent the condition from worsening and reduce the risk of developing other health problems. "
    src={fibromyalgia}
    height={400}
    width={400}
    alt="Chronic-Fatigue-Syndrome"
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

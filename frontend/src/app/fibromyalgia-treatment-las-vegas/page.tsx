import PageBanner from "@/components/UI/PageBanner";
import fibromyalgia from "/public/fibromyalgia-las-vegas.jpg";

import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Affordable Fibromyalgia Treatment in Las Vegas",
 description:
  "Find relief from the symptoms of fibromyalgia with our specialized fibromyalgia treatment in Las Vegas.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Fibromyalgia Treatment"
    body="Fibromyalgia is a chronic condition that causes widespread pain and fatigue, and can significantly impact a person's quality of life. Treatment for fibromyalgia is crucial in managing symptoms and improving overall health. There are a variety of treatment options available, including medication, exercise, therapy, and lifestyle changes. These treatments can provide numerous benefits, such as reducing pain and fatigue, improving sleep quality, increasing mobility, and enhancing overall well-being."
    src={fibromyalgia}
    height={400}
    width={400}
    alt="Fibromyalgia"
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

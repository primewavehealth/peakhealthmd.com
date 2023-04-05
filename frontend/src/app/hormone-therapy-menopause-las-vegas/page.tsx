import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import menopause from "/public/menopause-las-vegas.jpg";

export const metadata: Metadata = {
 title: "Hormone Therapy for Menopause in Las Vegas",
 description:
  "Find relief from menopausal symptoms and restore hormonal balance with our Hormone Therapy services in Las Vegas.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Hormone Therapy for Menopause"
    body="Hormone therapy for menopause can alleviate a variety of symptoms such as hot flashes, night sweats, and vaginal dryness. By replacing the hormones that decline during menopause, such as estrogen and progesterone, women may also experience improved mood, reduced anxiety, and better sleep quality. Hormone therapy can also help prevent bone loss and reduce the risk of fractures. However, it is important to note that hormone therapy may carry certain risks, including an increased risk of breast cancer, blood clots, and stroke. "
    src={menopause}
    height={400}
    width={400}
    alt="Hormone Therapy for Menopause"
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

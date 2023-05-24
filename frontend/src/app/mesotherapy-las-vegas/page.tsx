import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import mesotherapy from "/public/images/mesotherapy-las-vegas.jpg";

export const metadata: Metadata = {
 title: "Mesotherapy in Las Vegas",
 description:
  "Achieve youthful and radiant skin with our Mesotherapy treatment - a safe and effective cosmetic procedure in Las Vegas.",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Mesotherapy "
    body="Mesotherapy is a medical treatment that involves injecting small amounts of medication, vitamins, and other nutrients into the skin. It is used to treat a variety of conditions such as hair loss, cellulite, and skin aging. The benefits of mesotherapy can include improved skin texture and elasticity, reduced appearance of wrinkles and fine lines, and increased hair growth. Mesotherapy can also help reduce the appearance of cellulite and promote weight loss by targeting localized fat deposits. In addition, mesotherapy is a non-surgical, minimally invasive treatment that typically involves minimal downtime, making it a popular option for those seeking a less invasive alternative to traditional cosmetic procedures. "
    src={mesotherapy}
    height={400}
    width={400}
    alt="mesotherapy"
    btn={{
     href: "https://cal.com/thevegasclinic/appointment",
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

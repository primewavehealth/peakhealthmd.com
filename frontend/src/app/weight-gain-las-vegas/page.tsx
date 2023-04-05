import PageBanner from "@/components/UI/PageBanner";
import weight from "/public/weight-gain-las-vegas.jpg";

function page() {
 return (
  <div>
   <PageBanner
    heading="Weight Gain Program"
    body="Weight gain can be crucial for slim individuals as it helps improve their overall health and well-being. Gaining weight can help increase muscle mass, which in turn can boost metabolism and enhance energy levels. Adequate weight gain can also provide the body with essential nutrients, which are required for optimal physical and mental functioning. Furthermore, weight gain can improve immune function, reduce the risk of chronic diseases such as osteoporosis, and improve fertility in both men and women. "
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

export default page;

import PageBanner from "@/components/UI/PageBanner";
import stem from "/public/stem-cell-therapy-las-vegas.jpg";

function page() {
 return (
  <div>
   {" "}
   <PageBanner
    heading="Stem Cell Therapy"
    body=" Stem cell therapy is a cutting-edge medical treatment that utilizes the body's own regenerative abilities to repair damaged tissue and promote healing. This therapy involves the use of stem cells, which are undifferentiated cells that have the potential to develop into various types of cells in the body. Stem cell therapy has shown promising results in treating a wide range of conditions, including arthritis, sports injuries, and even neurological disorders. By harnessing the power of these remarkable cells, patients can experience faster recovery times and reduced pain without the need for invasive surgery or medication."
    src={stem}
    height={400}
    width={400}
    alt="detox-therapy"
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

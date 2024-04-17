import Link from "next/link";
import "./styles/header.css"


const mobileData = [
 {
  name: "Foot Pain",
  href: "/podiatrist-foot-doctor-las-vegas",
  text:
   "Foot pain affects millions. Understand its complexities and discover effective treatments to regain control and live a pain-free life.",
 },
 {
  name: "Back Pain",
  href: "/back-pain-las-vegas",
  text:
   "Back pain can hinder your daily life. Learn about its causes and find effective treatments for lasting relief and improved mobility.",
 },
 {
  name: "Joint Pain",
  href: "/joint-pain-las-vegas",
  text:
   "Joint pain can disrupt your life. Explore the causes and effective treatments to regain mobility and live pain-free today.",
 },
 {
  name: "Neck Pain",
  href: "/neck-pain-las-vegas",
  text:
   "Neck pain can be debilitating, but there is hope. Learn about the causes and find effective treatments for lasting relief.",
 },

 {
  name: "Knee Pain",
  href: "/knee-pain-las-vegas",
  text:
   "Understand the underlying causes of knee pain and explore our proven treatments for a pain-free and active life. Discover relief now!.",
 },

 {
  name: "Ed Treatment",
  href: "/erectile-dysfunction-treatment-las-vegas",
  text:
   "Erectile dysfunction is common but treatable. Explore our solutions for renewed confidence and a fulfilling sex life.",
 },
];

export default function Services() {
 return (
  <>
   <div
    id="treatments"
    className="rounded bg-gradient-to-tr from-indigo-100 via-purple-50 to-blue-100"
   >
    <h3 className="max-w-xl px-8 py-8 mx-auto text-center header-color">
     Pain Conditions{" "} 
     <span className="header-gradient-color"> 
      We Treat
     </span>
    </h3>
    
    <div className="container px-4 pb-6 mx-auto xl:max-w-7xl md:px-8 md:py-6">
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:pb-10">
      {mobileData.map(({ name, href, text }) => (
       <div className="p-5 transition bg-white border border-white rounded-lg shadow-sm md:p-7 xl:p-10 hover:border-blue-600">
        <Link href={href} className="inline-block">
         <h4 className="mb-2 text-lg font-bold">{name}</h4>
         <p className="leading-relaxed text-gray-600">
          {text}
         </p>
        </Link>
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 );
}

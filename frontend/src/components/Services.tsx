import Link from "next/link";

const mobileData = [
 {
  name: "Chronic Pain",
  href: "/chronic-pain-las-vegas",
  text:
   "Persistent, debilitating discomfort that endures beyond the expected healing time, chronic pain affects daily life, hindering activities and causing distress.",
 },
 {
  name: "Back Pain",
  href: "/back-pain-las-vegas",
  text:
   "Discomfort in the back region, ranging from mild to severe, caused by various factors like muscle strain, injury, or spinal issues.",
 },
 {
  name: "Joint Pain",
  href: "/joint-pain-las-vegas",
  text:
   "Discomfort or soreness in the joints, commonly caused by arthritis, injury, or inflammation, leading to limited mobility and hindrance in daily activities.",
 },
 {
  name: "Neck Pain",
  href: "/neck-pain-las-vegas",
  text:
   "Discomfort or pain experienced in the area of the neck, which connects the head to the torso. It can range from mild to severe and may be acute or chronic.",
 },

 {
  name: "Knee Pain",
  href: "/knee-pain-las-vegas",
  text:
   "Knee pain is a common complaint that can occur due to various reasons, including injury, overuse, underlying medical conditions, or the natural aging process.",
 },

 {
  name: "Fibromylagia",
  href: "/fibromyalgia-treatment-las-vegas",
  text:
   "Fibromyalgia is a chronic disorder causing widespread pain, fatigue, and cognitive difficulties with heightened sensitivity to stimuli.",
 },
];

export default function Services() {
 return (
  <>
   <div
    id="treatments"
    className="bg-gradient-to-tr from-indigo-100 via-purple-50 to-blue-100 dark:text-gray-100 dark:from-indigo-900 dark:via-purple-900 dark:to-teal-900"
   >
    <h3 className="max-w-xl px-8 pt-16 mx-auto text-blue-900">
     Pain Conditions We Treat
    </h3>
    <div className="container px-4 py-16 mx-auto xl:max-w-7xl lg:px-8 lg:py-16">
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {mobileData.map(({ name, href, text }) => (
       <div className="p-5 transition bg-white border border-white rounded-lg shadow-sm md:p-7 xl:p-10 hover:border-blue-600 dark:bg-gray-800 dark:border-gray-800 dark:hover:border-blue-400 dark:shadow-none">
        <Link href={href} className="inline-block">
         <h4 className="mb-2 text-lg font-bold">{name}</h4>
         <p className="leading-relaxed text-gray-600 dark:text-gray-400">
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

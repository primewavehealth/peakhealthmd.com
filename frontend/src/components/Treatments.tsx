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

function Treatments() {
 return (
  <div
   id="treatments"
   className="relative py-20 text-blue-900 bg-white section"
  >
   <div className="container px-4 mx-auto xl:max-w-6xl">
    <header className="mx-auto mb-12 text-center lg:px-20">
     <h2 className="mb-2 text-4xl font-bold leading-normal ">
      Pain Conditions We Treat
     </h2>
    </header>

    <div className="flex flex-row flex-wrap -mx-4 text-center">
     {mobileData.map(({ name, href, text }) => (
      <div className="flex-shrink w-full max-w-full px-4 transition ease-in-out sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp duration-0 hover:duration-700">
       <Link href={href} className="inline-block">
        <div className="px-12 py-8 mb-12 transition duration-300 ease-in-out transform border-b border-gray-100 bg-gray-50 hover:-translate-y-2">
         <h3 className="mb-2 text-xl font-semibold leading-normal ">{name}</h3>
         <p className="text-left text-gray-500 ">{text}</p>
        </div>
       </Link>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default Treatments;

import {
 ArrowPathIcon,
 CloudArrowUpIcon,
 FingerPrintIcon,
 LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
 {
  name: "Peptide Therapy",
  description:
   "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  icon: CloudArrowUpIcon,
 },
 {
  name: "Immune Sytem",
  description:
   "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  icon: LockClosedIcon,
 },
 {
  name: "Bio-Identical Hormone Therapy for Menopause",
  description:
   "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  icon: ArrowPathIcon,
 },
 {
  name: "Chronic Fatigue Syndrome",
  description:
   "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  icon: FingerPrintIcon,
 },
 {
  name: "Low Testosterone Treatment",
  description:
   "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  icon: ArrowPathIcon,
 },
 {
  name: "Long COVID-19",
  description:
   "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  icon: FingerPrintIcon,
 },
 {
  name: "Fibromyalgia",
  description:
   "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  icon: CloudArrowUpIcon,
 },
 {
  name: "Stem Cells Therapy",
  description:
   "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  icon: LockClosedIcon,
 },
 {
  name: "Weight Loss",
  description:
   "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  icon: ArrowPathIcon,
 },
 {
  name: "Weight Gain",
  description:
   "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  icon: FingerPrintIcon,
 },
 {
  name: "Pain Management",
  description:
   "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  icon: ArrowPathIcon,
 },
 {
  name: "Sleep Studies",
  description:
   "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  icon: FingerPrintIcon,
 },
 {
  name: "Carboxy Therapy",
  description:
   "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  icon: FingerPrintIcon,
 },
 {
  name: "MesoTherapy",
  description:
   "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  icon: ArrowPathIcon,
 },
 {
  name: "Platelet- Rich Plasma Therapy",
  description:
   "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  icon: FingerPrintIcon,
 },
 {
  name: "Immigration Physical",
  description:
   "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  icon: FingerPrintIcon,
 },
 {
  name: "Detox Diet",
  description:
   "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  icon: ArrowPathIcon,
 },
 {
  name: "Brain Mapping",
  description:
   "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  icon: FingerPrintIcon,
 },
];

function ServicesSection() {
 return (
  <div className="py-24 bg-white sm:py-32">
   <div className="px-6 mx-auto max-w-8xl lg:px-4">
    <div className="max-w-2xl mx-auto lg:text-center">
     <h2 className="text-base font-semibold leading-7 text-indigo-600">
      Our Specialties
     </h2>
     <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Our Focus is your health care
     </p>
     <p className="mt-6 text-lg leading-8 text-gray-600">
      From simple concerns to complex issues, our team of highly experienced
      health professionals, are ready to attend to you. we will listen to you,
      and avail you the best care to help you get better.
     </p>
    </div>
    <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-5xl">
     <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
      {features.map((feature) => (
       <div
        key={feature.name}
        className="relative p-5 pl-16 hover:bg-gray-100 hover:scale-110"
       >
        <dt className="text-base font-semibold leading-7 text-gray-900">
         <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
          <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
         </div>
         {feature.name}
        </dt>
        <dd className="mt-2 text-base leading-7 text-gray-600">
         {feature.description}
        </dd>
       </div>
      ))}
     </dl>
    </div>
   </div>
  </div>
 );
}

export default ServicesSection;

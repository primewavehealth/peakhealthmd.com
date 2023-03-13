import {
 ArrowPathIcon,
 CloudArrowUpIcon,
 FingerPrintIcon,
 LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
 {
  name: "Peptide Therapy",
  description:
   "Peptide therapy, or the use of specific peptides in treatment, has gained great popularity in recent years. This is due largely to the fact that these peptides are highly specific (i.e.,only do what you want them to do) while also being well-tolerated and safe.",
  icon: CloudArrowUpIcon,
 },
 {
  name: "Immune System",
  description:
   "Strengthen your immune system. Whether you’re looking to boost your immunity and stay ahead of seasonal illnesses or you’re recovering from an injury, immune support boosting treatment may be a great option.",
  icon: LockClosedIcon,
 },
 {
  name: "Bio-Identical Hormone Therapy for Menopause",
  description:
   "Natural hormone therapy uses “bio-identical” hormones (just like you had when you were younger) and plant-based therapies to reverse bone loss, impaired sexual function and reduced stamina which often affects women later in life. This can be a natural remedy for osteoporosis, night sweats, hot flashes, mood changes and fatigue after menopause. It is very different from conventional hormone replacement therapy, with a far superior safety profile.",
  icon: ArrowPathIcon,
 },
 {
  name: "Chronic Fatigue Syndrome",
  description:
   "Chronic fatigue syndrome (CFS) is characterized by profound tiredness, regardless of bed rest. Its symptoms may worsen with physical or mental activity. There are many causes of CFS ranging from food sensitivity, hormonal imbalances, vitamin deficiencies, endocannabinoid system deficiency and chronic infections or toxicity. Once you get to the bottom of what is causing your fatigue, there are many effective treatment options to restore your energy and quality of life.",
  icon: FingerPrintIcon,
 },
 {
  name: "Low Testosterone Treatment",
  description:
   "Testosterone replacement therapy (TRT) can help increase low testosterone levels in your body to normal, healthy ranges. Our team diagnoses and treats low testosterone along with other health conditions. Customized treatment plans from our team at Low T Center are customized to each patient’s specific needs.",
  icon: ArrowPathIcon,
 },
 {
  name: "Long COVID-19",
  description:
   "Some will develop chronic, lingering symptoms for more than 4 weeks after the initial infection. Symptoms will range from shortness of breath, brain fog, fatigue, dizziness and loss of smell or taste. For those suffering from this condition, we can help you by using acombination of supplements and medications to help you recover.",
  icon: FingerPrintIcon,
 },
 {
  name: "Fibromyalgia",
  description:
   "Is a chronic condition which can be difficult to diagnose. It affects mostly women than men. Symptoms include widespread pain, pain worsens with pressure, fatigue, insomnia, restless leg syndrome, numbness or tingling, foggy memory and vision problems.",
  icon: CloudArrowUpIcon,
 },
 {
  name: "Stem Cells Therapy",
  description:
   "We offer advanced treatments like stem cell therapy to improve your quality of life and help you feel better sooner. From chronic pain to sports injuries and arthritis, you’d be surprised at the impressive and effective results of stem cell therapy.",
  icon: LockClosedIcon,
 },
 {
  name: "Weight Loss",
  description:
   "If you’re ready to be at your ideal weight, our personalized weight loss plan can help you get there. Using a scientific medical weight loss approach that considers your specific body’s needs, we will guide you through a custom plan step-by-step, making sure you hit your goals.",
  icon: ArrowPathIcon,
 },
 {
  name: "Weight Gain",
  description:
   "While our culture places immense value on thinness, the prevalence of those who are underweight is a significant public health issue. There are a number of reasons people can be underweight, including genetics and fast metabolism, and underlying medical conditions such as thyroid problems or cancer.",
  icon: FingerPrintIcon,
 },
 {
  name: "Pain Management",
  description:
   "We understands a life of pain is not a quality a life. Our continual goal is to understand our patients, and their needs. By doing so, we exceed the highest standards in Pain Management by providing optimal, thorough, and compassionate medical care to our patients",
  icon: ArrowPathIcon,
 },
 {
  name: "Sleep Studies",
  description:
   "Your body goes through different phases during the different stages of sleep. Brain waves, eye movements, muscle tone, heart rate and breathing all change from stage to stage. By measuring these actions, our specially trained doctors can tell where there are problems and what is causing the problem.",
  icon: FingerPrintIcon,
 },
 {
  name: "Carboxy Therapy",
  description:
   "Carboxy therapy is used to treat a number of ailments that are believed to stem partially from poor blood circulation such as cellulite, dark under eye circles, and stretch marks. Carboxy therapy is a simple procedure that injects carbon dioxide gas to the treatment area to stimulate blood flow to improve the skin’s appearance and elasticity.",
  icon: FingerPrintIcon,
 },
 {
  name: "MesoTherapy",
  description:
   "We practice the specialty of Medical Aesthetics because of the beautifying effects it has on the skin. Wrinkles, cellulite and skin rejuvenation are the most effective complaints successfully treated with Mesotherapy. The injectable as a combination with Botox for whole face treatment also reveals breathtaking results.",
  icon: ArrowPathIcon,
 },
 {
  name: "Platelet- Rich Plasma Therapy",
  description:
   "Platelet-rich plasma (PRP) is one of the leading areas of regenerative medicine. It uses the body’s own cells to stimulate tissue growth. PRP therapy uses a high concentration of autologous platelets found in the patient’s own plasma.",
  icon: FingerPrintIcon,
 },
 {
  name: "Immigration Physical",
  description:
   "We offer USCIS (U.S. Citizenship and Immigration Services) medical exams for obtaining an immigrant visa as typically required by United States.Our immigration doctors are here to provide compassionate care and analysis during your immigration physical.",
  icon: FingerPrintIcon,
 },
 {
  name: "Detox Diet",
  description:
   "We blend into the environment which you are living and observe the triggers and cues that may cause use and relapse. We can advise the client on potential changes in his or her living environment that may assist in sustaining recovery..",
  icon: ArrowPathIcon,
 },
 {
  name: "Brain Mapping",
  description:
   "Would you like to develop deeper insight about your brain and its capacity? Are you wondering how you can optimize your brain’s performance? Would you like to improve your focus and decrease distractibility? Have you wondered if there were other tools to address anxiety, depression, and stress?",
  icon: FingerPrintIcon,
 },
];

function ServicesSection() {
 return (
  <div className="py-24 bg-white sm:py-32">
   <div className="w-full px-6 mx-auto lg:px-4">
    <div className="max-w-2xl mx-auto lg:text-center">
     <h2 className="text-base font-semibold leading-7 text-indigo-600">
      Our Specialties
     </h2>
     <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Our Focus is your health care
     </p>
     <p className="mt-6 text-lg leading-8 text-gray-600">
      From simple concerns to complex issues, our team of highly experienced
      health professionals, are ready to attend to you. We offer a range of
      therapies and treatments to keep you at full capacity so that you’re ready
      to face the world.
     </p>
    </div>
    <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-7xl">
     <dl className="flex flex-wrap justify-evenly">
      {features.map((feature) => (
       <div key={feature.name} className="relative mb-6 group w-96">
        <Image
         className="object-cover w-full"
         src="/smiling-hiker.jpg"
         alt="services"
         width={450}
         height={500}
         quality={100}
        />
        <div className="absolute px-4 py-2 bg-gray-800 bottom-10 left-5 right-5 opacity-70">
         <h3 className="text-xl font-bold text-center text-white">
          {feature.name}
         </h3>
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-0 p-4 duration-500 bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100">
         <p className="p-3 overflow-hidden text-sm text-justify text-white">
          {feature.description}
         </p>
         <a
          className="px-8 py-3 mt-5 duration-300 rounded-full bg-amber-400 hover:bg-amber-600"
          href="#"
         >
          Learn More
         </a>
        </div>
       </div>
      ))}
     </dl>
    </div>
   </div>
  </div>
 );
}

export default ServicesSection;

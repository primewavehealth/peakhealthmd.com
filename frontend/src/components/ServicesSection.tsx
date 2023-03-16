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
  image:
   "https://img.freepik.com/free-photo/beautiful-adult-couple-spend-time-summer-field_1157-23546.jpg?w=996&t=st=1678917609~exp=1678918209~hmac=11f1c06f79498d6bf92278cdcd67f7e9af9309ed8b50fa06b546633f627ad6dc",
 },
 {
  name: "Immune System",
  description:
   "Strengthen your immune system. Whether you’re looking to boost your immunity and stay ahead of seasonal illnesses or you’re recovering from an injury, immune support boosting treatment may be a great option.",
  icon: LockClosedIcon,
  image:
   "https://img.freepik.com/free-photo/young-woman-holding-green-leaves_273609-33340.jpg?w=740&t=st=1678917656~exp=1678918256~hmac=d87c91486b93ddfe13961e47f641ccf98ddf8b44915b18784de230df901a353d",
 },
 {
  name: "Bio-Identical Hormone Therapy for Menopause",
  description:
   "Natural hormone therapy uses “bio-identical” hormones (just like you had when you were younger) and plant-based therapies to reverse bone loss, impaired sexual function and reduced stamina which often affects women later in life. This can be a natural remedy for osteoporosis, night sweats, hot flashes, mood changes and fatigue after menopause. It is very different from conventional hormone replacement therapy, with a far superior safety profile.",
  icon: ArrowPathIcon,
  image:
   "https://img.freepik.com/free-photo/beautiful-gray-haired-senior-woman-yellow-cardigan-white-t-shirt-posing-summer-green-park-keeping-hands-her-waist-doing-physical-exercises-with-confident-smile_343059-4799.jpg?w=996&t=st=1678917715~exp=1678918315~hmac=73906d4155fc928de3f3924befd077be221f3099a007d35ab914d9b517ae9e89",
 },
 {
  name: "Chronic Fatigue Syndrome",
  description:
   "Chronic fatigue syndrome (CFS) is characterized by profound tiredness, regardless of bed rest. Its symptoms may worsen with physical or mental activity. There are many causes of CFS ranging from food sensitivity, hormonal imbalances, vitamin deficiencies, endocannabinoid system deficiency and chronic infections or toxicity. Once you get to the bottom of what is causing your fatigue, there are many effective treatment options to restore your energy and quality of life.",
  icon: FingerPrintIcon,
  image:
   "https://img.freepik.com/free-photo/frustrated-young-african-american-businessman-having-bad-headache_273609-9299.jpg?w=996&t=st=1678924821~exp=1678925421~hmac=2b7ebb4286bb0d648e49458dcd19d7f904ac97a20c5d34b05beefea7700af77b",
 },
 {
  name: "Low Testosterone Treatment",
  description:
   "Testosterone replacement therapy (TRT) can help increase low testosterone levels in your body to normal, healthy ranges. Our team diagnoses and treats low testosterone along with other health conditions. Customized treatment plans from our team at Low T Center are customized to each patient’s specific needs.",
  icon: ArrowPathIcon,
  image:
   "https://img.freepik.com/free-photo/happy-excited-senior-man-wireless-headphones-jogging-outside-low-angle-blue-clear-sky-front-view-copy-space-activity-age-concept_74855-12844.jpg?w=996&t=st=1678925086~exp=1678925686~hmac=355f29a4a11d9e0fd6aff85948c26c4eb0e57e10b13c0ac07416719fcafd701b",
 },
 {
  name: "Long COVID-19",
  description:
   "Some will develop chronic, lingering symptoms for more than 4 weeks after the initial infection. Symptoms will range from shortness of breath, brain fog, fatigue, dizziness and loss of smell or taste. For those suffering from this condition, we can help you by using acombination of supplements and medications to help you recover.",
  icon: FingerPrintIcon,
  image:
   "https://img.freepik.com/free-photo/medium-shot-sick-man-with-laptop_23-2148998316.jpg?w=900&t=st=1678924999~exp=1678925599~hmac=c3d8207072069a97c9a3da4f55a7d3a71c138acb031f118d21f3f9441f044360",
 },
 {
  name: "Fibromyalgia",
  description:
   "Fibromyalgia is a chronic condition which can be difficult to diagnose. It affects mostly women than men. Symptoms include widespread pain, pain worsens with pressure, fatigue, insomnia, restless leg syndrome, numbness or tingling, foggy memory and vision problems.",
  icon: CloudArrowUpIcon,
  image:
   "https://img.freepik.com/free-photo/man-with-shoulder-pain_1368-9818.jpg?w=360&t=st=1678921196~exp=1678921796~hmac=d3e1b710cef2b8834b4734e8ee287157c0daf05d0b9382b010c6b8cd63bb2be3",
 },
 {
  name: "Stem Cells Therapy",
  description:
   "We offer advanced treatments like stem cell therapy to improve your quality of life and help you feel better sooner. From chronic pain to sports injuries and arthritis, you’d be surprised at the impressive and effective results of stem cell therapy.",
  icon: LockClosedIcon,
  image: "/stem-cell.jpg",
 },
 {
  name: "Weight Loss",
  description:
   "If you’re ready to be at your ideal weight, our personalized weight loss plan can help you get there. Using a scientific medical weight loss approach that considers your specific body’s needs, we will guide you through a custom plan step-by-step, making sure you hit your goals.",
  icon: ArrowPathIcon,
  image:
   "https://img.freepik.com/free-photo/slim-tanned-woman-s-body-with-measure-tape_231208-10393.jpg?w=360&t=st=1678920868~exp=1678921468~hmac=8c49aeccc4b4bd8554b1d53bc3295c9b60d9b612f6d5d94eaa64bd93e5c7cbec",
 },
 {
  name: "Weight Gain",
  description:
   "While our culture places immense value on thinness, the prevalence of those who are underweight is a significant public health issue. There are a number of reasons people can be underweight, including genetics and fast metabolism, and underlying medical conditions such as thyroid problems or cancer.",
  icon: FingerPrintIcon,
  image:
   "https://img.freepik.com/free-photo/dark-haired-female-wearing-orange-casual-jumper-showing-floor-scales-isolated-yellow-wall_176532-14134.jpg?w=996&t=st=1678918534~exp=1678919134~hmac=784473cbaa7e7104e9667f22341a47ec1d673db083d23f24fa187c686ab246de",
 },
 {
  name: "Pain Management",
  description:
   "We understands a life of pain is not a quality a life. Our continual goal is to understand our patients, and their needs. By doing so, we exceed the highest standards in Pain Management by providing optimal, thorough, and compassionate medical care to our patients",
  icon: ArrowPathIcon,
  image: "/pain.jpg",
 },
 {
  name: "Sleep Studies",
  description:
   "Your body goes through different phases during the different stages of sleep. Brain waves, eye movements, muscle tone, heart rate and breathing all change from stage to stage. By measuring these actions, our specially trained doctors can tell where there are problems and what is causing the problem.",
  icon: FingerPrintIcon,
  image: "/sleeping.jpg",
 },
 {
  name: "Carboxy Therapy",
  description:
   "Carboxy therapy is used to treat a number of ailments that are believed to stem partially from poor blood circulation such as cellulite, dark under eye circles, and stretch marks. Carboxy therapy is a simple procedure that injects carbon dioxide gas to the treatment area to stimulate blood flow to improve the skin’s appearance and elasticity.",
  icon: FingerPrintIcon,
  image:
   "https://img.freepik.com/free-photo/smiling-young-pretty-woman-standing-isolated_171337-1998.jpg?w=996&t=st=1678921627~exp=1678922227~hmac=7b7ba1585e27b8a7174117a9fa978515714055d52f03c7e32e84289ebddd7efc",
 },
 {
  name: "MesoTherapy",
  description:
   "We practice the specialty of Medical Aesthetics because of the beautifying effects it has on the skin. Wrinkles, cellulite and skin rejuvenation are the most effective complaints successfully treated with Mesotherapy. The injectable as a combination with Botox for whole face treatment also reveals breathtaking results.",
  icon: ArrowPathIcon,
  image:
   "https://img.freepik.com/free-photo/photo-positive-smiling-woman-with-broad-charming-smile-dressed-casually-recreats-home-feels-relaxed-comfortable_273609-3203.jpg",
 },
 {
  name: "Platelet- Rich Plasma Therapy",
  description:
   "Platelet-rich plasma (PRP) is one of the leading areas of regenerative medicine. It uses the body’s own cells to stimulate tissue growth. PRP therapy uses a high concentration of autologous platelets found in the patient’s own plasma.",
  icon: FingerPrintIcon,
  image:
   "https://img.freepik.com/free-photo/beautiful-adult-couple-spend-time-summer-field_1157-23546.jpg?w=996&t=st=1678919505~exp=1678920105~hmac=40463be0dfe1cc2a9a6506620fef80996055d200f69938c97359caddedd3e8b5",
 },
 {
  name: "Immigration Physical",
  description:
   "We offer USCIS (U.S. Citizenship and Immigration Services) medical exams for obtaining an immigrant visa as typically required by United States.Our immigration doctors are here to provide compassionate care and analysis during your immigration physical.",
  icon: FingerPrintIcon,
  image:
   "https://img.freepik.com/free-photo/happy-people-young-beautiful-woman-with-little-boy-attractive-man-long-haired-school-age-girl-casual-clothes-hugging-joyful-looking-camera-standing-near-house_259150-59356.jpg?w=996&t=st=1678919601~exp=1678920201~hmac=6595c5d7c50d056a5f47302eefc958d3784ace9b383383d68a7618b4a464d2ef",
 },
 {
  name: "Detox Diet",
  description:
   "We blend into the environment which you are living and observe the triggers and cues that may cause use and relapse. We can advise the client on potential changes in his or her living environment that may assist in sustaining recovery..",
  icon: ArrowPathIcon,
  image:
   "https://img.freepik.com/free-photo/beautiful-young-woman-eating-salad-black-background_1301-7563.jpg?w=996&t=st=1678919658~exp=1678920258~hmac=c249c262c515c204bea4c34b79dfb94852280adad8ef5ee355f4ea5ad1c4d4eb",
 },
 {
  name: "Brain Mapping",
  description:
   "Would you like to develop deeper insight about your brain and its capacity? Are you wondering how you can optimize your brain’s performance? Would you like to improve your focus and decrease distractibility? Have you wondered if there were other tools to address anxiety, depression, and stress?",
  icon: FingerPrintIcon,
  image:
   "https://img.freepik.com/free-photo/handsome-smiling-young-african-man_171337-9650.jpg?w=996&t=st=1678919820~exp=1678920420~hmac=cb90387c9dc15a3c227a56b427fd39b263af99cb1f1c035170e7ea908d040b8d",
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
     <p className="py-4 mt-6 text-lg leading-8 text-gray-600">
      From simple concerns to complex issues, our team of highly experienced
      health professionals, are ready to attend to you. We offer a range of
      therapies and treatments to keep you at full capacity so that you’re ready
      to face the world.
     </p>
    </div>
    <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-7xl">
     <dl className="flex flex-wrap justify-evenly">
      {features.map((feature) => (
       <div
        key={feature.name}
        className="relative mb-6 group w-96 bg-stone-600 hover:opacity-100"
       >
        <Image
         className="object-cover w-full duration-500"
         src={feature.image}
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

import Image from "next/image";

import Container from "@/components/Container";

export default function Testimonials() {
 return (
  <Container className="max-w-[1400px] mb-6">
   <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
    <div className="lg:col-span-2 xl:col-auto">
     <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
      <p className="text-2xl leading-normal ">
       I went to Peak Health the day before a modeling gig for a mini facial and
       IV Drip and I <Mark>felt AMAZING</Mark> during the entire photoshoot the
       day after. The clinic and nurses were welcoming and laid-back and I will
       definitely be back to do it again. Loved my experience.
      </p>

      <Avatar image="/images/diana.png" name="Diana Sosa" />
     </div>
    </div>
    <div className="">
     <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
      <p className="text-2xl leading-normal ">
       <Mark>Friendly staff</Mark> . Clear consultation of my issue. They help
       relieve my muscle pain on my neck and shoulders. Definitely recommend to
       come back.
      </p>

      <Avatar image="/images/ismael.png" name="Ismael Chino-Nava" />
     </div>
    </div>
    <div className="">
     <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
      <p className="text-2xl leading-normal ">
       This place is great! <Mark>Clean and beautiful</Mark>. No long waits
       ever! The staff is so cool and the care you get is amazing. They truly
       want to help people here.
      </p>

      <Avatar image="/images/justin.png" name="Justin Minton" />
     </div>
    </div>
   </div>
  </Container>
 );
}

function Avatar(props) {
 return (
  <div className="flex items-center my-6 mt-8 ">
   <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
    <Image src={props.image} width="40" height="40" alt="Avatar" />
   </div>
   <div>
    <div className="text-lg font-medium">{props.name}</div>
    <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
   </div>
  </div>
 );
}
function Mark(props) {
 return (
  <>
   {" "}
   <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
    {props.children}
   </mark>{" "}
  </>
 );
}

import Link from "next/link";

import {
 CalendarDaysIcon,
 PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";

import CTA from "@/components/UI/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Affordable Pain Treatment in Las Vegas",
 description:
  "Get Affordable Pain Treatment in Las Vegas.  Find lasting relief from chronic pain with help from our pain specialists at the premier pain treatment center in in Las Vegas.",
};

function Pain() {
 return (
  <div>
   <header className="">
    <div className="bg-[url(/images/pain1.jpg)] bg-center bg-no-repeat bg-cover container flex flex-col items-center px-4 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
     {/* <Image
      className="absolute inset-0 bg-center bg-no-repeat bg-cover"
      alt="banner"     
      src="/pain1.jpg"
      fill
      quality={100}
     /> */}
    </div>
   </header>

   <div className="grid grid-cols-1 pb-12 lg:grid-cols-4">
    <article className="col-span-3 px-8 mx-auto prose bg-white lg:-mt-40 prose-slate lg:prose-lg">
     <h1 className="pt-8 text-2xl font-bold leading-none text-blue-700 lg:text-4xl xl:max-w-3xl">
      Pain Management
     </h1>
     <p className="lead">
      Pain is a complex sensory and emotional experience that is felt in
      response to tissue damage, injury, or inflammation. It can range from mild
      discomfort to severe agony and can affect individuals physically,
      emotionally, and psychologically.
     </p>
     <h3>There are two main types of pain:</h3>
     <li>
      <strong>Acute Pain</strong> This type of pain occurs suddenly and is
      usually caused by tissue damage or injury. It is often described as sharp
      or stabbing and is typically localized to the area of injury. Acute pain
      usually subsides once the underlying cause is treated or healed.
     </li>
     <li>
      <strong>Chronic Pain</strong> This type of pain persists for more than 12
      weeks and is often associated with conditions such as arthritis, nerve
      damage, or cancer. Chronic pain can be dull or throbbing and may be
      accompanied by other symptoms such as fatigue, depression, and anxiety.
     </li>
     <blockquote>
      <h4 className="py-10">
       {" "}
       WE ARE THE GO TO{" "}
       <span className="relative inline-block px-2">
        <div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
        <span className="relative text-white">
         PAIN TREATMENT CENTER IN LAS VEGAS
        </span>
       </span>
      </h4>
     </blockquote>
     <h3>Paint Treatment Options</h3>
     <p>There are several treatment options for pain, including:</p>
     <h4>Medications</h4>{" "}
     <p>
      Over-the-counter pain relievers such as acetaminophen or ibuprofen can be
      effective for mild to moderate pain. Prescription medications such as
      opioids may be used for severe pain but are associated with risks and
      potential side effects.
     </p>
     <h4>Physical Therapy</h4>{" "}
     <p>
      This can include exercises, stretching, and other techniques to improve
      mobility, reduce pain, and prevent further injury.
     </p>
     <h4>Injections</h4>{" "}
     <p>
      Injections of local anesthetics or steroids may be used to reduce
      inflammation and pain in specific areas of the body.
     </p>
     <h4>Surgery</h4>{" "}
     <p>
      In some cases, surgery may be necessary to treat the underlying cause of
      the pain, such as a herniated disc or damaged joint.
     </p>
     <h4>Alternative therapies</h4>{" "}
     <p>
      These can include acupuncture, massage, yoga, and meditation. While
      research is limited, some people may find these therapies helpful in
      managing pain.
     </p>
     <p>
      It's important to remember that pain is a complex and individual
      experience, and treatment may vary depending on the underlying cause and
      the individual's response to therapy. If you are experiencing pain, it is
      always best to consult with a healthcare professional to determine the
      best course of treatment for you.
     </p>
     <h2 className="pt-4">Las Vegas Pain Treatment Specialists</h2>
     <p>
      We have some of the best pain experts in Las Vegas. They specializes in
      the diagnosis and treatment of pain. They can help you manage pain by
     </p>
     <h4>Conducting a thorough evaluation</h4>{" "}
     <p>
      Our pain doctor in las vegas will assess your pain by asking questions
      about your medical history, performing a physical examination, and using
      diagnostic tests if necessary. This will help them to identify the
      underlying cause of your pain
     </p>
     <h4>Developing a treatment plan</h4>{" "}
     <p>
      Once the cause of your pain is identified, the pain doctor will develop a
      personalized treatment plan that may involve a combination of
      pharmacological and non-pharmacological therapies. The treatment plan may
      include medications, physical therapy, interventional procedures,
      psychological therapy, and lifestyle modifications.
     </p>
     <h4>Monitoring and adjusting treatment</h4>{" "}
     <p>
      Our staff will regularly monitor your progress and adjust your treatment
      plan as needed. This may involve changes to medication dosages or the
      addition of new therapies.
     </p>
     <h4>Providing education and support</h4>{" "}
     <p>
      Be rest assured you will be in the care of some of the best pain doctors
      in Las Vegas. They will educate you about your pain and provide support to
      help you manage your pain. This may include education about.
     </p>
     <h4>Consultation</h4>{" "}
     <p>
      {" "}
      At Prime Wave, we understand the impact that chronic pain can have on your
      life. That's why we offer personalized consultations to help patients
      understand their pain and develop an effective treatment plan. During your
      consultation, our pain experts in las vegas will conduct a thorough
      physical exam and review your medical history, as well as discuss your
      symptoms and concerns. We will work closely with you to develop a
      personalized treatment plan that addresses your unique needs and goals,
      taking into account your medical history, lifestyle, and other factors.
      Our goal is to provide you with the highest level of care and support, so
      you can effectively manage your pain and improve your quality of life.
     </p>
    </article>

    <aside className="flex flex-col mx-auto mt-12 border-t-4 border-gray-500 lg:mt-0">
     <div className="mx-auto">
      <p className="max-w-[300px] mt-5 text-xl  text-left text-blue-600">
       Got Pain? <br />
       Our team of pain specialists in Las Vegas are available to help you.
      </p>
     </div>
     <div className="flex flex-col justify-center mt-5">
      <Link
       href="https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services"
       className="rounded-md p-4 cursor-pointer tracking-wider text-md  w-[300px] flex justify-center
              items-center
              text-center bg-blue-600 text-white font-bold hover:bg-blue-600 hover:shadow-blue mt-3 hover:scale-90
            "
      >
       <CalendarDaysIcon className="w-8 h-8 mr-4 text-white" />
       Request An Appointment
      </Link>
      <Link
       href="tel:7026254334"
       className="rounded-md p-4 cursor-pointer tracking-wider text-md w-[300px] justify-center flex hover:scale-90
              items-center
              text-center bg-blue-600 text-white font-bold hover:bg-blue-600 hover:shadow-blue mt-3
            "
      >
       <PhoneArrowUpRightIcon className="w-6 h-6 mr-4 text-white" /> Contact Us
      </Link>
     </div>
    </aside>
   </div>

   <CTA
    heading=" Comprehensive Pain Care  in Las Vegas"
    body="Got shoulder pain, back pain, knee or joint pain or any kind of pain?, Prime Wave can help you find relief. Our experienced team of board certified pain doctors in las Vegas specializes in providing personalized pain management solutions to address the root cause of your pain. From cutting-edge therapies such as regenerative medicine and platelet-rich plasma therapy to traditional approaches like medication management and physical therapy, we offer a range of treatments tailored to your unique needs. Our goal is to help you achieve a better quality of life by reducing your pain and improving your overall function. Contact us today to schedule a consultation and take the first step towards a pain-free life."
    src="/images/happy-man.avif"
    alt="pain-mgt-las-vegas"
    btn={{
     href:
      "https://squareup.com/appointments/book/ezlfeg7ddtr94y/L8CHHENSSH5NZ/services",
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

export default Pain;

import OfficeSpaceSlider from "@/components/OfficeSpaceSlider.jsx";
import Link from "next/link";
export default function Page() {
 return (
  <article className="prose max-w-none">
   <div className="container p-6 my-12 mx-auto max-w-[1200px]">
    {/* Title */}
    <h1 className="mb-4 text-3xl font-bold">
     Grow Your Business in A Fabulous Las Vegas Medical Clinic.
    </h1>

    {/* Description */}
    <p className="my-8 text-lg leading-10 ">
     Discover a unique opportunity in Spring Valley, Las Vegas, where exclusive
     Exam Rooms are available within a state-of-the-art Medical Clinic. Nestled
     in the heart of this vibrant community, these well-equipped exam spaces
     offer an ideal environment for healthcare professionals seeking a prime
     location to establish or expand their practice. The clinic boasts modern
     facilities and a welcoming ambiance, providing a conducive setting for
     patient care. With convenient access to amenities and a thriving local
     community, these Exam Rooms presents a strategic and advantageous choice
     for practitioners looking to enhance their medical presence in Las Vegas.
     Don't miss out on this rare chance to elevate your practice in a thriving
     medical hub. We are located at the{" "}
     <Link
      href="https://maps.app.goo.gl/dQoAjg7TN7xFtpkH7"
      className="text-blue-700"
     >
      San Martin Medical Arts Pavilion - 8285 W Arby Ave, Las Vegas, NV 89113.
     </Link>
    </p>

    {/* Image Slider */}
    <OfficeSpaceSlider />

    <div className="mt-16 lg:">
     <h2 className="mb-4 text-2xl font-bold">Dimensions</h2>
     <ul className="list-disc list-inside ">
      <li className="mb-2">Lab Room: 8.5’ x9’</li>
      <li className="mb-2">Exam Room 2: (big room) 13’ x 10’</li>
      <li className="mb-2">Exam Room 3: (my office) 11’ x 9’</li>
     </ul>
    </div>

    {/* Features */}
    <div className="mt-16 lg:">
     <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
     <ul className="list-disc list-inside ">
      <li className="mb-2">Cleanest Medical Exam Rooms</li>
      <li className="mb-2">
       Just bring your license & Ins., and we provide the rest.
      </li>
      <li className="mb-2">Billing and Marketing expertise</li>
      <li className="mb-2">
       Upper scale neighborhood. Across from the new Durango Casino
      </li>
      <li className="mb-2">Caring and experienced staff</li>
      <li className="mb-2">
       Affluent location. Located in Dignity Health/ St. Rose Hospital complex.
      </li>
      <li className="mb-2">Open to see patients 24/7.</li>
      <li className="mb-2">
       Ideal Medical Network for Nurses, Physicians, Aesthetician,
       Chiropractors, Personal Trainers, Therapists, Phlebotomists
      </li>
      <li className="mb-2">See patients, be a patient!</li>
     </ul>
    </div>

    <div className="space-y-4">
     <p>
      Have meetings, sleep studies, medical seminars, training sessions, doctor
      visits, nurses station, blood draws, facials, chiropractor services,
      weight loss sessions, therapy sessions, telemedicine, wellness
      consultations, IV Parties, and more.
     </p>

     <p>
      Includes professional medical staff, private office or exam room, front
      office medical assistance, medical equipment and supplies, parking,
      advertising and more.
     </p>

     <p>Hourly, Daily, Weekly, Monthly</p>

     <p>
      Be part of Las Vegas' Medical Scene. Network today: Call or stop by
      Monday-Thursday 9am (PST)-5pm (PST)
     </p>
    </div>

    {/* Contact Form */}
    <div className="space-y-4">
     <h2 className="text-2xl font-bold lg:mt-12">Contact Us</h2>
     <p>
      Fill out the form on our contact page and we will be in touch with you.
     </p>
     <Link
      className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-blue-900 bg-yellow-400 rounded-full hover:text-white hover:bg-blue-900"
      href="/contact"
     >
      <span>Contact Us</span>{" "}
      <svg
       width="15"
       height="15"
       viewBox="0 0 15 15"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
       ></path>
      </svg>
     </Link>
    </div>
   </div>
  </article>
 );
}

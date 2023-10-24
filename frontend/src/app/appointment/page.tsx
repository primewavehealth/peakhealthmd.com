export const metadata: Metadata = {
 title: "Appointment",
 description:
  "Schedule your appointment at our trusted ED and pain care clinic. Take the first step towards relief and a healthier, happier you today.",
 alternates: {
  canonical: "/appointment",
 },
};

import AppointmentForm from "@/components/AppointmentForm";
import Link from "next/link";
import { Metadata } from "next/types";

function page() {
 return (
  <section className="min-h-screen bg-white dark:bg-gray-900 lg:flex">
   <div className="flex flex-col justify-center w-full p-8 lg:w-1/2 lg:bg-gray-100 lg:px-12 lg:dark:bg-gray-800 xl:px-32">
    <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-5xl">
     Free Consultation
    </h1>

    <p className="mt-4 text-gray-500 dark:text-gray-400">
     Submit Your Details Below To Get A Free Consultation
    </p>

    <div className="mt-6 md:mt-8">
     <h3 className="font-medium text-gray-600 dark:text-gray-300">Follow us</h3>

     <div className="-mx-1.5 mt-4 flex">
      <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
       <li>
        <Link
         className="mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
         href="https://twitter.com/primewavehealth"
        >
         <svg
          className="w-10 h-10 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
         </svg>
        </Link>{" "}
       </li>
       <li>
        <Link
         className="mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
         href="https://facebook.com/primewavehealth"
        >
         <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
           fill="currentColor"
          />
         </svg>
        </Link>
       </li>
       <li>
        <Link
         className="mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
         href="https://instagram.com/primewavehealth"
        >
         <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
           fill="currentColor"
          />
         </svg>
        </Link>
       </li>
       <li>
        <Link
         href="https://www.youtube.com/@primewavehealth"
         className="mx-1.5 transform text-gray-400 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
         rel="noreferrer"
         target="_blank"
        >
         <span className="sr-only">Youtube</span>

         <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-8 w-68"
          viewBox="0 0 16 16"
         >
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
         </svg>
        </Link>
       </li>
      </ul>
     </div>
    </div>
   </div>

   <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24">
    <AppointmentForm />
   </div>
  </section>
 );
}

export default page;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

// Define Zod schema for validation
const formSchema = z.object({
 name: z
  .string()
  .min(3, "Name must be at least 3 characters")
  .max(20, "Name is too long"),
 phone: z
  .string()
  .min(1, { message: "Phone is required" })
  .regex(/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/, {
   message: "Must be a valid phone number",
  }),
 email: z.string().min(1, { message: "Email is required" }).email({
  message: "Must be a valid email",
 }),
 message: z.string().max(10, "Message cannot be more than 200 characters"),
});

type FormData = z.infer<typeof formSchema>;

function page() {
 const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
 } = useForm<FormData>({
  mode: "onChange",
  resolver: zodResolver(formSchema),
 });

 const submitHandler = async (data: FormData) => {
  const config = {
   method: "post",
   url: "/api/consultation",
   headers: {
    "Content-Type": "application/json",
   },
   data: data,
  };
  try {
   const response = await axios(config);
   if (response.status === 200) {
    toast.success(
     "Your message has been sent. Thank you for contacting us. We will get back to you as soon as possible."
    );

    // Reset the form after successful submission
    reset();
   }
  } catch (err: any) {
   toast.error(err.response.data.message + ": " + err.response.statusText);
  }
 };

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
      </Link>

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
     </div>
     <div className="pt-6">
      Click{" "}
      <Link target="_blank" href="https://primewavehealth.setmore.com">
       Here{" "}
      </Link>
      {}to Book An Appointment
     </div>
    </div>
   </div>

   <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24">
    <form onSubmit={handleSubmit(submitHandler)}>
     <div className="-mx-2 md:flex md:items-center">
      <div className="flex-1 px-2">
       <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
        Full Name
       </label>
       <input
        type="text"
        placeholder="John Doe"
        className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400 ${
         errors.name?.message && "shadow-[0_0_0_2px] shadow-red-500"
        }`}
        {...register("name")}
       />

       {errors.name?.message && (
        <div className="mt-1 text-xs text-red-500">{errors.name?.message}</div>
       )}
      </div>

      <div className="flex-1 px-2 mt-4 md:mt-0">
       <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
        Phone Number
       </label>
       <input
        type="tel"
        placeholder="7021234567"
        className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400 ${
         errors.phone?.message && "shadow-[0_0_0_2px] shadow-red-500"
        }`}
        {...register("phone")}
       />

       {errors.phone?.message && (
        <div className="mt-1 text-xs text-red-500">{errors.phone?.message}</div>
       )}
      </div>
     </div>
     <div className="w-full mt-4">
      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
       Email
      </label>
      <input
       type="email"
       placeholder="johndoe@example.com"
       className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400 ${
        errors.email?.message && "shadow-[0_0_0_2px] shadow-red-500"
       }`}
       {...register("email")}
      />
      {errors.email?.message && (
       <div className="mt-1 text-xs text-red-500">{errors.email?.message}</div>
      )}
     </div>
     <div className="w-full mt-4">
      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
       Message
      </label>
      <textarea
       className={`block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400 md:h-56  ${
        errors.message?.message && "shadow-[0_0_0_2px] shadow-red-500"
       }`}
       placeholder="Message is Optional"
       rows={5}
       {...register("message")}
      ></textarea>
      {errors.message?.message && (
       <div className="mt-1 text-xs text-red-500">
        {errors.message?.message}
       </div>
      )}
     </div>

     <button
      className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      id="consult"
      type="submit"
      disabled={isSubmitting}
      onClick={handleSubmit(submitHandler)}
     >
      Submit
     </button>
    </form>
   </div>
  </section>
 );
}

export default page;

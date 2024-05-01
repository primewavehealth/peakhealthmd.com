"use client";
import {
 AtSymbolIcon,
 ChatBubbleBottomCenterTextIcon,
 PhoneIcon,
 UserIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
 nameSurname: z
  .string()
  .min(1, { message: "Full name is required" })
  .max(25, { message: "Full name cannot exceed 25 characters" }),
 email: z.string().min(1, { message: "Email is required" }).email({
  message: "Must be a valid email",
 }),
 phone: z
  .string()
  .min(1, { message: "Phone is required" })
  .regex(/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/, {
   message: "Must be a valid phone number",
  }),
 subject: z.string().min(1, { message: "subject is required" }),
 message: z
  .string()
  .min(10, { message: "Message must be at least 10 characters" })
  .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormData = z.infer<typeof formSchema>;

function ContactForm() {
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
   url: "/api/contact",
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
  <>
   <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
    <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
     <div className="mb-4">
      <div className="relative">
       {errors.nameSurname?.message ? (
        <UserIcon className="absolute w-6 h-6 pr-2 text-red-500 -translate-y-1/2 border-r top-1/2 left-2" />
       ) : (
        <UserIcon className="absolute w-6 h-6 pr-2 -translate-y-1/2 border-r top-1/2 left-2" />
       )}
       <input
        className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight duration-300
          ${errors.nameSurname?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
        type="text"
        placeholder="Full Name"
        {...register("nameSurname")}
       />
      </div>
      {errors.nameSurname?.message && (
       <div className="mt-1 text-xs text-red-500">
        {errors.nameSurname?.message}
       </div>
      )}
     </div>
     <div className="mb-4">
      <div className="relative">
       {errors.email?.message ? (
        <AtSymbolIcon className="absolute w-6 h-6 pr-2 text-red-500 -translate-y-1/2 border-r top-1/2 left-2" />
       ) : (
        <AtSymbolIcon className="absolute w-6 h-6 pr-2 -translate-y-1/2 border-r top-1/2 left-2" />
       )}
       <input
        className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 text-gray-700  leading-tight duration-300
          ${errors.email?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
        type="email"
        placeholder="Email"
        {...register("email")}
       />
      </div>
      {errors.email?.message && (
       <div className="mt-1 text-xs text-red-500">{errors.email?.message}</div>
      )}
     </div>
     <div className="mb-4">
      <div className="relative">
       {errors.phone?.message ? (
        <PhoneIcon className="absolute w-6 h-6 pr-2 text-red-500 -translate-y-1/2 border-r top-1/2 left-2" />
       ) : (
        <PhoneIcon className="absolute w-6 h-6 pr-2 -translate-y-1/2 border-r top-1/2 left-2" />
       )}
       <input
        className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight duration-300
          ${errors.phone?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
        type="tel"
        placeholder="Phone"
        {...register("phone")}
       />
      </div>
      {errors.phone?.message && (
       <div className="mt-1 text-xs text-red-500">{errors.phone?.message}</div>
      )}
     </div>
     <div className="mb-4">
      <div className="relative">
       {errors.subject?.message ? (
        <ChatBubbleBottomCenterTextIcon className="absolute w-6 h-6 pr-2 text-red-500 -translate-y-1/2 border-r top-1/2 left-2" />
       ) : (
        <ChatBubbleBottomCenterTextIcon className="absolute w-6 h-6 pr-2 -translate-y-1/2 border-r top-1/2 left-2" />
       )}
       <input
        className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight duration-300
          ${errors.subject?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
        type="text"
        placeholder="subject"
        {...register("subject")}
       />
      </div>
      {errors.subject?.message && (
       <div className="mt-1 text-xs text-red-500">
        {errors.subject?.message}
       </div>
      )}
     </div>
     <div className="mb-4">
      <textarea
       className={`shadow appearance-none outline-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-300
          ${errors.message?.message && "shadow-[0_0_0_2px] shadow-red-500"}
          `}
       placeholder="Message"
       rows={5}
       {...register("message")}
      ></textarea>
      {errors.message?.message && (
       <div className="mt-1 text-xs text-red-500">
        {errors.message?.message}
       </div>
      )}
     </div>

     <div className="flex items-center justify-between gap-10">
      <button
       id="contact"
       className={`${
        isSubmitting
         ? "opacity-50 cursor-not-allowed"
         : "opacity-100 cursor-pointer"
       } bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline duration-300`}
       type="submit"
       disabled={isSubmitting}
       onClick={handleSubmit(submitHandler)}
      >
       {isSubmitting ? "Sending..." : "Send"}
      </button>
     </div>
    </form>
   </div>
  </>
 );
}
export default ContactForm;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
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
 datetime: z.date(),
 services: z.enum([
  "ED",
  "Low-T",
  "Back-Pain",
  "Knee-Pain",
  "Neck-Pain",
  "Joint-Pain",
 ]),
 message: z.string().max(10, "Message cannot be more than 200 characters"),
});

type FormData = z.infer<typeof formSchema>;

function Consultation() {
 const {
  register,
  handleSubmit,
  reset,
  control,
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

 const isWeekday = (date: Date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
 };

 return (
  <section id="form" className="dark:bg-gray-900">
   <div className="flex flex-col justify-center p-8 pt-0">
    <div className="pt-8 lg:pt-16">
     <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
      Schedule Appointment
     </h1>

     <p className="w-full mt-4 text-lg font-bold text-gray-500 dark:text-gray-400">
      Submit Your Details Below
     </p>
    </div>
    <form id="confirm_appointment" onSubmit={handleSubmit(submitHandler)}>
     {/* Name */}
     <div className="mt-4 w-80">
      {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
        Full Name
       </label> */}
      <input
       type="text"
       placeholder="Your Name"
       className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 text-gray-700  leading-tight duration-300 ${
        errors.name?.message && "shadow-[0_0_0_2px] shadow-red-500"
       }`}
       {...register("name")}
      />

      {errors.name?.message && (
       <div className="mt-1 text-xs text-red-500">{errors.name?.message}</div>
      )}
     </div>
     {/* Phone Number */}
     <div className="mt-4 w-80">
      {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
        Phone Number
       </label> */}
      <input
       type="tel"
       placeholder="Your Phone Number"
       className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 text-gray-700  leading-tight duration-300 ${
        errors.phone?.message && "shadow-[0_0_0_2px] shadow-red-500"
       }`}
       {...register("phone")}
      />

      {errors.phone?.message && (
       <div className="mt-1 text-xs text-red-500">{errors.phone?.message}</div>
      )}
     </div>

     {/* Email */}

     <div className="mt-4 w-80">
      {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
        Email
       </label> */}
      <input
       type="email"
       placeholder=" Your Email"
       className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 text-gray-700  leading-tight duration-300 ${
        errors.email?.message && "shadow-[0_0_0_2px] shadow-red-500"
       }`}
       {...register("email")}
      />
      {errors.email?.message && (
       <div className="mt-1 text-xs text-red-500">{errors.email?.message}</div>
      )}
     </div>
     {/* Options */}
     <div className="w-full lg:w-[350px] mt-4">
      {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
        Services
       </label> */}

      <select
       placeholder="Select A Service"
       className={`shadow appearance-none outline-none border rounded w-80 py-2 pl-10 text-gray-700  leading-tight duration-300 ${
        errors.services?.message && "shadow-[0_0_0_2px] shadow-red-500"
       }`}
       {...register("services")}
      >
       <option value="none">Choose A Service</option>
       <option value="ED">Erectile Dysfunction</option>
       <option value="Low-T">Low Testosterone</option>
       <option value="Back-Pain">Back Pain</option>
       <option value="Knee-Pain">Knee Pain</option>
       <option value="Neck-Pain">Neck Pain</option>
       <option value="Joint-Pain">Joint Pain</option>
      </select>
      {errors.services?.message && (
       <div className="mt-1 text-xs text-red-500">
        {errors.services?.message}
       </div>
      )}
     </div>

     {/* Date Time */}
     <div className="mt-4">
      <Controller
       name="datetime"
       control={control}
       render={({ field }) => (
        <DatePicker
         minDate={new Date()}
         minTime={new Date(0, 0, 0, 9, 0)}
         maxTime={new Date(0, 0, 0, 16, 30)}
         isClearable={true}
         placeholderText="Choose A Date and Time"
         className={`shadow w-80 appearance-none outline-none border rounded  px-0 py-2 pl-10 text-gray-700  leading-tight duration-300 ${
          errors.email?.message && "shadow-[0_0_0_2px] shadow-red-500"
         }`}
         selected={field.value}
         onChange={(datetime: Date) => field.onChange(datetime)}
         showTimeSelect
         filterDate={isWeekday}
         dateFormat="MMMM d, yyyy h:mm aa"
        />
       )}
      />
      {errors.datetime?.message && (
       <div className="mt-1 text-xs text-red-500">
        {errors.datetime?.message}
       </div>
      )}
     </div>
     {/* text area */}
     <div className="mt-4 w-80">
      {/*  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
       Message
      </label> */}
      <textarea
       className={`shadow appearance-none outline-none border rounded w-full py-2 pl-10 text-gray-700  leading-tight duration-300  ${
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
      className="px-6 py-3 mt-4 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md w-80 text-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      id="consult"
      type="submit"
      disabled={isSubmitting}
      onClick={handleSubmit(submitHandler)}
     >
      Schedule Appointment
     </button>
    </form>
   </div>
  </section>
 );
}

export default Consultation;

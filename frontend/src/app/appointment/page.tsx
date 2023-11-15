export const metadata: Metadata = {
 title: "Appointment",
 description:
  "Schedule your appointment at our trusted ED and pain care clinic. Take the first step towards relief and a healthier, happier you today.",
 alternates: {
  canonical: "/appointment",
 },
};

import AppointmentForm from "@/components/AppointmentForm";
import { Metadata } from "next/types";

function page() {
 return (
  <div className="flex items-center justify-center min-h-screen m-6 ">
   <AppointmentForm />
  </div>
 );
}

export default page;

import AppointmentForm from "@/components/AppointmentForm";
import { Metadata } from "next/types";
import { server } from "config";

export const metadata: Metadata = {
 title: "Appointment",
 description:
  "Schedule your appointment at our trusted ED and pain care clinic. Take the first step towards relief and a healthier, happier you today.",
 alternates: {
  canonical: `${server}/appointment`,
 },
};

function page() {
 return (
  <div className="flex items-center justify-center min-h-screen m-6 ">
   <AppointmentForm />
  </div>
 );
}

export default page;

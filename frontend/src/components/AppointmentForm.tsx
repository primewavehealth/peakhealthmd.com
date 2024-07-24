"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const handleSubmit = (event: any) => {
 event.preventDefault(); // Prevents default form submission
 console.log("BOOKed");
};

export default function AppointmentForm() {
 useEffect(() => {
  (async function () {
   const cal = await getCalApi();
   cal("ui", {
    styles: { branding: { brandColor: "#000000" } },
    hideEventTypeDetails: false,
    layout: "month_view",
   });
   cal("on", {
    action: "bookingSuccessful",
    callback: (e) => {
     gtag("event", "conversion_event_book_appointment", {
      // <event_parameters>
     });
    },
   });
  })();
 }, []);
 return (
  <Cal
   calLink="primewavehealth/appointment"
   style={{ width: "100%", height: "100%", overflow: "scroll" }}
   config={{ layout: "month_view" }}
  />
 );
}

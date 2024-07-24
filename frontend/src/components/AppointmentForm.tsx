"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

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
     window.gtag;
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

/* export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
 window.gtag("config", GA_MEASUREMENT_ID, {
  page_path: url,
 });
};
 */

type WindowWithDataLayer = Window & {
 dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = "GTM-NFW6JJZC";

export const pageview = (url: string) => {
 if (typeof window.dataLayer !== "undefined") {
  window.dataLayer.push({
   event: "pageview",
   page: url,
  });
 }
};

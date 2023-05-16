import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar/Navbar";
import CookieBanner from "@/components/cookiebanner";
import * as fbq from "@/lib/fpixel";
import { FB_PIXEL_ID } from "@/lib/fpixel";
import { SiteConfig } from "@/typings/types";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
 variable: "--font-inter",
 display: "swap",
 weight: ["400", "700"],
 subsets: ["latin"],
});

export const siteConfig: SiteConfig = {
 name: "The Vegas Clinic",
 description:
  "Pain Care and Wellness Clinic in Las Vegas focus on pain management, fibromyalgia, chronic fatigue , weight loss, shockwave therapy and iv therapy",
 url: "https://vegasclinic.com",
 ogImage: "https://vegasclinic.com/og.webp",
 links: {
  twitter: "https://twitter.com/vegasclinic",
  facebook: "https://facebook.com/vegasclinic",
  instagram: "https://instagram.com/vegasclinic",
 },
};

export const metadata: Metadata = {
 title: {
  default: siteConfig.name,
  template: `%s | ${siteConfig.name}`,
 },
 description: siteConfig.description,
 keywords: [
  "Pain Management",
  "Erectile Dysfunction",
  "Chronic Fatigue",
  "Fibromyalgia",
  "Peptide Therapy",
  "Weight Loss",
  "Prp Facials",
  "IV Therapy",
  "Hormone Therapy",
 ],
 openGraph: {
  url: siteConfig.url,
  title: siteConfig.name,
  description: siteConfig.description,
  siteName: siteConfig.name,
  locale: "en-US",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: siteConfig.name,
  description: siteConfig.description,
  images: [`${siteConfig.url}/og.webp`],
  creator: "@vegasclinic",
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },

 icons: {
  shortcut: "/favicon.ico",
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html
   lang="en"
   className={clsx(
    "text-black bg-white dark:text-white dark:bg-[#111010]",
    inter.variable
   )}
  >
   <Head>
    <noscript>
     <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
     />
    </noscript>
   </Head>

   {/* Global Site Code Pixel - Facebook Pixel */}
   <Script
    id="fb-pixel"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
     __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
    }}
   />
   <GoogleAnalytics GA_MEASUREMENT_ID="G-NK876YYXRX" />
   <body className="flex flex-col antialiased">
    <main className="flex flex-col flex-auto min-w-0">
     <Navbar />
     {children}
     <Footer />
    </main>
    <CookieBanner />
   </body>
  </html>
 );
}

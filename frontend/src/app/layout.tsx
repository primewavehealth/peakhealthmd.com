import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar";
import CookieBanner from "@/components/cookiebanner";
import ToasterProvider from "@/lib/ToastProvider";
import "@/styles/globals.css";
import { SiteConfig } from "@/typings/types";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./Loading";

const inter = Inter({
 weight: ["400", "700"],
 subsets: ["latin"],
 variable: "--font-inter",
 display: "swap",
});

export const siteConfig: SiteConfig = {
 name: "Prime Wave",
 description: "Get affordable chronic pain care in Las Vegas at Primewave.",
 url: "https://primewavehealth.com",
 links: {
  twitter: "https://twitter.com/primewavehealth",
  facebook: "https://facebook.com/primewavehealth",
  instagram: "https://instagram.com/primewavehealth",
 },
};

export const metadata: Metadata = {
 metadataBase: new URL("https://primewavehealth.com"),
 title: {
  default: siteConfig.name,
  template: `%s | ${siteConfig.name}`,
 },
 description: siteConfig.description,

 openGraph: {
  title: "Prime Wave Health",
  description: "Get affordable chronic pain care in Las Vegas at Primewave.",
  url: "https://www.primewavehealth.com",
  siteName: "Prime Wave Health",
  locale: "en-US",
  type: "website",
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
 twitter: {
  card: "summary_large_image",
  title: "Prime Wave Health",
 },
 verification: {
  google: "AIxS_V2hiFfSnQitdraPhR62eVTY1OXQ-s_vM8qDVRE",
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
   <Suspense fallback={<Loading />}>
    <GoogleAnalytics GA_MEASUREMENT_ID="G-HH6TSN7KTX" />
   </Suspense>
   <body className="flex flex-col antialiased">
    <main className="flex flex-col flex-auto min-w-0">
     <ToasterProvider />
     <Topbar />
     <Navbar />
     {children}
     <Footer />
    </main>
    <Suspense fallback={<Loading />}>
     <CookieBanner />
    </Suspense>
   </body>
  </html>
 );
}

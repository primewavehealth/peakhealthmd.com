import FacebookPixel from "@/components/FacebookPixel";
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

const inter = Inter({
 variable: "--font-inter",
 display: "swap",
 weight: ["400", "700"],
 subsets: ["latin"],
});

export const siteConfig: SiteConfig = {
 name: "Prime Wave",
 description:
  "Get affordable chronic pain care in Las Vegas at Primewave. Our dedicated team provides cost-effective treatment options for long-lasting pain relief, helping you regain control of your life.",
 url: "https://primewavehealth.com",
 ogImage: "https://primewavehealth.com/images/logo.png",
 links: {
  twitter: "https://twitter.com/primewavehealth",
  facebook: "https://facebook.com/primewavehealth",
  instagram: "https://instagram.com/primewavehealth",
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
  "Pain Care",
  "Chronic Pain",
  "Joint Pain",
  "Neck Pain",
  "Back Pain",
 ],
 openGraph: {
  title: "Prime Wave Health",
  description:
   "Get affordable chronic pain care in Las Vegas at Primewave. Our dedicated team provides cost-effective treatment options for long-lasting pain relief, helping you regain control of your life",
  url: "https://www.primewavehealth.com",
  siteName: "Prime Wave Health",
  images: [
   {
    url: "https://primewavehealth.com/images/logo.png",
    width: 300,
    height: 200,
   },
  ],
  locale: "en-US",
  type: "website",
 },
 twitter: {
  card: "summary_large_image",
  title: "Prime Wave Health",
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
   <GoogleAnalytics GA_MEASUREMENT_ID="G-HH6TSN7KTX" />
   <body className="flex flex-col antialiased">
    <main className="flex flex-col flex-auto min-w-0">
     <ToasterProvider />
     <Topbar />
     <Navbar />
     {children}
     <Footer />
    </main>
    <CookieBanner />
    <FacebookPixel />
   </body>
  </html>
 );
}

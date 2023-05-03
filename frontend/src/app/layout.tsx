import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar/Navbar";
import CookieBanner from "@/components/cookiebanner";
import { SiteConfig } from "@/typings/types";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
 variable: "--font-inter",
 display: "swap",
 weight: ["400", "700"],
 subsets: ["latin"],
});

export const siteConfig: SiteConfig = {
 name: "Vegas Clinic",
 description:
  "Pain Care and Wellness Clinic in Las Vegas focus on pain management, fibromyalgia, chronic fatigue , weight loss and iv therapy",
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

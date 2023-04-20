import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar/Navbar";
import CookieBanner from "@/components/cookiebanner";
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

export const metadata: Metadata = {
 title: {
  default: "THE VEGAS CLINIC",
  template: "%s | The Vegas Clinic",
 },
 description:
  "Take charge of your health and wellness with our comprehensive medical services in Las Vegas - our expert team can help you achieve your health goals and improve your overall well-being.",
 openGraph: {
  title: "Wellness Medical Center in Las Vegas",
  description:
   "Take charge of your health and wellness with our comprehensive medical services in Las Vegas - our expert team can help you achieve your health goals and improve your overall well-being.",
  url: "https://vegasclinic.com",
  siteName: "The Vegas Clinic",
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

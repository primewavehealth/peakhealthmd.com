import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";

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

const inter = Inter({
 variable: "--font-inter",
 display: "swap",
 weight: ["400", "700"],
 subsets: ["latin"],
});
const open_Sans = Open_Sans({
 variable: "--font-open_Sans",
 display: "swap",
 weight: ["400", "600", "500", "700"],
 subsets: ["latin"],
});

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html className={`${inter.variable} ${open_Sans.variable}`} lang="en">
   <head />
   <body>
    <Navbar />
    {children}
    <Footer />
   </body>
  </html>
 );
}

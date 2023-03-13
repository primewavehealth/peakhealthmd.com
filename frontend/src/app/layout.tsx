import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: {
  default: "PeakHealth",
  template: "%s | PeakHealth",
 },
};

const inter = Inter({
 variable: "--font-inter",
 display: "swap",
 weight: ["400", "700"],
});
const open_Sans = Open_Sans({
 variable: "--font-open_Sans",
 display: "swap",
 weight: ["400", "600", "500", "700"],
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

import { Inter, Poppins } from "next/font/google";
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
const poppins = Poppins({
 variable: "--font-poppins",
 display: "swap",
 weight: ["400", "700"],
});

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html className={`${inter.variable} ${poppins.variable}`} lang="en">
   <head />
   <body>
    <Navbar />
    {children}
    <Footer />
   </body>
  </html>
 );
}

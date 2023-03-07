import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "PeakHealth",
 description: "Mens Health Specialists in Las Vegas, Nevada",
};

const inter = Inter({
 variable: "--inter-font",
});

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html className={`${inter.variable}`} lang="en">
   <head />

   <body>
    <Navbar />
    {children}
    <Footer />
   </body>
  </html>
 );
}

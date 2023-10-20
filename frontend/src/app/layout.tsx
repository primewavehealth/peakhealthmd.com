import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar";
import ToasterProvider from "@/lib/ToastProvider";
import "@/styles/globals.css";
import { SiteConfig } from "@/typings/types";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
/* 
const GTM_ID = "GTM-NFW6JJZC"; */

const GTM_ID = "GTM-PLFT32N8";

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
   {/*  <Suspense fallback={<Loading />}> */}
   <Script id="google-tag-manager" strategy="lazyOnload">
    {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
   </Script>
   {/* </Suspense> */}
   <body className="flex flex-col antialiased">
    <main className="flex flex-col flex-auto min-w-0">
     <ToasterProvider />
     <Topbar />
     <Navbar />
     {children}
     <Footer />
    </main>
    <noscript
     dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
     }}
    />
   </body>
  </html>
 );
}

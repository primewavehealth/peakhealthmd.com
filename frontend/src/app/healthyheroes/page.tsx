import HeroesSection from "@/components/HeroesSection";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
 robots: {
  index: false,
  follow: false,
  nocache: false,
  googleBot: {
   index: false,
   follow: false,
  },
 },
};

function page() {
 return (
  <div className="">
   <section className="h-fit">
    <Image
     alt="healthy-hero"
     src="/images/healthyhero.png"
     className="w-full h-full"
     width={1200}
     height={628}
     quality={100}
    />
   </section>
   <HeroesSection />
  </div>
 );
}

export default page;

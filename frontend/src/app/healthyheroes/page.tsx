import HeroesSection from "@/components/HeroesSection";
import Image from "next/image";

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

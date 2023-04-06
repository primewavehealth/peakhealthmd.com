import Button from "@/components/UI/Button";
import { PageBannerInterface } from "@/typings/types";
import Image, { StaticImageData } from "next/image";

export interface imageProps {
 src: string | StaticImageData;
 height: number;
 width: number;
 alt: string;
}

const PageBanner = (allprops: PageBannerInterface & imageProps) => {
 const { body, heading, subheading, src, height, width, alt, btn } = allprops;
 return (
  <header className="bg-gradient-to-b from-blue-50 to-sky-400">
   <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-6 lg:py-8 lg:px-8 ">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
     <div className="hidden h-64 overflow-hidden rounded-lg lg:flex sm:h-80 lg:order-last lg:h-full">
      <Image
       src={src}
       className="object-contain w-full h-full "
       height={height}
       width={width}
       alt={alt}
      />
     </div>

     <div className="flex flex-col px-6 space-y-6 lg-px-0 lg:py-24">
      <h1 className="text-3xl font-bold sm:text-4xl">{heading}</h1>
      {subheading && <h3 className="">{subheading}</h3>}
      <p className="mt-4 text-justify">{body}</p>
      <Button text={btn.text} icon={btn.icon} link={btn.link} href={btn.href} />
     </div>
    </div>
   </div>
  </header>
 );
};
export default PageBanner;

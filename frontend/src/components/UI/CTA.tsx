import Button from "@/components/UI/Button";
import { CTAConfig } from "@/typings/types";
import Image, { StaticImageData } from "next/image";

export interface imageProps {
 src: string | StaticImageData;
 alt: string;
}

function CTA(allprops: CTAConfig & imageProps) {
 const { body, heading, subheading, src, alt, btn } = allprops;
 return (
  <div className="bg-gradient-to-t from-blue-100 to-blue-50">
   <div className="flex flex-col justify-between max-w-screen-xl py-8 mx-auto lg:flex-row">
    <div className="flex flex-col px-8 py-12 mx-auto lg:w-2/3 text-start lg:py-8 ">
     <h2 className="text-2xl font-extrabold text-black sm:text-3xl">
      <span className="block">{heading}</span>
     </h2>
     {subheading && <h3 className="pt-2 text-xl">{subheading}</h3>}
     <p className="mt-4 text-lg text-justify text-gray-600">{body}</p>

     <Button text={btn.text} icon={btn.icon} link={btn.link} href={btn.href} />
    </div>
    <div className="object-contain p-4 mx-auto w-[350px] h-[350px] md:w-[400px] md:h-[400px]">
     <Image
      src={src}
      className="object-contain w-full h-full "
      height={300}
      width={300}
      alt={alt}
     />
    </div>
   </div>
  </div>
 );
}

export default CTA;

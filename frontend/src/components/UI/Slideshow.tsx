"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

interface SlideshowProps {
  folder: string;        // Folder inside /public/images
  count: number;         // Number of images (e.g. 11)
  title?: string;        // Optional heading above carousel
  altPrefix?: string;    // Optional alt tag prefix
}

export default function Slideshow({
  folder,
  count,
  title = "Clinic Moments",
  altPrefix = "Photo",
}: SlideshowProps) {
  const slideshowImages = Array.from({ length: count }, (_, i) => ({
    src: `/images/${folder}/${i + 1}.jpg`,
    alt: `${altPrefix} ${i + 1}`,
  }));

  return (
    <div className="w-full">
      {title && (
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
          {title}
        </h2>
      )}

      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={800}
          emulateTouch
        >
          {slideshowImages.map((img, index) => (
            <div key={index} className="relative h-[400px] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

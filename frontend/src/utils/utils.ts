import Image from "@/interfaces/Image";

export function classNames(...classes: string[]) {
 return classes.filter(Boolean).join(" ");
}

export function getImage(image: Image | undefined) {
 if (image) {
  return "http://localhost:1337" + image?.attributes?.url;
 } else {
  return (
   "https://api.multiavatar.com/Binx%20Bond" +
   String(new Date().getTime()) +
   ".png"
  );
 }
}

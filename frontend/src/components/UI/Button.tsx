import { ButtonInterface } from "@/typings/types";
import clsx from "clsx";
import Link from "next/link";

const Button = ({
 size = "regular",
 variant = "regular",
 type = "button",
 href,
 link,
 icon,
 text,
 ...props
}: ButtonInterface) => {
 return (
  <Link href={href} target="_blank" passHref>
   <button
    className={clsx(
     "inline-flex items-center h-fit w-[250px] rounded-sm hover:scale-110 text-sm font-bold transition-all mt-4",
     "disabled:cursor-not-allowed disabled:opacity-50",
     size === "large" && "px-5 py-3 text-base",
     size === "regular" && "px-6 py-4 text-lg",
     size === "small" && "px-2 py-2",
     variant === "regular" &&
      "bg-blue-600 text-white hover:bg-brand-dark disabled:hover:bg-brand",
     variant === "outline" &&
      "border border-brand text-brand hover:border-brand-dark hover:bg-brand-light disabled:border-brand disabled:bg-transparent",
     variant === "ghost" &&
      "text-brand hover:bg-brand-light disabled:hover:bg-transparent",
     variant === "link" && "text-brand hover:underline disabled:no-underline",
     variant === "white" && "text-blue-600 bg-white"
    )}
    id="text"
    {...props}
   >
    {text}
    <span className="w-4 h-4 ml-auto">{icon}</span>
   </button>
  </Link>
 );
};

export default Button;

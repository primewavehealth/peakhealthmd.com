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
  <Link href={href} /* target="_blank" */ passHref>
   <button
    className={clsx(
     "active:scale-95 inline-flex items-center justify-center mt-4 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900",
     size === "large" && "px-5 py-3 text-base",
     size === "regular" && "px-6 py-3 text-base",
     size === "small" && "px-2 py-2",
     variant === "regular" &&
      "inline-flex items-center justify-center gap-2  text-blue-900 bg-yellow-400 rounded-full hover:text-white hover:bg-blue-900",
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

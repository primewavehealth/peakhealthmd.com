import { type ButtonHTMLAttributes } from "react";

type buttonVariant = "regular" | "outline" | "ghost" | "link";
type buttonSize = "regular" | "large" | "small";

export interface ButtonInterface
 extends ButtonHTMLAttributes<HTMLButtonElement> {
 size?: buttonSize;
 variant?: buttonVariant;
 icon?: JSX.Element;
 link?: JSX.Element;
 text: string;
 href: string;
 //  children: ReactNode;
 type?: "submit" | "reset" | "button";
}

export interface PageBannerInterface {
 image?: string;
 heading: string;
 subheading?: string;
 body: string;
 btn: ButtonInterface;
}

import { type ButtonHTMLAttributes } from "react";

type buttonVariant = "regular" | "outline" | "ghost" | "link" | "white";
type buttonSize = "regular" | "large" | "small";

export interface ButtonInterface
 extends ButtonHTMLAttributes<HTMLButtonElement> {
 size?: buttonSize;
 variant?: buttonVariant;
 icon?: JSX.Element;
 link?: JSX.Element;
 text?: string;
 id?: string;
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

export type BlogPost = {
 id: string;
 title: string;
 date: string;
 description: string;
 image: string;
 category: string;
};

export interface CTAConfig {
 image?: string;
 heading: string;
 subheading?: string;
 body: string;
 btn: ButtonInterface;
}

export type SiteConfig = {
 name: string;
 description: string;
 url: string;
 links: {
  twitter: string;
  facebook: string;
  instagram: string;
 };
};

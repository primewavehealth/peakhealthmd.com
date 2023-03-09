"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
 const [open, setOpen] = useState(false);
 return (
  <nav className="bg-white">
   <div className="flex items-center justify-around font-medium">
    <div className="z-50 flex justify-between w-full p-5 md:w-auto">
     {/* <Image
      src={Logo}
      alt="logo"
      className="md:cursor-pointer h-9"
      width={90}
      height={90}
     /> */}
     <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
      {open ? (
       <XMarkIcon className="w-6 h-6 text-gray-700" />
      ) : (
       <Bars3Icon className="w-6 h-6 text-gray-700" />
      )}
     </div>
    </div>
    <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
     <li>
      <Link href="/" className="inline-block px-3 py-7">
       Home
      </Link>
      <Link href="/" className="inline-block px-3 py-7">
       Find A Provider
      </Link>

      <Link href="/" className="inline-block px-3 py-7">
       TeleHealth
      </Link>
     </li>
     <NavLinks />
    </ul>
    <div className="hidden md:block">
     <Button />
    </div>
    {/* Mobile nav */}
    <ul
     className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 z-40
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
    >
     <li>
      <Link href="/" className="inline-block px-3 py-7">
       Home
      </Link>
      <Link href="/" className="inline-block px-3 py-7">
       Find A Provider
      </Link>
      <Link href="/" className="inline-block px-3 py-7">
       TeleHealth
      </Link>
     </li>
     <NavLinks />
     <div className="py-5">
      <Button />
     </div>
    </ul>
   </div>
  </nav>
 );
};

export default Navbar;

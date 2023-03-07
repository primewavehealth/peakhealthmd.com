"use client";
import { links } from "@/components/Navbar/Links";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
 const [heading, setHeading] = useState("");
 const [subHeading, setSubHeading] = useState("");
 return (
  <>
   {links.map((link) => (
    <div>
     <div className="px-3 text-left md:cursor-pointer group">
      <h1
       className="flex items-center justify-between pr-5 py-7 md:pr-0 group"
       onClick={() => {
        heading !== link.name ? setHeading(link.name) : setHeading("");
        setSubHeading("");
       }}
      >
       {link.name}
       <span className="inline text-xl md:hidden">
        {heading === link.name ? (
         <ChevronUpIcon className="w-6 h-6 text-gray-500" />
        ) : (
         <ChevronDownIcon className="w-6 h-6 text-gray-500" />
        )}
       </span>
       <span className="hidden text-xl md:mt-1 md:ml-2 md:block group-hover:rotate-180 group-hover:-mt-2">
        <ChevronDownIcon className="w-6 h-6 text-gray-500" />
       </span>
      </h1>
      {link.submenu && (
       <div>
        <div className="absolute z-40 hidden top-20 group-hover:md:block hover:md:block">
         <div className="py-3">
          <div className="absolute w-4 h-4 mt-1 rotate-45 bg-white left-3"></div>
         </div>
         <div className="grid grid-cols-1 gap-10 p-5 bg-white">
          {link.sublinks.map((mysublinks) => (
           <div>
            <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
            {mysublinks.sublink.map((slink) => (
             <li className="text-sm text-gray-600 my-2.5">
              <Link href={slink.link} className="hover:text-primary">
               {slink.name}
              </Link>
             </li>
            ))}
           </div>
          ))}
         </div>
        </div>
       </div>
      )}
     </div>
     {/* Mobile menus */}
     <div
      className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
     >
      {/* sublinks */}
      {link.sublinks.map((slinks) => (
       <div>
        <div>
         <h1
          onClick={() =>
           subHeading !== slinks.Head
            ? setSubHeading(slinks.Head)
            : setSubHeading("")
          }
          className="flex items-center justify-between py-4 pr-5 font-semibold pl-7 md:pr-0"
         >
          {slinks.Head}

          <span className="inline text-xl md:mt-1 md:ml-2">
           {heading === link.name ? (
            <ChevronUpIcon className="w-6 h-6 text-gray-500" />
           ) : (
            <ChevronDownIcon className="w-6 h-6 text-gray-500" />
           )}
          </span>
         </h1>
         <div
          className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}
         >
          {slinks.sublink.map((slink) => (
           <li className="py-3 pl-14">
            <Link href={slink.link}>{slink.name}</Link>
           </li>
          ))}
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   ))}
  </>
 );
};

export default NavLinks;

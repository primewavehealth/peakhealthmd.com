"use client";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
 Bars3Icon,
 ChevronDownIcon,
 PhoneIcon,
 PlayCircleIcon,
 XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Mens_Health, Pain_Conditions, Wellness } from "./Links";

const callsToAction = [
 {
  name: "Find A Specialist",
  href: "/appointment",
  icon: PlayCircleIcon,
 },
 { name: "Contact Us", href: "/contact", icon: PhoneIcon },
];

function classNames(...classes) {
 return classes.filter(Boolean).join(" ");
}

export default function Example() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 return (
  <header className="bg-blue-50">
   <nav
    className="flex items-center justify-between p-2 mx-auto max-w-8xl lg:px-4"
    aria-label="Global"
   >
    <div className="flex lg:flex-1">
     <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Prime Wave</span>
      <Image
       className=""
       src="/images/logo.png"
       alt="logo"
       width={140}
       height={145}
       quality={100}
      />
     </Link>
    </div>
    <div className="flex lg:hidden">
     <button
      type="button"
      id="navigation"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={() => setMobileMenuOpen(true)}
     >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="w-12 h-12 font-bold" aria-hidden="true" />
     </button>
    </div>

    <Popover.Group className="hidden lg:flex lg:gap-x-12">
     <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none gap-x-1">
       Pain Conditions
       <ChevronDownIcon
        className="flex-none w-5 h-5 text-gray-400"
        aria-hidden="true"
       />
      </Popover.Button>

      <Transition
       as={Fragment}
       enter="transition ease-out duration-200"
       enterFrom="opacity-0 translate-y-1"
       enterTo="opacity-100 translate-y-0"
       leave="transition ease-in duration-150"
       leaveFrom="opacity-100 translate-y-0"
       leaveTo="opacity-0 translate-y-1"
      >
       <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
        <div className="p-4">
         {Pain_Conditions.map((item) => (
          <div
           key={item.name}
           className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
          >
           <div className="flex-auto">
            <Link
             href={item.href}
             className="block font-semibold text-gray-900"
            >
             {item.name}
             <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{item.description}</p>
           </div>
          </div>
         ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
         {callsToAction.map((item) => (
          <Link
           key={item.name}
           href={item.href}
           className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           <item.icon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
           />
           {item.name}
          </Link>
         ))}
        </div>
       </Popover.Panel>
      </Transition>
     </Popover>

     <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none gap-x-1">
       Mens Health
       <ChevronDownIcon
        className="flex-none w-5 h-5 text-gray-400"
        aria-hidden="true"
       />
      </Popover.Button>

      <Transition
       as={Fragment}
       enter="transition ease-out duration-200"
       enterFrom="opacity-0 translate-y-1"
       enterTo="opacity-100 translate-y-0"
       leave="transition ease-in duration-150"
       leaveFrom="opacity-100 translate-y-0"
       leaveTo="opacity-0 translate-y-1"
      >
       <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
        <div className="p-4">
         {Mens_Health.map((item) => (
          <div
           key={item.name}
           className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
          >
           <div className="flex-auto">
            <Link
             href={item.href}
             className="block font-semibold text-gray-900"
            >
             {item.name}
             <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{item.description}</p>
           </div>
          </div>
         ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
         {callsToAction.map((item) => (
          <Link
           key={item.name}
           href={item.href}
           className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           <item.icon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
           />
           {item.name}
          </Link>
         ))}
        </div>
       </Popover.Panel>
      </Transition>
     </Popover>

     {/* <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none gap-x-1">
       Aesthetics
       <ChevronDownIcon
        className="flex-none w-5 h-5 text-gray-400"
        aria-hidden="true"
       />
      </Popover.Button>

      <Transition
       as={Fragment}
       enter="transition ease-out duration-200"
       enterFrom="opacity-0 translate-y-1"
       enterTo="opacity-100 translate-y-0"
       leave="transition ease-in duration-150"
       leaveFrom="opacity-100 translate-y-0"
       leaveTo="opacity-0 translate-y-1"
      >
       <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
        <div className="p-4">
         {Aesthetics.map((item) => (
          <div
           key={item.name}
           className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
          >
           <div className="flex-auto">
            <Link
             href={item.href}
             className="block font-semibold text-gray-900"
            >
             {item.name}
             <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{item.description}</p>
           </div>
          </div>
         ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
         {callsToAction.map((item) => (
          <Link
           key={item.name}
           href={item.href}
           className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           <item.icon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
           />
           {item.name}
          </Link>
         ))}
        </div>
       </Popover.Panel>
      </Transition>
                 </Popover> */}

     <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 outline-none gap-x-1">
       Wellness
       <ChevronDownIcon
        className="flex-none w-5 h-5 text-gray-400"
        aria-hidden="true"
       />
      </Popover.Button>

      <Transition
       as={Fragment}
       enter="transition ease-out duration-200"
       enterFrom="opacity-0 translate-y-1"
       enterTo="opacity-100 translate-y-0"
       leave="transition ease-in duration-150"
       leaveFrom="opacity-100 translate-y-0"
       leaveTo="opacity-0 translate-y-1"
      >
       <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
        <div className="p-4">
         {Wellness.map((item) => (
          <div
           key={item.name}
           className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
          >
           <div className="flex-auto">
            <Link
             href={item.href}
             className="block font-semibold text-gray-900"
            >
             {item.name}
             <span className="absolute inset-0" />
            </Link>
            <p className="mt-1 text-gray-600">{item.description}</p>
           </div>
          </div>
         ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
         {callsToAction.map((item) => (
          <Link
           key={item.name}
           href={item.href}
           className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           <item.icon
            className="flex-none w-5 h-5 text-gray-400"
            aria-hidden="true"
           />
           {item.name}
          </Link>
         ))}
        </div>
       </Popover.Panel>
      </Transition>
     </Popover>
     <Link
      href="/shockwave-therapy-las-vegas"
      className="text-sm font-semibold leading-6 text-gray-900"
     >
      Shockwave Therapy
     </Link>
     <Link
      href="/about-primewave"
      className="text-sm font-semibold leading-6 text-gray-900"
     >
      About
     </Link>

     <Link
      href="/franchise"
      className="pr-4 text-sm font-semibold leading-6 text-gray-900"
     >
      Franchise
     </Link>
     <Link
      href="/blog"
      className="pr-4 text-sm font-semibold leading-6 text-gray-900"
     >
      Blog
     </Link>
    </Popover.Group>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
     <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-2 px-8 py-3 font-bold text-blue-900 bg-yellow-400 rounded-full hover:text-white hover:bg-blue-900"
     >
      <span>Contact</span>
      <svg
       width="15"
       height="15"
       viewBox="0 0 15 15"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
       ></path>
      </svg>
     </Link>
    </div>
   </nav>
   <Dialog
    as="div"
    className="lg:hidden"
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
   >
    <div className="fixed inset-0 z-10" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
     <div className="flex items-center justify-between">
      <Link href="#" className="-m-1.5 p-1.5">
       <span className="sr-only"></span>
       <Image
        className=""
        src="/images/logo.png"
        alt="logo"
        width={140}
        height={145}
        quality={100}
       />
      </Link>
      <button
       id="navigate"
       type="button"
       className="-m-2.5 rounded-md p-2.5 text-gray-700"
       onClick={() => setMobileMenuOpen(false)}
      >
       <span className="sr-only">Close menu</span>
       <XMarkIcon className="w-12 h-12 font-bold" aria-hidden="true" />
      </button>
     </div>
     <div className="flow-root mt-6">
      <div className="-my-6 divide-y divide-gray-500/10">
       <div className="py-6 space-y-2">
        <Disclosure as="div" className="-mx-3">
         {({ open }) => (
          <>
           <Disclosure.Button className=" outline-none flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            Pain Conditions
            <ChevronDownIcon
             className={classNames(
              open ? "rotate-180" : "",
              "h-5 w-5 flex-none"
             )}
             aria-hidden="true"
            />
           </Disclosure.Button>
           <Disclosure.Panel className="mt-2 space-y-2">
            {[...Pain_Conditions, ...callsToAction].map((item) => (
             <Disclosure.Button
              key={item.name}
              as={item.href}
              href={item.href}
              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
             >
              {item.name}
             </Disclosure.Button>
            ))}
           </Disclosure.Panel>
          </>
         )}
        </Disclosure>
        <Disclosure as="div" className="-mx-3">
         {({ open }) => (
          <>
           <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            Mens Health
            <ChevronDownIcon
             className={classNames(
              open ? "rotate-180" : "",
              "h-5 w-5 flex-none"
             )}
             aria-hidden="true"
            />
           </Disclosure.Button>
           <Disclosure.Panel className="mt-2 space-y-2">
            {[...Mens_Health, ...callsToAction].map((item) => (
             <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
             >
              {item.name}
             </Disclosure.Button>
            ))}
           </Disclosure.Panel>
          </>
         )}
        </Disclosure>

        {/* <Disclosure as="div" className="-mx-3">
         {({ open }) => (
          <>
           <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            Aesthetics
            <ChevronDownIcon
             className={classNames(
              open ? "rotate-180" : "",
              "h-5 w-5 flex-none"
             )}
             aria-hidden="true"
            />
           </Disclosure.Button>
           <Disclosure.Panel className="mt-2 space-y-2">
            {[...Aesthetics, ...callsToAction].map((item) => (
             <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
             >
              {item.name}
             </Disclosure.Button>
            ))}
           </Disclosure.Panel>
          </>
         )}
                             </Disclosure> */}

        <Disclosure as="div" className="-mx-3">
         {({ open }) => (
          <>
           <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            Wellness
            <ChevronDownIcon
             className={classNames(
              open ? "rotate-180" : "",
              "h-5 w-5 flex-none"
             )}
             aria-hidden="true"
            />
           </Disclosure.Button>
           <Disclosure.Panel className="mt-2 space-y-2">
            {[...Wellness, ...callsToAction].map((item) => (
             <Disclosure.Button
              key={item.name}
              as={item.href}
              href={item.href}
              className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
             >
              {item.name}
             </Disclosure.Button>
            ))}
           </Disclosure.Panel>
          </>
         )}
        </Disclosure>

        {/* <Link
         href="/healthyheroes"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         Healthy Heroes
        </Link> */}
        <Link
         href="/shockwave-therapy-las-vegas"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         Shockwave Therapy
        </Link>
        <Link
         href="/about-primewave"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         About
        </Link>
        <Link
         href="/franchise"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         Franchise
        </Link>
        <Link
         href="/blog"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         Blog
        </Link>
        <Link
         href="/contact"
         className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
        >
         Contact Us
        </Link>
       </div>
      </div>
     </div>
    </Dialog.Panel>
   </Dialog>
  </header>
 );
}

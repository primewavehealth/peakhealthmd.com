import Link from "next/link";

function Header() {
 return (
  <header aria-label="Site Header" className="bg-white">
   <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
     <div className="md:flex md:items-center md:gap-12">
      <Link className="block text-teal-600" href="/">
       <span className="sr-only">Home</span>
      </Link>
      {/* logo */}
     </div>

     <div className="hidden md:block">
      <nav aria-label="Site Nav">
       <ul className="flex items-center gap-6 text-sm">
        <Link
         className="font-medium text-gray-900 transition text-large hover:text-gray-500/75"
         href="/"
        >
         Home
        </Link>
        <Link
         className="font-medium text-gray-900 transition text-large hover:text-gray-500/75"
         href="/"
        >
         About
        </Link>

        <Link
         className="font-medium text-gray-800 transition text-large hover:text-gray-500/75"
         href="/"
        >
         Team
        </Link>

        <Link
         className="font-medium text-gray-900 transition text-large hover:text-gray-500/75"
         href="/"
        >
         Services
        </Link>
        <Link
         className="font-medium text-gray-900 transition text-large hover:text-gray-500/75"
         href="/"
        >
         Blog
        </Link>
       </ul>
      </nav>
     </div>

     <div className="flex items-center gap-4">
      <div className="sm:flex sm:gap-4">
       <Link
        className=" text-large font-medium rounded-md bg-blue-600 px-5 py-2.5  text-white shadow"
        href="/"
       >
        (702)-625-4334
       </Link>

       <div className="hidden sm:flex">
        <Link
         className="rounded-md bg-gray-100 px-5 py-2.5 text-large font-medium text-blue-600"
         href="/"
        >
         Contact
        </Link>
       </div>
      </div>

      <div className="block md:hidden">
       <button
        id="nav"
        className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
       >
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-5 h-5"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="2"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
         />
        </svg>
       </button>
      </div>
     </div>
    </div>
   </div>
  </header>
 );
}

export default Header;

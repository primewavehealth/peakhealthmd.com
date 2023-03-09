import Link from "next/link";

const Button = () => {
 return (
  <Link passHref href="/contact">
   <button className="px-4 py-4 font-bold text-white bg-blue-500 rounded-full">
    (702)-625-4334
   </button>
  </Link>
 );
};

export default Button;
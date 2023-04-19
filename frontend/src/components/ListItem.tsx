import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import Link from "next/link";

type Props = {
 post: BlogPost;
};

export default function ListItem({ post }: Props) {
 const { id, title, date, description, image, category } = post;
 const formattedDate = getFormattedDate(date);

 return (
  <li className="p-4 md:w-1/2">
   <div className="h-full overflow-hidden rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50">
    <Image
     className="object-cover object-center w-full transition-all scale-110 lg:h-48 md:h-36 duration-400 hover:scale-100"
     src={image}
     width={300}
     height={300}
     alt="blog"
    />
    <div className="p-6">
     <div className="flex justify-between">
      <span className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
       {formattedDate}
      </span>
      <span className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
       {category}
      </span>
     </div>

     <h1 className="pt-1 mb-3 text-lg font-bold text-gray-700">{title}</h1>
     <p className="mb-3 leading-relaxed text-justify">{description}</p>
     <div className="flex flex-wrap items-center ">
      <Link
       href={`/blog/${id}`}
       className="px-4 py-2 text-white align-bottom bg-blue-500 rounded-lg hover:scale-105 drop-shadow-md shadow-cla-blue"
      >
       Learn more
      </Link>
     </div>
    </div>
   </div>
  </li>
 );
}

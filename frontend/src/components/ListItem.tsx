import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
 post: BlogPost;
};

export default function ListItem({ post }: Props) {
 const { id, title, date } = post;
 const formattedDate = getFormattedDate(date);

 return (
  <li className="py-12 mt-4 space-x-4 text-lg lg:flex dark:text-white/90">
   <Link
    className="underline hover:text-black/70 dark:hover:text-white"
    href={`/blog/${id}`}
   >
    {title}
   </Link>

   <p className="mt-1 text-sm">{formattedDate}</p>
  </li>
 );
}

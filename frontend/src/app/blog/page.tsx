import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/utils";

export const metadata = {
 title: "Blog",
 desription: "Primewave Pain Management Blog",
};

export default async function BlogPage() {
 const posts = allBlogs.sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date));
 });

 return (
  <div className="container max-w-4xl py-6 lg:py-10">
   <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
    <div className="flex-1 space-y-4">
     <h1 className="inline-block text-4xl tracking-tight font-heading lg:text-5xl">
      Blog
     </h1>
     <p className="text-xl text-muted-foreground">Our latest blog posts.</p>
    </div>
   </div>
   <hr className="my-8" />
   {posts?.length ? (
    <div className="grid gap-10 sm:grid-cols-2">
     {posts.map((post, index) => (
      <article
       key={post._id}
       className="relative flex flex-col space-y-2 group"
      >
       {post.image && (
        <Image
         src={post.image}
         alt={post.title}
         width={804}
         height={452}
         className="transition-colors border rounded-md bg-muted"
         priority={index <= 1}
        />
       )}
       <div className="flex justify-between px-2">
        {" "}
        <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
        <p className="text-sm text-muted-foreground">{post.categories}</p>
       </div>
       <h2 className="text-2xl font-extrabold">{post.title}</h2>
       {post.description && (
        <p className="text-muted-foreground">{post.description}</p>
       )}

       <Link href={`/blog/${post.slug}`} className="absolute inset-0">
        <span className="sr-only">View Article</span>
       </Link>
      </article>
     ))}
    </div>
   ) : (
    <p>No posts published.</p>
   )}
  </div>
 );
}

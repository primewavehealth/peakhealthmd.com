import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/mdx-components";

import { buttonVariants } from "@/components/UI/buttons";
import { cn, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/* interface PostPageProps {
 params: {
  slug: string;
 };
} */

export async function generateStaticParams() {
 return allBlogs.map((post) => ({
  slug: post.slug,
 }));
}

export async function generateMetadata({
 params,
}: any): Promise<Metadata | undefined> {
 const post = allBlogs.find((post) => post.slug === params.slug);
 if (!post) {
  return;
 }

 const { title, date: publishedTime, description, image, slug } = post;
 const ogImage = image
  ? `https://primewavehealth.com/images/${image}`
  : "https://primewavehealth.com/images/logo/png";

 return {
  title,
  description,
  openGraph: {
   title,
   description,
   type: "article",
   publishedTime,
   url: `https://primewavehealth.com/blog/${slug}`,
   images: [
    {
     url: ogImage,
    },
   ],
  },
  twitter: {
   card: "summary_large_image",
   title,
   description,
   images: [ogImage],
  },
 };
}

export default async function Blog({ params }: any) {
 const post = allBlogs.find((post) => post.slug === params.slug);

 if (!post) {
  notFound();
 }

 /* const authors = post.authors.map((author: any) =>
  allAuthors.find(({ slug }) => slug === `/authors/${author}`)
 ); */

 return (
  <article className="container relative max-w-3xl py-6 lg:py-10">
   <script type="application/ld+json">
    {JSON.stringify(post.structuredData)}
   </script>
   <Link
    href="/blog"
    className={cn(
     buttonVariants({ variant: "ghost" }),
     "absolute left-[-200px] top-14 hidden xl:inline-flex"
    )}
   >
    <ArrowLeftIcon className="w-4 h-4 mr-2" />
    See all posts
   </Link>
   <div>
    {post.date && (
     <time dateTime={post.date} className="block text-sm text-muted-foreground">
      Published on {formatDate(post.date)}
     </time>
    )}
    <h1 className="inline-block mt-2 text-4xl leading-tight font-heading lg:text-5xl">
     {post.title}
    </h1>

    <p className="pt-2 font-medium">{post.categories}</p>

    {/* {authors?.length ? (
     <div className="flex mt-4 space-x-4">
      {authors.map((author: any) =>
       author ? (
        <Link
         key={author._id}
         href={`https://twitter.com/${author.twitter}`}
         className="flex items-center space-x-2 text-sm"
        >
         <Image
          src={author.avatar}
          alt={author.title}
          width={42}
          height={42}
          className="bg-white rounded-full"
         />
         <div className="flex-1 leading-tight text-left">
          <p className="font-medium">{author.title}</p>
          <p className="text-[12px] text-muted-foreground">@{author.twitter}</p>
         </div>
        </Link>
       ) : null
      )}
     </div>
    ) : null} */}
   </div>
   {post.image && (
    <Image
     src={post.image}
     alt={post.title}
     width={720}
     height={405}
     className="my-8 transition-colors border rounded-md bg-muted"
     priority
    />
   )}
   <Mdx code={post.body.code} />
   <hr className="mt-12" />
   <div className="flex justify-center py-6 lg:py-10">
    <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
     <ArrowLeftIcon className="w-4 h-4 mr-2" />
     See all posts
    </Link>
   </div>
  </article>
 );
}

"use client";

import ScrollToTop from "@/components/ScrollToTop";
import SocialShare from "@/components/SocialShare";
import TableOfContents from "@/components/Table-of-Content";
import { buttonVariants } from "@/components/UI/buttons";
import { Mdx } from "@/components/mdx-components";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Blog } from "contentlayer/generated";
import Link from "next/link";
import Script from "next/script";
import RelatedArticles from "./RelatedArticles";

function slugify(str: string): string {
 return str
  .toLowerCase()
  .replace(/[^a-z0-9 -]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");
}

function toLocaleDateString(date: string): string {
 return new Date(date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
 });
}

export default function ArticlePage({
 article,
 previousArticle,
 nextArticle,
 relatedArticles,
}: {
 article: Blog;
 previousArticle?: Blog;
 nextArticle?: Blog;
 relatedArticles?: Blog[];
}): JSX.Element {
 return (
  <section className="xl:relative">
   <Script type="application/ld+json" suppressHydrationWarning>
    {JSON.stringify(article.structuredData)}
   </Script>

   <div className="max-w-3xl mx-auto">
    <article className="lg:ml-28">
     <Link
      href="/blog"
      className={cn(
       buttonVariants({ variant: "ghost" }),
       "absolute left-[100px] top-14 hidden xl:inline-flex"
      )}
     >
      <ArrowLeftIcon className="w-4 h-4 mr-2" />
      <span className="font-bold text-md">See all posts</span>
     </Link>
     <div className="absolute left-[100px] top-28 hidden lg:inline-flex">
      <TableOfContents source={article.body.raw} />
     </div>
     <header className="flex flex-col">
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
       {article.title}
      </h1>

      <time
       dateTime={toLocaleDateString(article.date as string)}
       className="flex items-center order-first text-base text-zinc-400 dark:text-zinc-500"
      >
       <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
       <span className="ml-3 truncate">
        {toLocaleDateString(article.date as string)}
        {` • `}
        {article.readingTime.text}
        {` • `}
        {article.categories?.map((category, index) => (
         <Link
          href={`/blog/categories/${slugify(category.title)}`}
          key={category.title}
          className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
         >
          {category.title}
          {index < article.categories!.length - 1 ? `, ` : ``}
         </Link>
        ))}
       </span>
       <div className="pl-6">
        <SocialShare article={article} />
       </div>
      </time>
     </header>

     <div className="mt-8 prose dark:prose-invert">
      <Mdx code={article.body.code} />
     </div>

     <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3">
      <div className="flex items-center md:col-span-2">
       {article.tags?.slice(0, 3).map((tag) => (
        <Link
         href={`/blog/tags/${slugify(tag.title)}`}
         key={tag.title}
         className="inline-block py-1.5 px-3 mr-2 mb-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-gray-600 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-100 truncate"
        >
         {tag.title}
        </Link>
       ))}
      </div>

      <div className="flex items-center justify-end">
       <SocialShare article={article} />
      </div>
     </div>

     <hr className="mt-8 mb-8 border-t border-zinc-200 dark:border-zinc-700" />
     <div className="grid grid-cols-2 gap-4 my-2">
      <Link
       className="flex items-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
       href={`/blog/${previousArticle?.slug}`}
      >
       <ArrowLeftIcon className="w-5 mr-2" />
       <p className="ml-2">Previous Blog</p>
      </Link>

      <Link
       className="flex items-center justify-end text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
       href={`/blog/${nextArticle?.slug}`}
      >
       <span className="mr-2">Next Blog</span>
       <ArrowRightIcon className="w-5 ml-2" />
      </Link>
     </div>
     <hr className="mt-8 mb-8 border-t border-zinc-200 dark:border-zinc-700" />

     {/* <AuthorCard article={article} /> */}

     {relatedArticles && relatedArticles.length > 0 && (
      <RelatedArticles articles={relatedArticles} />
     )}
    </article>
    <ScrollToTop />
   </div>
  </section>
 );
}

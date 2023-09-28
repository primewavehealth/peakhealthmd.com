"use client";

import ScrollToTop from "@/components/ScrollToTop";
import SocialShare from "@/components/SocialShare";
import TableOfContents from "@/components/Table-of-Content";
import { Mdx } from "@/components/mdx-components";
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
  <section className="overflow-x-hidden xl:relative">
   <Script type="application/ld+json" suppressHydrationWarning>
    {JSON.stringify(article.structuredData)}
   </Script>

   <div className="max-w-3xl mx-auto">
    <article className="lg:ml-28">
     <Link
      className="-m-16 lg:m-0 inline-flex absolute left-[100px] items-center justify-center gap-2 px-6 py-2 lg:py-3 font-medium text-blue-900 bg-yellow-400 rounded-full hover:text-white hover:bg-blue-900"
      href="/blog"
     >
      <span>See All Blog Posts</span>{" "}
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

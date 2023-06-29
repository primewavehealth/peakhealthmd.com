import { server } from "config";
import { allBlogs, Blog, Category } from "contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "../Container";

// Get sorted articles from the contentlayer
async function getSortedArticles(): Promise<Blog[]> {
 let articles = await allBlogs;

 articles = articles.filter((article: Blog) => article);

 return articles.sort((a: Blog, b: Blog) => {
  if (a.date && b.date) {
   return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
  return 0;
 });
}

// Dynamic metadata for the page
export async function generateMetadata({
 params,
}: {
 params: { slug: string };
}): Promise<Metadata> {
 const articles = await getSortedArticles();
 // get all the unique categories
 const categories = articles.reduce((acc: any, article: Blog) => {
  article.categories.forEach((category: Category) => {
   if (!acc[category.title]) {
    acc[category.title] = 1;
   }
  });
  return acc;
 }, {});

 return {
  title: "Blog Categories",
  description:
   "This page contains all the categories of articles available on this website.",
  keywords: [...Object.keys(categories)],
  openGraph: {
   type: "website",
   title: "Blog Categories - Primewavehealth",
   description:
    "This page contains all the categories of articles available on this website.",
   url: `${server}/blog/categories`,
   siteName: "Primewavehealth - Pain Care and Wellness Clinic",
   images: [
    {
     url: `${server}/images/logo.png`,
     alt: "Primewavehealth - Pain Care and Wellness Clinic",
     width: 1200,
     height: 630,
    },
   ],
   locale: "en_US",
  },
  twitter: {
   card: "summary_large_image",
   site: "@primewavehealth",
   title: "Blog Categories - Primewavehealth",
   description:
    "This page contains all the categories of articles available on this website.",
   images: [
    {
     url: `${server}/images/logo.png`,
     alt: "Primewavehealth - Pain Care and Wellness Clinic",
     width: 1200,
     height: 630,
    },
   ],
  },
  alternates: {
   canonical: `${server}/blog/categories`,
   types: {
    "application/rss+xml": `${server}/feed.xml`,
   },
  },
 };
}

export default async function Tags(): Promise<JSX.Element> {
 const articles = await getSortedArticles();

 // Categories with number of articles
 const categories = articles.reduce((acc: any, article: Blog) => {
  article.categories.forEach((category: Category) => {
   if (acc[category.title]) {
    acc[category.title] += 1;
   } else {
    acc[category.title] = 1;
   }
  });
  return acc;
 }, {});

 return (
  <Container className="mt-12 lg:mb-48">
   <div className="flex flex-col items-start justify-start py-12 divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:items-center md:justify-center md:space-x-6 md:divide-y-0">
    <div className="pt-6 pb-8 space-x-2 text-center md:space-y-5">
     <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-center text-zinc-800 dark:text-zinc-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
      Blog Categories
     </h1>
    </div>
    <div className="flex flex-wrap max-w-lg">
     {Object.keys(categories).map((category, index) => (
      <div key={index} className="mx-auto mt-2 mb-2 lg:mr-5">
       <Link
        className="mr-3 text-sm font-medium text-blue-700 uppercase hover:text-blue-600 dark:hover:text-blue-400"
        href={`/blog/categories/${category
         .toLowerCase()
         .trim()
         .replace(/[^\w\s-]/g, "")
         .replace(/[\s_-]+/g, "-")
         .replace(/^-+|-+$/g, "")}`}
       >
        {category}
       </Link>
       <Link
        className="-ml-2 text-sm font-semibold uppercase text-zinc-500 dark:text-zinc-400"
        href={`/blog/categories/${category
         .toLowerCase()
         .trim()
         .replace(/[^\w\s-]/g, "")
         .replace(/[\s_-]+/g, "-")
         .replace(/^-+|-+$/g, "")}`}
       >
        {" "}
        ({categories[category]})
       </Link>
      </div>
     ))}
    </div>
   </div>
  </Container>
 );
}

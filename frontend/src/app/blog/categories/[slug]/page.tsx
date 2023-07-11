import SimpleLayout from "@/components/SimpleLayout";
import { server } from "config";
import { allBlogs, Blog, Category } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SearchArticles from "../../SearchArticles";

// Get sorted articles from the contentlayer
async function getSortedArticles(): Promise<Blog[]> {
 let articles = allBlogs;

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
 return {
  title: `Articles categorized as ${params.slug}`,
  description: `This page contains all the articles ${
   params?.slug ? `categorized as ${params.slug}` : ""
  } available on this website.`,
  openGraph: {
   type: "website",
   title: `Articles categorized as ${params.slug} - Primewave`,
   description: `This page contains all the articles ${
    params?.slug ? `categorized as ${params.slug}` : ""
   } available on this website.`,
   url: `${server}/blog/categories/${params.slug}`,
   siteName: "Primewave - Pain Care and Wellness Clinic in Las Vegas",
   images: [
    {
     url: `${server}/images/logo.png`,
     width: 600,
     height: 300,
     alt: `Articles categorized as ${params.slug}`,
    },
   ],
   locale: "en-US",
  },
  twitter: {
   card: "summary_large_image",
   site: "@primewavehealth",
   title: `Articles categorized as ${params.slug} - Primewavehealth`,
   description: `This page contains all the articles ${
    params?.slug ? `categorized as ${params.slug}` : ""
   } available on this website.`,
   images: [
    {
     url: `${server}/images/logo.png`,
     width: 600,
     height: 300,
     alt: `Articles categorized as ${params.slug}`,
    },
   ],
  },
  alternates: {
   canonical: `${server}/blog/categories/${params.slug}`,
   types: {
    "application/rss+xml": `${server}/feed.xml`,
   },
  },
 };
}

export default async function Articles({
 params,
 searchParams,
}: {
 params?: { slug: string };
 searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> {
 let articles = await getSortedArticles();
 const page = searchParams?.page ? parseInt(searchParams.page as string) : 1;

 // Filter articles by category title
 if (params?.slug) {
  articles = articles.filter((article: Blog) =>
   article.categories!.some(
    (category) =>
     category.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "") === params.slug
   )
  );
 }

 if (!articles || articles.length === 0) {
  return notFound();
 }

 // Find category title from slug

 const catTitle = articles[0]?.categories!.find(
  (category: Category) =>
   category.title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "") === params?.slug
 )?.title;

 return (
  <SimpleLayout title={params?.slug ? `Articles in ${catTitle}` : "Articles"}>
   <SearchArticles articles={articles} page={page} />
  </SimpleLayout>
 );
}

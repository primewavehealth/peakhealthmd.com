import SearchArticles from "@/app/blog/SearchArticles";
import SimpleLayout from "@/components/SimpleLayout";
import { server } from "config";
import { allBlogs, Blog, Tag } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Get sorted articles from the contentlayer
async function getSortedArticles(): Promise<Blog[]> {
 let articles = await allBlogs;

 articles = articles.filter((article: Blog) => article.status === "published");

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
  title: `Articles tagged with ${params.slug}`,
  description: `This page contains all the articles ${
   params?.slug ? `tagged with ${params.slug}` : ""
  } available on this website.`,
  openGraph: {
   type: "website",
   title: `Articles tagged with ${params.slug} - Primewave Health`,
   description: `This page contains all the articles ${
    params?.slug ? `tagged with ${params.slug}` : ""
   } available on this website.`,
   url: `${server}/blog/tags/${params.slug}`,
   siteName: "Primewave Health - Las Vegas Pain Care and Wellness Clinic",
   images: [
    {
     url: `${server}/images/logo.png`,
     width: 600,
     height: 300,
     alt: `Articles tagged with ${params.slug}`,
    },
   ],
  },
  twitter: {
   card: "summary_large_image",
   site: "@primewavehealth",
   creator: "@primewavehealth",
   title: `Articles tagged with ${params.slug} - Primewave Health`,
   description: `This page contains all the articles ${
    params?.slug ? `tagged with ${params.slug}` : ""
   } available on this website.`,
   images: [
    {
     url: `${server}/images/logo.png`,
     width: 600,
     height: 300,
     alt: `Articles tagged with ${params.slug}`,
    },
   ],
  },
  alternates: {
   canonical: `${server}/blog/tags/${params.slug}`,
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

 // Filter articles by tag title
 if (params?.slug) {
  articles = articles.filter((article: Blog) =>
   article.tags?.some(
    (tag: Tag) =>
     tag.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "") === params.slug
   )
  );
 }

 if (articles.length === 0) return notFound();

 // Find tag title from slug
 const tagTitle = articles[0]?.tags?.find(
  (tag: Tag) =>
   tag.title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "") === params?.slug
 )?.title;

 return (
  <SimpleLayout
   title={params?.slug ? `Articles tagged with ${tagTitle}` : "Articles"}
  >
   <SearchArticles articles={articles} page={page} />
  </SimpleLayout>
 );
}

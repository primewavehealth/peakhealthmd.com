"use server";

import Container from "@/components/Container";
import { allBlogs, Blog } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "../ArticlePage";

// This is the function that Next.js will call to generate the static pages
/* export async function generateStaticParams(): Promise<any> {
 const articles = await allBlogs;
 return articles.map((article: Blog) => ({ slug: article.slug }));
} */

// Get the article data for the given slug

function getArticle(slug: string, articles: Blog[]) {
 if (undefined) {
  console.log("no post");
 }
 return articles.find((a: Blog) => a.slug === slug);
}

// Dynamic metadata for the article page
export async function generateMetadata({
 params,
}: {
 params: { slug: string };
}): Promise<Metadata | undefined> {
 const article = getArticle(params.slug, allBlogs);
 if (!article) {
  return;
 }
 /* const ogImage = image
  ? `https://primewavehealth.com${article?.image}`
  : `https://primewavehealth.com/og?title=${article?.title}`; */

 const ogImage = {
  url: `https://primewavehealth.com/${article?.image}`,
  width: 800,
  height: 400,
  alt: article?.title ?? "",
 };

 return {
  metadataBase: new URL("https://primewavehealth.com"),
  title: article?.title,
  description: article?.description,

  openGraph: {
   title: article?.title ?? "",
   description: article?.description ?? "",
   type: "article",
   publishedTime: article?.date ?? "",
   url: `https://primewavehealth.com/blog/${article?.slug}`,
   images: [ogImage],
  },

  // Twitter
  twitter: {
   card: "summary_large_image",
   title: article?.title ?? "",
   description: article?.description ?? "",
   images: [ogImage],
   site: "@primewavehealth",
   creator: "@primewavehealth",
  },

  alternates: {
   canonical: `primewavehealth.com/blog/${params.slug}`,
  },
 };
}

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

// return the next and previous articles

function getNextandPrevArticles(
 article: Blog,
 articles: Blog[]
): { previousArticle: Blog | undefined; nextArticle: Blog | undefined } {
 let previousArticle: Blog | undefined;
 let nextArticle: Blog | undefined;

 // if the article is part of a series,
 //get the next and previous articles from the series
 if (article.series) {
  const seriesArticles = articles.filter(
   (a: Blog) => a.series?.title === article.series?.title
  );

  const sortedSeriesArticles = seriesArticles.sort((a: Blog, b: Blog) => {
   if (a.series?.order && b.series?.order) {
    return a.series?.order - b.series?.order;
   }
   return 0;
  });

  const currentArticleIndex = sortedSeriesArticles.findIndex(
   (a: Blog) => a.slug === article.slug
  );
  if (currentArticleIndex > 0) {
   previousArticle = sortedSeriesArticles[currentArticleIndex - 1];
  }
  if (currentArticleIndex < sortedSeriesArticles.length - 1) {
   nextArticle = sortedSeriesArticles[currentArticleIndex + 1];
  }
 }

 // if the article is not part of a series,
 //get the next and previous articles from the articles list
 if (!previousArticle) {
  const currentArticleIndex = articles.findIndex(
   (a: Blog) => a.slug === article.slug
  );
  if (currentArticleIndex > 0) {
   previousArticle = articles[currentArticleIndex - 1];
  }
 }

 if (!nextArticle) {
  const currentArticleIndex = articles.findIndex(
   (a: Blog) => a.slug === article.slug
  );
  if (currentArticleIndex < articles.length - 1) {
   nextArticle = articles[currentArticleIndex + 1];
  }
 }

 return { previousArticle, nextArticle };
}

// get related articles
function getRelatedArticles(article: Blog, articles: Blog[]): Blog[] {
 return articles
  .filter((a: Blog) => {
   if (a.slug === article.slug) return false;
   if (a.categories.some((c) => article.categories.includes(c))) return true;
   return false;
  })
  .slice(0, 3);
}

export default async function Page({
 params,
}: {
 params: { slug: string };
}): Promise<JSX.Element> {
 const { slug } = params;
 let articles = await getSortedArticles();
 let article = getArticle(slug, articles);

 if (!article) return notFound();

 const { previousArticle, nextArticle } = getNextandPrevArticles(
  article,
  articles
 );
 const relatedArticles = getRelatedArticles(article, articles);

 return (
  <Container className="mt-16 lg:mt-32">
   <ArticlePage
    article={article}
    previousArticle={previousArticle}
    nextArticle={nextArticle}
    relatedArticles={relatedArticles}
   />
  </Container>
 );
}

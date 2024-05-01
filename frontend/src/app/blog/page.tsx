import SimpleLayout from "@/components/SimpleLayout";
import { server } from "config";
import { allBlogs, Blog } from "contentlayer/generated";
import type { Metadata } from "next";
import SearchArticles from "./SearchArticles";

export const metadata: Metadata = {
 title: "Blog",
 description:
  "All our blogposts are written with the goal of educate readers and help them make better healthcare choices.",
 alternates: {
  canonical: "/blog",
 },

 // Open Graph
 openGraph: {
  title: "Articles - Primewave",
  description:
   "All our blogposts are written with the goal of educate readers and help them make better healthcare choices.",
  url: `${server}/blog`,
  type: "website",
  siteName: "Primewave - Pain care and wellness clinic in Las Vegas",
  images: [
   {
    url: `${server}/images/logo.png`,
    alt: "Primewave - Pain care and wellness clinic in Las Vegas",
    width: 600,
    height: 300,
   },
  ],
  locale: "en_US",
 },

 // Twitter
 twitter: {
  card: "summary_large_image",
  site: "@primewavehealth",
  creator: "@primewavehealth",
  title: "Articles - Primewave",
  description:
   "All our blogposts are written with the goal of educate readers and help them make better healthcare choices.",
  images: [
   {
    url: `${server}/images/logo.png`,
    alt: "Primewave - Pain care and wellness clinic in Las Vegas",
    width: 600,
    height: 300,
   },
  ],
 },
};

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

export default async function Articles({
 params,
 searchParams,
}: {
 params?: any;
 searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> {
 const articles = await getSortedArticles();
 const page = searchParams?.page ? parseInt(searchParams.page as string) : 1;

 return (
<div className="mx-auto">
  <SimpleLayout
   title="Writings on Pain Management and Wellness"
   intro="All our blogposts are written with the goal of educate readers and help them make better healthcare choices."
  >
   <SearchArticles articles={articles} page={page} />
  </SimpleLayout>
  </div>
 );
}

import { getSortedPostsData } from "@/lib/posts";

export default async function sitemap() {
 const posts = getSortedPostsData();
 const blogs = posts.map((post) => ({
  url: `https://primewavehealth.com/blog/${post.id}`,
  lastModified: post.date,
 }));

 const routes = [
  "",
  "/about-primewave",
  "/chronic-pain",
  "/back-pain",
  "/joint-pain",
  "/neck-pain",
  "/contact",
  "/chronic-fatigue-syndrome-las-vegas",
  "/erectile-dysfunction-treatment-in-las-vegas",
  "/fibromyalgia-treatment-las-vegas",
  "/low-testosterone-treatment-las-vegas",
  "/pain-treatment-in-las-vegas",
  "/shockwave-therapy-in-las-vegas",
 ].map((route) => ({
  url: `https://primewavehealth.com${route}`,
  lastModified: new Date().toISOString().split("T")[0],
 }));

 return [...routes, ...blogs];
}

import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
 const blogs = allBlogs.map((post) => ({
  url: `https://primewavehealth.com/blog/${post.slug}`,
  lastModified: post.date,
 }));

 const routes = [
  "",
  "/about-primewave",
  "/chronic-pain",
  "/back-pain",
  "/joint-pain",
  "/neck-pain",
  "/knee-pain",
  "/blog",
  "/blog/categories",
  "/blog/tags/pain-doctor-near-me",
  "/blog/tags/pain-doctor-in-las-vegas",
  "/blog/tags/best-pain-clinic-in-las-vegas",
  "/blog/tags/top-pain-clinic-in-las-vegas",
  "/blog/tags/back-pain-doctor-in-las-vegas",
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

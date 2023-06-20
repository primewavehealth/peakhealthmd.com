import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
 slug: {
  type: "string",
  resolve: (doc) => doc._raw.flattenedPath,
 },

 structuredData: {
  type: "object",
  resolve: (doc) => ({
   "@context": "https://schema.org",
   "@type": "BlogPosting",
   headline: doc.title,
   datePublished: doc.date,
   description: doc.description,
   image: doc.image
    ? `https://primewavehealth.com${doc.image}`
    : `https://primewavehealth.com/api/og?title=${doc.title}`,
   url: `https://primewavehealth.com/blog/${doc._raw.flattenedPath}`,
   author: {
    "@type": "Person",
    name: "Prime Wave",
   },
  }),
 },
};

export const Blog = defineDocumentType(() => ({
 name: "Blog",
 filePathPattern: `**/*.mdx`,
 contentType: "mdx",
 fields: {
  title: {
   type: "string",
   required: true,
  },
  date: {
   type: "string",
   required: true,
  },
  description: {
   type: "string",
   required: true,
  },
  image: {
   type: "string",
  },
  authors: {
   // Reference types are not embedded.
   // Until this is fixed, we can use a simple list.
   // type: "reference",
   // of: Author,
   type: "list",
   of: { type: "string" },
   required: false,
  },
  categories: {
   type: "list",
   of: { type: "string" },
   required: false,
  },
 },
 computedFields,
}));

export default makeSource({
 contentDirPath: "content",
 documentTypes: [Blog],
 mdx: {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
   rehypeSlug,
   [
    rehypePrettyCode,
    {
     theme: "one-dark-pro",
     onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and allow empty
      // lines to be copy/pasted
      if (node.children.length === 0) {
       node.children = [{ type: "text", value: " " }];
      }
     },
     onVisitHighlightedLine(node) {
      node.properties.className.push("line--highlighted");
     },
     onVisitHighlightedWord(node) {
      node.properties.className = ["word--highlighted"];
     },
    },
   ],
   [
    rehypeAutolinkHeadings,
    {
     properties: {
      className: ["anchor"],
     },
    },
   ],
  ],
 },
});

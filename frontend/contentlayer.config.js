import {
 defineDocumentType,
 defineNestedType,
 makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */

const Category = defineNestedType(() => ({
 name: "Category",
 fields: {
  title: {
   type: "string",
   description: "The title of the category",
   required: true,
  },
 },
}));

const Tag = defineNestedType(() => ({
 name: "Tag",
 fields: {
  title: {
   type: "string",
   description: "The title of the tag",
   required: true,
  },
 },
}));

const Series = defineNestedType(() => ({
 name: "Series",
 fields: {
  title: {
   type: "string",
   description: "The title of the series",
   required: true,
  },
  order: {
   type: "number",
   description: "The order of the series",
   required: true,
  },
 },
}));

const computedFields = {
 slug: {
  type: "string",
  resolve: (doc) => doc._raw.flattenedPath,
 },

 readingTime: {
  type: "json",
  resolve: (doc) => readingTime(doc.body.raw),
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
    ? `https://primewavehealth.com/${doc.image}`
    : `https://primewavehealth.com/og?title=${doc.title}`,
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
   required: true,
  },
  author: {
   type: "string",
  },
  categories: {
   type: "list",
   of: Category,
   description: "The categories of the post",
   required: true,
  },
  tags: {
   type: "list",
   of: Tag,
   description: "The tags of the post",
  },
  series: {
   type: "nested",
   of: Series,
   description: "The series the post belongs to",
  },
  status: {
   type: "enum",
   options: ["draft", "published"],
   description: "The status of the post",
   required: true,
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

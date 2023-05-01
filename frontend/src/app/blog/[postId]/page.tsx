import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
 const posts = getSortedPostsData(); //deduped!

 return posts.map((post) => ({
  postId: post.id,
 }));
}

type Props = {
 params: { postId: string };
};

export async function generateMetadata({
 params,
}: Props): Promise<Metadata | undefined> {
 const posts = getSortedPostsData();
 const { postId } = params;
 const post = posts.find((post) => post.id === postId);
 if (!post) {
  return {
   title: "Post Not Found",
  };
 }

 const { id, title, date, description, image } = post;
 const ogImage = image;

 return {
  title,
  description,
  openGraph: {
   type: "article",
   title,
   description,
   publishedTime: date,
   url: `https://vegasclinic.com/blog/${id}`,
   images: [
    {
     url: ogImage,
    },
   ],
  },
  twitter: {
   card: "summary_large_image",
   title,
   description,
   images: [ogImage],
  },
 };
}

export default async function Post({ params }: Props) {
 const posts = getSortedPostsData(); //deduped!
 const { postId } = params;

 if (!posts.find((post) => post.id === postId)) {
  return notFound();
 }

 const { title, date, contentHtml } = await getPostData(postId);

 const pubDate = getFormattedDate(date);

 return (
  <main className="px-6 py-12 mx-auto prose prose-xl prose-slate dark:prose-invert">
   <h1 className="mt-4 mb-0 text-3xl">{title}</h1>
   <p className="mt-0">{pubDate}</p>
   <article className="prose prose-neutral">
    <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
    <p>
     <Link href="/">← Back to home</Link>
    </p>
   </article>
  </main>
 );
}

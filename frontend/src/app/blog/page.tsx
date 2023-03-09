import Category from "@/interfaces/Category";
import Post from "@/interfaces/Post";
import StrapiResponse from "@/interfaces/StrapiResponse";
import { classNames, getImage } from "@/utils/utils";
import { format, parseISO } from "date-fns";
import Link from "next/link";

enum LabelColor {
 green = "green",
 blue = "blue",
 orange = "orange",
 purple = "purple",
 pink = "pink",
}

enum Aspect {
 landscape = "landscape",
 aspect_video = "aspect-video",
 aspect_square = "aspect-square",
}

function Label(props: { color: string; children: any }) {
 return (
  <span
   className={classNames(
    "inline-block mt-5 text-xs font-medium tracking-wider uppercase",
    `${props.color}`
   )}
  >
   {props.children}
  </span>
 );
}

function CategoryLabel({ categories }: { categories: Category[] }) {
 return (
  <div>
   {categories?.length &&
    categories.slice(0).map((category, index) => (
     <Link href={`/category/${category.attributes.slug}`} key={index}>
      <Label color={category.attributes.color}>
       {category.attributes.title}
      </Label>
     </Link>
    ))}
  </div>
 );
}

function PostList({ post, aspect }: { post: Post; aspect: Aspect }) {
 const imageUrl = getImage(post.attributes.cover?.data);
 const authorImageUrl = getImage(post.attributes.author?.data.attributes.image);

 return (
  <>
   <div className="cursor-pointer group">
    <div
     className={classNames(
      "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105",
      aspect === "landscape" ? "aspect-video" : "aspect-square"
     )}
    >
     <Link href={`/post/${post.attributes.slug}`}>
      {imageUrl ? (
       <img
        src={imageUrl}
        alt={String(
         post.attributes.cover?.data.attributes?.alternativeText || "Thumbnail"
        )}
        className="object-cover transition-all"
       />
      ) : (
       <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="1.5"
         stroke="currentColor"
         className="w-6 h-6"
        >
         {" "}
         <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
         />{" "}
        </svg>
       </span>
      )}
     </Link>
    </div>
    <CategoryLabel categories={post.attributes.categories.data} />
    <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
     <Link href={`/post/${post.attributes.slug}`}>
      <span className="bg-gradient-to-r from-green-200 to-green-100 dark:from-amber-800 dark:to-amber-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
       {post.attributes.title}
      </span>
     </Link>
    </h2>

    <div className="hidden">
     {post.attributes.description && (
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
       <Link href={`/post/${post.attributes.slug}`}>
        {post.attributes.description}
       </Link>
      </p>
     )}
    </div>

    <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
     <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0 w-5 h-5">
       <img
        src={authorImageUrl}
        alt={post.attributes.author?.data.attributes.name}
        className="object-cover rounded-full"
       />
      </div>
      <span className="text-sm">
       {post.attributes.author?.data.attributes.name}
      </span>
     </div>
     <span className="text-xs text-gray-300 dark:text-gray-600">&bull;</span>
     <time
      className="text-sm"
      dateTime={post.attributes.publishedAt || post.attributes.createdAt}
     >
      {format(
       parseISO(
        String(post.attributes.publishedAt || post.attributes.createdAt)
       ),
       "MMMM dd, yyyy"
      )}
     </time>
    </div>
   </div>
  </>
 );
}

async function getData(): Promise<StrapiResponse<Post[]>> {
 const res = await fetch("http://localhost:1337/api/posts?populate=*");
 if (!res.ok) {
  throw new Error("Failed to fetch data");
 }

 return res.json();
}

export default async function Home() {
 const response = await getData();

 return (
  <main className="container max-w-screen-lg min-h-screen px-8 py-5 mx-auto lg:py-8 xl:px-5">
   <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
    {response.data.slice(0, 2).map((post) => (
     <PostList key={post.id} post={post} aspect={Aspect.landscape} />
    ))}
   </div>

   <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
    {response.data.slice(2).map((post) => (
     <PostList key={post.id} post={post} aspect={Aspect.aspect_square} />
    ))}
   </div>
  </main>
 );
}

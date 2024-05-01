import BlogContainer from "@/app/blog/BlogContainer";

export default function SimpleLayout({
 title,
 intro,
 children,
}: {
 title: string;
 intro?: string;
 children: React.ReactNode;
}): JSX.Element {
 return (
  <BlogContainer className="container mx-auto mt-10 overflow-x-hidden sm:mt-32">
   <div className=" text-center">
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
     {title}
    </h1>
    {intro && (
     <p className="mt-6 text-base text-zinc-600">{intro}</p>
    )}
   </div>
   <div className="mt-8 sm:mt-6">{children}</div>
  </BlogContainer>
 );
}

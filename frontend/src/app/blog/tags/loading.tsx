import BlogContainer from "@/app/blog/BlogContainer";

export default function loading(): JSX.Element {
 return (
  <BlogContainer className="mt-16 sm:mt-32 animate-pulse">
   <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
    <div className="pt-6 pb-8 space-x-2 md:space-y-5">
     <div className="w-32 h-8 bg-gray-300 rounded-full dark:bg-gray-600" />
    </div>
    <div className="flex flex-wrap max-w-lg">
     {[...Array(8)].map((_, index) => (
      <div key={index} className="mt-2 mb-2 mr-5">
       <div className="w-32 h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
      </div>
     ))}
    </div>
   </div>
  </BlogContainer>
 );
}

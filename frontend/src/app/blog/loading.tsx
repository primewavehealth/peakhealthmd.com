import SimpleLayout from "@/components/SimpleLayout";
import ArticleCardPlaceholder from "@/components/skeleton/ArticleCardPlaceholder";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function loading(): JSX.Element {
 return (
  <SimpleLayout
   title="Writing on Pain Care and Wellness"
   intro="All our blogposts are written with the goal of educating you and helping you to make better healthcare decisions. I hope you enjoy them!"
  >
   <div className="relative max-w-3xl mb-12 sm:mb-16">
    <input
     aria-label="Search articles"
     type="text"
     placeholder="Search articles"
     className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md  focus:ring-blue-500 focus:border-blue-500"
    />

    <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 right-3 top-3" />
   </div>
   <div className="md:border-l md:border-zinc-100 md:pl-6 ">
    <div className="flex flex-col max-w-3xl -mt-6 space-y-16">
     {[...Array(4)].map((_, index) => (
      <ArticleCardPlaceholder key={index} />
     ))}
    </div>
   </div>
  </SimpleLayout>
 );
}

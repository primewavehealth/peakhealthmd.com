export default function ArticleCardPlaceholder() {
 return (
  <div className="md:grid md:grid-cols-4 md:items-baseline mt-9">
   <div className="mt-1 md:block relative z-10 order-first mb-3 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[120px]" />

   <div className="relative flex flex-col md:col-span-3 group items-stratch mb-9">
    <div className="w-1/2 h-3 mb-6 bg-gray-300 rounded-full dark:bg-gray-600" />

    <div className="space-y-4">
     <div className="flex items-center w-full space-x-2">
      <div className="w-1/2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="w-full h-2 bg-gray-300 rounded-full dark:bg-gray-600"></div>
      <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-600"></div>
     </div>
     <div className="flex items-center w-full space-x-2">
      <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div className="w-full h-2 bg-gray-300 rounded-full dark:bg-gray-600"></div>
      <div className="w-1/2 h-2 bg-gray-200 rounded-full dark:bg-gray-600"></div>
     </div>
     <div className="flex items-center w-1/2 space-x-2">
      <div className="w-1/3 h-2 bg-gray-300 rounded-full dark:bg-gray-700"></div>
      <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-600"></div>
     </div>
    </div>
   </div>
  </div>
 );
}

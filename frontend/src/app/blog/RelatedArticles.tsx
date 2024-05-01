import ArticleCard from "@/components/ArticleCard";
import { Blog } from "contentlayer/generated";

export default function RelatedArticles({
 articles,
}: {
 articles: Blog[];
}): JSX.Element {
 return (
  <>
   {articles.length > 0 && (
    <div className="mt-10">
     <h2 className="mb-6 text-xl font-bold tracking-tight text-zinc-800">
      Related Articles
     </h2>

     <div className="flex flex-col max-w-3xl space-y-16">
      {articles.map((article: any) => (
       <ArticleCard key={article.slug} article={article} />
      ))}
     </div>
    </div>
   )}
  </>
 );
}

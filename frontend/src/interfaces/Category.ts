export default interface Category {
 id: number;
 attributes: {
  slug: string;
  color: string;
  title: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
 };
}

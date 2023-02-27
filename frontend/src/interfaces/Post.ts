import Category from "./Category";
import Image from "./Image";
import User from "./User";

export default interface Post {
 id: number;
 attributes: {
  cover?: {
   data: Image;
  };
  author?: {
   data: User;
  };
  slug: string;
  categories: {
   data: Category[];
  };
  title: string;
  description?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
 };
}

import Image from "./Image";

export default interface User {
 id: number;
 attributes: {
  username?: string;
  name?: string;
  image?: Image;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
 };
}

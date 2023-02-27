export default interface Image {
 id: number;
 attributes?: {
  name?: string;
  url: string;
  alternativeText?: string;
  caption?: string;
 };
}

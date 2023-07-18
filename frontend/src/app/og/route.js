import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request) {
 try {
  const { searchParams } = new URL(request.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const title = hasTitle
   ? searchParams.get("title")?.slice(0, 100)
   : "Blog Post";

  return new ImageResponse(
   (
    <div
     style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      backgroundImage: "url(https://primewavehealth.com/images/bg.png)",
     }}
    >
     <div
      style={{
       marginLeft: 190,
       marginRight: 190,
       display: "flex",
       fontSize: 130,
       letterSpacing: "-0.05em",
       fontStyle: "normal",
       color: "blue",
       lineHeight: "120px",
       whiteSpace: "pre-wrap",
      }}
     >
      {title}
     </div>
    </div>
   ),
   {
    width: 1920,
    height: 1080,
   }
  );
 } catch (e) {
  console.log(`${e.message}`);
  return new Response(`Failed to generate the image`, {
   status: 500,
  });
 }
}

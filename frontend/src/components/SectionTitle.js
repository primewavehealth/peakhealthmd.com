import Container from "@/components/Container";

export default function SectionTitle(props) {
 return (
  <Container
   className={`flex w-full flex-col mt-4 ${
    props.align === "left" ? "" : "items-center justify-center text-center"
   }`}
  >
   {props.pretitle && (
    <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
     {props.pretitle}
    </div>
   )}

   {props.title && (
    <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight header-color lg:leading-tight lg:text-4xl dark:text-white">
     {props.title}
     <span className="header-gradient-color">
        {props.titleGradient}
     </span>
    </h2>
   )}

   {props.children && (
    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
     {props.children}
    </p>
   )}
  </Container>
 );
}

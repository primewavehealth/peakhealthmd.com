import Link from "next/link";

function CTA() {
 return (
  <>
   <section>
    <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
     <div className="mx-auto w-full max-w-7xl bg-[#f2f2f7] px-4 py-32 text-center">
      <h2 className="flex-col max-w-3xl mx-auto mb-6 text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12">
       Transform your future with our unparalleled opportunities in the medical
       and health industry
      </h2>
      <p className="mx-auto mb-6 max-w-xl  text-[#636262] text-lg md:mb-12">
       Discover a world of unprecedented possibilities in the lucrative medical
       and health industry. Invest smartly and unlock financial success – all in
       one unparalleled franchise experience."
      </p>
      <Link
       href="#"
       className="items-center inline-block px-6 py-3 mb-4 font-semibold text-center text-white bg-blue-900"
      >
       Get Started
      </Link>
     </div>
    </div>
   </section>
  </>
 );
}

export default CTA;

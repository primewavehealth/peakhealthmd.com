import Link from "next/link";

function FAQ() {
 return (
  <section>
   <div className="w-full max-w-5xl px-5 py-16 mx-auto md:px-10 md:py-24 lg:py-32">
    <div className="mb-8 text-center md:mb-12 lg:mb-16">
     <h2 className="text-3xl font-semibold md:text-5xl">
      Frequently Asked{" "}
      <span className="px-4 text-white bg-blue-900 bg-center bg-no-repeat bg-cover">
       Questions
      </span>
     </h2>
     <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
      Got Questions? We have answers.
     </p>
    </div>
    {/*  <!-- FAQ Div --> */}
    <div className="mb-8 md:mb-12 lg:mb-16">
     {/* <!-- FAQ Item --> */}
     <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
      <div className="flex items-start justify-between cursor-pointer">
       <p className="text-xl font-semibold">
        What is the minimum investment required to participate in the Visa
        Healthcare Investment Franchise?
       </p>
       <div className="relative flex items-center justify-center w-8 h-8 ml-10 bg-white">
        <div className="absolute h-4 w-0.5 bg-black"></div>
        <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
       </div>
      </div>
      <p className="mb-4 text-[#636262]">
       The minimum investment varies based on the specific franchise
       opportunity, but our programs are designed to be accessible. Contact our
       dedicated team for detailed information tailored to your investment
       preferences.
      </p>
     </div>
     {/*  <!-- FAQ Item --> */}
     <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
      <div className="flex items-start justify-between cursor-pointer">
       <p className="text-xl font-semibold">
        How does the citizenship process work for investors in the healthcare
        franchise?
       </p>
       <div className="relative flex items-center justify-center w-8 h-8 ml-10 bg-white">
        <div className="absolute h-4 w-0.5 bg-black"></div>
        <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
       </div>
      </div>
      <p className="mb-4 text-[#636262]">
       As a healthcare franchise investor, you become eligible for a streamlined
       citizenship process. We provide comprehensive support to guide you
       through the application, ensuring a smooth transition to your new global
       status.
      </p>
     </div>
     {/* <!-- FAQ Item --> */}
     <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
      <div className="flex items-start justify-between cursor-pointer">
       <p className="text-xl font-semibold">
        What kind of support can I expect as a franchisee in the healthcare
        industry?
       </p>
       <div className="relative flex items-center justify-center w-8 h-8 ml-10 bg-white">
        <div className="absolute h-4 w-0.5 bg-black"></div>
        <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
       </div>
      </div>
      <p className="mb-4 text-[#636262]">
       Our franchisees benefit from extensive support, including training,
       marketing assistance, and ongoing guidance. We're committed to your
       success, providing the resources needed to thrive in the dynamic
       healthcare sector.
      </p>
     </div>
     {/* <!-- FAQ Item --> */}
     <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
      <div className="flex items-start justify-between cursor-pointer">
       <p className="text-xl font-semibold">
        Are there specific qualifications or experience required to invest in
        the healthcare franchise?
       </p>
       <div className="relative flex items-center justify-center w-8 h-8 ml-10 bg-white">
        <div className="absolute h-4 w-0.5 bg-black"></div>
        <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
       </div>
      </div>
      <p className="mb-4 text-[#636262]">
       While prior experience in healthcare is advantageous, it's not mandatory.
       We welcome passionate entrepreneurs with a commitment to success. Our
       onboarding process and training programs are tailored to ensure you have
       the knowledge and skills needed for success.
      </p>
     </div>
     {/* <!-- FAQ Item --> */}
     <div className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8">
      <div className="flex items-start justify-between cursor-pointer">
       <p className="text-xl font-semibold">
        How long does it typically take to see returns on investment in the
        healthcare franchise?
       </p>
       <div className="relative flex items-center justify-center w-8 h-8 ml-10 bg-white">
        <div className="absolute h-4 w-0.5 bg-black"></div>
        <div className="h-0.5 w-4 bg-[#0b0b1f]"></div>
       </div>
      </div>
      <p className="mb-4 text-[#636262]">
       The timeline for returns varies, but our proven business models are
       designed for efficiency and profitability. Many investors start seeing
       returns within the first year, and our team works closely with you to
       optimize performance and accelerate your success in the healthcare
       industry.
      </p>
     </div>
    </div>
    <p className="text-center">
     Can’t find the answer you’re looking for? Reach out to our{" "}
     <Link href="#" className="font-bold text-[#1353fe]">
      support team
     </Link>
     .
    </p>
   </div>
  </section>
 );
}

export default FAQ;

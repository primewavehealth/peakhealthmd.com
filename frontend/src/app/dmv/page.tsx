function page() {
 return (
  <div className="text-lg">
   <section className="container max-w-screen-xl py-20 mx-auto">
    <h3 className="pb-10 text-2xl text-center">
     {" "}
     Our Parent Company PeakHealth is the Official Health Partner of the DMV in
     Las Vegas.
    </h3>
    <div className="">
     <iframe
      className="mx-auto text-center"
      width="700"
      height="500"
      src="https://www.youtube.com/embed?v=bv7xEG1wXx0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
     ></iframe>
    </div>
   </section>
   <section className="container max-w-screen-xl py-12 mx-auto">
    <h3 className="pb-4 text-2xl text-center"> Spanish Translation</h3>
    <div className="">
     <iframe
      className="mx-auto text-center"
      width="700"
      height="500"
      src="https://www.youtube.com/embed?v=upXvTLtXYAs"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
     ></iframe>
    </div>
   </section>
  </div>
 );
}

export default page;

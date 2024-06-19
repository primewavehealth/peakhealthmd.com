function Form() {
 return (
  <section id="form">
   <div className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-24 lg:py-32">
    <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
     <div className="flex px-6 my-8 text-left">
      <div className="flex flex-col items-center justify-center mx-auto md:max-w-4xl">
       <h3 className="pb-4 text-2xl font-bold md:text-3xl">Get in Touch</h3>

       <p className="mb-4 text-xl leading-8 text-gray-700">
        Primewave was Founded in 2018
        <br /> Located in the Dignity Hospital / San Martin Medical Arts
        Pavilion
        <br /> 7464 W. Sahara Ave Las Vegas, NV 89117
        <br /> 1(702)625-4334 <br />
        www.primewavehealth.com
       </p>
      </div>
     </div>
     {/*  <!-- Contact Form Container --> */}
     <div className="mx-auto max-w-xl bg-[#f2f2f7] p-8 text-center">
      <h3 className="text-2xl font-bold md:text-3xl">Get in Touch</h3>
      <p className="mx-auto mb-6 mt-4 max-w-md text-sm text-[#647084]">
       We are available to answer your questions and provide guidance.
      </p>

      <form
       className="max-w-sm mx-auto mb-4 text-left"
       name="wf-form-password"
       method="get"
      >
       <div className="flex flex-col mb-4 gap-y-2">
        <label className="mb-1 font-medium">Your Name</label>
        <input
         type="text"
         className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]"
         placeholder=""
        />
       </div>
       <div className="flex flex-col mb-4 gap-y-2">
        <label className="mb-1 font-medium">Phone Number</label>
        <input
         type="tel"
         className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]"
         placeholder=""
        />
       </div>
       <div className="flex flex-col mb-4 gap-y-2">
        <label className="mb-1 font-medium">Email Address</label>
        <input
         type="email"
         className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]"
         placeholder=""
        />
       </div>
       <div className="flex flex-col mb-8 gap-y-2">
        <label className="font-medium mb-">Message</label>
        <textarea
         placeholder=""
         className="h-auto min-h-[186px] w-full overflow-auto bg-white px-3 py-2 text-sm text-[#333333]"
        >
         {" "}
        </textarea>
       </div>
       <input
        type="submit"
        value="Send"
        className="inline-block w-full cursor-pointer bg-blue-900 px-6 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
       />
      </form>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Form;

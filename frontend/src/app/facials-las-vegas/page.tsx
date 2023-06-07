import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Affordable Facials in Las Vegas",
 description:
  "Indulge in our luxurious facials treatment in Las Vegas, tailored to meet your unique skincare needs and leave you feeling rejuvenated. Our experienced estheticians use only the highest quality products to help you achieve your best skin yet.",
};

const cards = [
 {
  title: "Acne Facial Las Vegas",
  img: "/images/facials3.jpg",
  text:
   "Our acne facial is ideal for those who struggle with oily or acne-prone skin. It includes a thorough cleanse, exfoliation, and the application of products that help to reduce inflammation and fight bacteria.",
 },
 {
  title: "Brightening Facial Las Vegas",
  img: "/images/facials2.jpg",
  text:
   "If you want to achieve a brighter, more radiant complexion, our brightening facial is for you. This treatment includes a deep cleanse, exfoliation, and the application of products that target dark spots and hyperpigmentation.",
 },
 {
  title: "Hydrating Facial Las Vegas",
  img: "/images/facials.jpg",
  text:
   "Our hydrating facial is perfect for those with dry or dehydrated skin. It includes a gentle cleanse, exfoliation, and the application of products that deeply moisturize and plump the skin.",
 },
];

function Page() {
 return (
  <div>
   <PageBanner
    heading="Affordable Facials in Las Vegas"
    body="Revitalize your skin and enhance your natural beauty with our facials in Las Vegas . Our experienced estheticians use only the highest quality products to deliver customized treatments that will leave your skin feeling refreshed and rejuvenated. Whether you're looking to combat signs of aging, reduce acne, brighten your complexion, or simply maintain your skin's health, our range of facial services has something for everyone. Book your appointment today and let us help you achieve your best skin yet!"
    src="/images/facials.jpg"
    height={400}
    width={400}
    alt="Facials in Las Vegas"
    btn={{
     href: "https://cal.com/primewavehealth/facials",
     text: "Schedule An Appointment",

     icon: (
      <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     ),
    }}
   />
   {/* next section */}
   <section className="">
    <div className="max-w-screen-xl px-8 py-16 mx-auto text-lg">
     <div className="max-w-3xl mx-auto text-base text-justify md:text-lg">
      <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
       Quality Facials Treatments in Las Vegas
      </h2>

      <article className="space-y-4 text-justify text-gray-600 ">
       <p>
        At Prime Wave, offer a range of facial treatments that will leave your
        skin feeling refreshed and rejuvenated. Our facials are tailored to meet
        your unique needs, and are performed by experienced estheticians who use
        only the highest quality products.
       </p>
       <p>
        We offer several types of facials, each with its own unique features and
        benefits. Here's a breakdown of our most popular facial services:
       </p>
      </article>
     </div>
    </div>
   </section>
   {/* next section */}
   <section>
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
       <Image
        className="absolute inset-0 object-cover bg-center bg-no-repeat bg-contain -z-10"
        alt="banner"
        src="/images/vampire-facial.avif"
        fill
       />
      </div>

      <div className="lg:py-24">
       <h2 className="text-3xl font-bold sm:text-4xl">Basic Facials</h2>

       <p className="mt-4 text-gray-600">
        Our basic facial is perfect for those who are new to facials or simply
        want to maintain their skin's health. This treatment includes a gentle
        cleanse, exfoliation, and moisturizer application, all customized to
        your skin type.
       </p>

       <Link
        href="https://cal.com/primewavehealth/facials"
        target="_blank"
        className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
       >
        Book a Session
       </Link>
      </div>
     </div>
    </div>
   </section>
   {/* next section */}
   <section>
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
     <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
       <Image
        className="absolute inset-0 object-cover bg-center bg-no-repeat bg-contain -z-10"
        alt="banner"
        src="/images/facials4.jpg"
        fill
       />
      </div>

      <div className="lg:py-24">
       <h2 className="text-3xl font-bold sm:text-4xl">
        Anti-Aging Facials in Las Vegas
       </h2>

       <p className="mt-4 text-gray-600">
        This facial is designed to combat the signs of aging, such as fine lines
        and wrinkles. It includes a deep cleanse, exfoliation, and the
        application of products specifically formulated to improve skin texture
        and firmness.
       </p>

       <Link
        href="https://cal.com/primewavehealth/facials"
        target="_blank"
        className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
       >
        Book a Session
       </Link>
      </div>
     </div>
    </div>
   </section>
   {/* <!-- ====== Cards Section Start --> */}
   <section className="pt-20  pb-10 lg:pb-20 bg-[#F3F4F6] px-8">
    <div className="container">
     <div className="flex flex-wrap -mx-4">
      {cards.map(({ title, img, text }) => (
       <div className="w-full px-4 md:w-1/2 xl:w-1/3">
        <div className="mb-10 overflow-hidden bg-white rounded-lg">
         <Image
          className="object-cover bg-center bg-no-repeat bg-contain"
          alt="banner"
          src={img}
          width={500}
          height={300}
         />

         <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="pb-4 text-2xl">{title}</h3>
          <p className="text-base leading-relaxed text-justify mb-7 h-[120px]">
           {text}
          </p>
          <Link
           href="https://cal.com/primewavehealth/facials"
           target="_blank"
           className="
           mt-4
                     inline-block
                     py-4
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base 
                     font-medium
                     hover:border-blue-600 hover:bg-blue-600 hover:text-white
                     transition
                     "
          >
           Book A Session
          </Link>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>
   {/* <!-- ====== Cards Section End --> */}
   <CTA
    heading="Best Facials in Las Vegas"
    body="
Choose from our selection of facials, including anti-aging, acne, brightening, and hydrating facials, dermaplaning, hydrafacial to achieve the results you desire. Our experienced estheticians use only the highest quality products and techniques to deliver customized treatments tailored to your unique skincare needs.  Book your appointment today and experience the rejuvenating benefits of our facial services."
    src="/images/facials1.jpg"
    alt="facials-treatment-las-vegas"
    btn={{
     href: "https://cal.com/primewavehealth/facials",

     text: "Schedule An Appointment",

     icon: (
      <svg
       fill="none"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       className="w-4 h-4 ml-auto"
       viewBox="0 0 24 24"
      >
       <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
     ),
    }}
   />
  </div>
 );
}

export default Page;

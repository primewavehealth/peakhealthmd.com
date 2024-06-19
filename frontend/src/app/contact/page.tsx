import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with our dedicated ED and pain care clinic team for personalized support and relief. Your well-being is our priority.",
  alternates: {
    canonical: "/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "localBusiness",
  image: ["https://primewavehealth.com/images/logo.png"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89117",
    streetAddress: "7464 W. Sahara Ave",
  },
  hashMap:
    "https://www.google.com/maps/dir/36.188072,-115.204211/primewave/@36.1256461,-115.4161627,11z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80c8c77b87fd04f3:0xe5b9c9fcf3f802d9!2m2!1d-115.2721143!2d36.058366?entry=ttu",

  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 36.18811,
      longitude: -115.176468,
    },
    geoRadius: 1000,
  },
  sameAs: "https://primewavehealth.com",
  description:
    "Connect with us at Las Vegas's leading pain control clinic. Reach out today for expert guidance on managing and conquering chronic pain. Relief is a call away.",
  name: "Primewave Pain Control Clinic in Las Vegas",
  telephone: "7026254334",
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4",
      bestRating: "5",
    },
  },
};

export default function Form() {
  return (
    <>
      <section className="px-4 bg-white lg:px-8">
        <div className="container px-6 mx-auto ">
          <div className="lg:mt-8">
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
              Chat to our friendly team
            </h1>

            <p className="mt-3 text-gray-500 ">We’d love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-2 lg:grid-cols-2 ">
            <div className="grid grid-cols-1 bg-gray-50 rounded px-4 py-6 gap-12 md:grid-cols-2">
              <div className="mx-auto">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <Link
                  href="mailto:info@primewavehealth.com"
                  // onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  <p className="mt-2 text-sm text-blue-500">
                    Click to email info@primewavehealth.com
                  </p>
                </Link>
              </div>

              <div className="mx-auto">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Live chat
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-blue-500">Start new chat</p>
              </div>

              <div className="mx-auto">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Come say hello at our office HQ.
                </p>
                <p className="mt-2 text-sm text-blue-500">
                  <Link
                    target="_blank"
                    href="https://www.google.com/maps/place/7464+W+Sahara+Ave,+Las+Vegas,+NV+89117/@36.1448982,-115.2549892,16z/data=!3m1!4b1!4m6!3m5!1s0x80c8c0c1e51d7703:0x9710d72f1b5f70b1!8m2!3d36.1448982!4d-115.2549892!16s%2Fg%2F11c23txy33?entry=ttu"
                  >
                    7464 W. Sahara Ave Las Vegas, NV 89117
                  </Link>
                </p>
              </div>

              <div className="mx-auto">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link
                  href="tel:7026254334"
                  // onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  <p className="mt-2 text-sm text-blue-500">
                    Click to Call (702) 625-4334
                  </p>
                </Link>
              </div>
            </div>
            {/* contact form */}
            <ContactForm />

            {/*  contact form end */}
            <div className="mx-auto bg-gray-50 rounded py-10 px-10 mb-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610.9486228847097!2d-115.25911307147356!3d36.144715098270375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0c03dca3f41%3A0xe89c0b9ac004c6e7!2s7674%20W%20Sahara%20Ave%2C%20Las%20Vegas%2C%20NV%2089117!5e0!3m2!1sen!2sus!4v1718128614453!5m2!1sen!2sus"
                width="1410"
                height="500"
                loading="lazy"
                style={{ border: 10 }}
                className="border border-black"
              ></iframe>
            </div>
          </div>
        </div>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
    </>
  );
}

import PageBanner from "@/components/UI/PageBanner";
import CTA from "@/components/UI/CTA";
import Script from "next/script";
import Image from "next/image";
import DrJubb0 from "/public/images/dr-jubb-0.jpg";
import Slideshow from "@/components/UI/Slideshow";

export const metadata = {
  title: "Meet Dr. Jubb | ED Specialist in Las Vegas",
  description:
    "Discover Dr. Jubb's pioneering approach to men's health, communication, and cellular rejuvenation. Trusted ED expert in Las Vegas dedicated to holistic healing.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Jubb",
  jobTitle: "ED Specialist",
  worksFor: {
    "@type": "Organization",
    name: "Las Vegas Men's Health Clinic",
  },
  sameAs: ["https://www.jubbdavid.com"],
  image: "/images/dr-jubb-1.jpg",
  description:
    "Dr. Jubb is a board-certified men's health specialist, pioneering cellular rejuvenation and holistic wellness techniques for over 40 years.",
};

function DrJubbPage() {
  return (
    <>
      <PageBanner
        heading="Meet Dr. Jubb"
        body="Dr. David Jubb is a pioneer in men’s health and cellular rejuvenation, blending science and holistic wellness to deliver transformative outcomes. With over four decades of innovation across biology, neurology, nutrition, and consciousness studies, Dr. Jubb has helped thousands of individuals overcome limitations and rediscover their vitality. Whether it’s through Whole Brain Functioning™ or Lifefood nutrition, his patient-first philosophy centers on deep healing, personal empowerment, and sustainable health."
        src={DrJubb0}
        height={400}
        width={400}
        alt="Dr. Jubb in Las Vegas"
        btn={{
          href: "https://www.jubbdavid.com/",
          text: "View Profile",
          id: "dr-jubb-profile",
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

      {/* About Section */}
      <section>
        <div className="max-w-screen-2xl px-8 pb-4 mx-auto lg:px-8">
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 md:gap-28">
            <div className="lg:py-4">
              <div className="max-w-3xl pb-4 mx-auto text-center">
                <h2 className="text-3xl font-bold">Who is Dr. Jubb?</h2>
              </div>
              <article className="space-y-4 text-justify text-xl text-gray-600">
                <p>
                  Dr. David Jubb is a neurobehavioral physiologist, colloidal
                  biologist, and holistic health leader renowned for his work in
                  Whole Brain Functioning™ and nutritional cellular rejuvenation.
                  With decades of research, clinical practice, and experiential
                  training under his belt, he has empowered thousands through
                  life-changing interventions that span health, law,
                  consciousness, and sustainable living.
                </p>
                <p>
                  His approach combines advanced science with natural healing,
                  placing emphasis on root cause solutions rather than surface
                  symptom management. Dr. Jubb’s mission is to elevate human
                  potential, inside and out.
                </p>
              </article>
            </div>

            <div className="py-4">
              <div className="max-w-3xl pb-4 mx-auto text-justify">
                <h2 className="text-3xl font-bold text-center tracking-tight">
                  Highlights of Dr. Jubb's Work
                </h2>
              </div>
              <article className="space-y-4 text-justify text-xl text-gray-600">
                <ul className="list-none md:list-disc">
                  <li>- Expert in cellular rejuvenation & Lifefood nutrition</li>
                  <li>- Creator of Whole Brain Functioning™ methodology</li>
                  <li>- Over 40 years of experience in holistic healthcare</li>
                  <li>- Led thousands through experiential healing programs</li>
                  <li>- Authority on gender and economic egalitarianism</li>
                  <li>- Public speaker, trainer, and visionary thinker</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Testimonial Section */}
      <section className="bg-gray-50">
        <blockquote className="max-w-screen-xl px-8 py-12 mx-auto text-center">
          <span className="py-10">
            <span className="text-4xl font-bold">Redefining Holistic Health &</span>{" "}
            <span className="relative inline-block px-2">
              <div className="absolute inset-0 transform -skew-x-12 bg-blue-600" />
              <h3 className="relative py-3 text-white">Human Potential</h3>
            </span>
          </span>
        </blockquote>

        <div className="container flex flex-wrap">
          <div className="w-full px-8 text-lg lg:px-4 lg:pt-16 grid md:grid-cols-2 gap-8 md:gap-28">
            
            <Slideshow folder="dr-jubb-2" count={8} title="Dr Jubb Photography" altPrefix="Dr. Jubb photo" />
            <Slideshow folder="dr-jubb" count={11} title="Clinic Moments with Dr. Jubb" altPrefix="Dr. Jubb photo" />

          </div>

          <div className="w-full items-center justify-center py-8 mx-auto max-w-[86%] md:max-h-[650px] bg-gray-50">
            {/* Form or other interaction could go here */}
          </div>
        </div>
      </section>

      

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export default DrJubbPage;

import CTA from "@/components/UI/CTA";
import PageBanner from "@/components/UI/PageBanner";
import type { Metadata } from "next";
import knee from "/public/images/knee-pain1.jpg";

export const metadata: Metadata = {
 title: "Neck Pain Care in Las Vegas",
 description:
  "Experience the power of shockwave therapy for knee pain . Non-invasive, fast, and effective treatment to reduce pain, inflammation, and improve mobility. Book your session now!",
};

function page() {
 return (
  <div>
   <PageBanner
    heading="Knee Pain Care in Las Vegas"
    body="Experience the power of pain relief with shockwave therapy at Primewave in Las Vegas. Our cutting-edge treatment utilizes advanced technology to stimulate healing, reduce inflammation, and regenerate damaged tissues, providing fast and effective relief from knee pain. Say goodbye to invasive procedures and hello to a non-invasive solution that brings back your mobility and improves your quality of life. Don't let knee pain limit you any longer – book your appointment today and start your journey towards a pain-free future with Primewave's shockwave therapy."
    src={knee}
    height={400}
    width={400}
    alt="knee-pain"
    btn={{
     href: "https://cal.com/primewavehealth/appointment",
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

   <div className="max-w-screen-xl px-8 py-16 mx-auto text-lg">
    <section className="max-w-3xl mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
      What is Knee Pain?
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       Knee pain is a common complaint that can occur due to various reasons,
       including injury, overuse, underlying medical conditions, or the natural
       aging process. The knee is a complex joint composed of bones, ligaments,
       tendons, muscles, and cartilage, and any disruption or damage to these
       structures can lead to knee pain.
      </p>
     </article>
    </section>
    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
      What Causes Knee Pain?
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       Injuries: Knee pain often results from injuries, such as sprains,
       strains, tears, or fractures. These injuries can occur due to sudden
       movements, overextension, or direct trauma to the knee. For example,
       tearing of the ACL or meniscus commonly leads to knee pain.
      </p>
      <p>
       Overuse: Repeated stress on the knee joint, often caused by activities
       like running, jumping, or repetitive movements, can lead to overuse
       injuries. Conditions like patellofemoral pain syndrome or iliotibial band
       syndrome can develop, causing pain around the kneecap or the outer side
       of the knee, respectively.
      </p>
      <p>
       Osteoarthritis: This is a degenerative joint disease that commonly
       affects the knee joint. Over time, the cartilage that cushions the bones
       in the knee can wear away, leading to bone-on-bone contact and resulting
       in pain, stiffness, and swelling.
      </p>
      <p>
       Rheumatoid Arthritis: Rheumatoid arthritis is an autoimmune condition
       that can cause inflammation and damage to the knee joint, leading to
       pain, stiffness, and swelling.
      </p>
      <p>
       Tendonitis: Inflammation of the tendons around the knee, such as patellar
       tendonitis (also known as jumper's knee) or quadriceps tendonitis, can
       cause knee pain.
      </p>
     </article>
    </section>
    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-3xl font-bold text-center sm:text-4xl">
      What are the Symptoms of Knee Damage?
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       Pain: Knee pain can range from a dull ache to sharp, stabbing pain. The
       intensity and location of the pain may vary depending on the specific
       condition or injury. Swelling: Inflammation of the knee joint can lead to
       visible swelling, often accompanied by warmth and tenderness around the
       joint.
      </p>
      <p>
       Stiffness: Knee pain may cause stiffness and reduced range of motion,
       making it difficult to fully bend or straighten the knee.
      </p>
      <p>
       Weakness or instability: Some individuals with knee pain may experience
       weakness or a feeling of instability in the knee, making it challenging
       to bear weight or perform certain activities.
      </p>
      <p>
       Clicking or popping: In some cases, knee pain may be accompanied by
       clicking, popping, or grinding sounds during movement. These sounds can
       indicate the presence of a meniscal tear or other structural issues
       within the knee joint.
      </p>
     </article>
    </section>

    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-2xl font-bold text-center sm:text-3xl">
      ShockWave Therapy for Knee Pain Treatment
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       Unlike traditional treatments, such as medication or surgery, shockwave
       therapy stimulates the body's natural healing mechanisms to address the
       underlying issues causing your knee pain. Through the use of focused,
       high-energy sound waves, this advanced therapy accelerates tissue repair,
       reduces inflammation, and promotes regeneration in the affected area.
      </p>
     </article>
    </section>

    {/*  next section  */}
    <section className="max-w-3xl pt-16 mx-auto text-base text-justify md:text-lg">
     <h2 className="pb-4 text-2xl font-bold sm:text-3xl">
      The Primewave Solution for Knee Pain Relief in Las Vegas
     </h2>

     <article className="space-y-4 text-justify text-gray-600 ">
      <p>
       Expert Care: Our experienced team of medical professionals will assess
       your condition thoroughly, taking into account your medical history and
       unique needs. With their expertise and in-depth knowledge of shockwave
       therapy, they will develop a personalized treatment plan tailored
       specifically to you. Cutting-Edge Technology: Primewave is equipped with
       the latest shockwave therapy technology, ensuring precise and targeted
       treatment. Our advanced equipment allows for controlled energy delivery,
       maximizing the therapeutic effects while minimizing discomfort.
      </p>
      <p>
       Non-Invasive and Safe: Say goodbye to invasive surgeries and lengthy
       recovery periods. Shockwave therapy is a non-invasive procedure that
       requires no incisions or anesthesia. It's a safe and reliable treatment
       option with minimal side effects.
      </p>
      <p>
       Fast and Effective: We understand that time is of the essence when it
       comes to your well-being. With shockwave therapy, many patients
       experience significant pain relief and improved functionality after just
       a few sessions. Get back to doing what you love faster with Primewave.
      </p>
     </article>
    </section>
   </div>

   {/* next section */}
   <CTA
    heading="Affordable Neck Pain Treatment in Las Vegas"
    body="Don't let knee pain hold you back any longer. Take the first step towards a pain-free future by scheduling a consultation at Primewave in Las Vegas. Our compassionate team is ready to guide you on your journey to regaining your mobility and enjoying life to the fullest. Contact us today and discover the transformative power of shockwave therapy for knee pain.
"
    src="/images/happy-man.avif"
    alt="Neck Pain Treatment in Las Vegas"
    btn={{
     href: "https://cal.com/primewavehealth/appointment",
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

export default page;

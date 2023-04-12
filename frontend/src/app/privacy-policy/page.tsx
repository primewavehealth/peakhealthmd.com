import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 robots: {
  index: false,
  follow: false,
  nocache: false,
  googleBot: {
   index: false,
   follow: false,
  },
 },
};

function page() {
 return (
  <section className="max-w-screen-md px-6 py-8 mx-auto">
   <article className="prose text-justify">
    <h1 className="text-xl text-start lg:text-3xl">PRIVACY POLICY</h1>
    At the Vegas Clinic, we value your privacy and are committed to protecting
    your personal information. This privacy policy outlines how we collect, use,
    and disclose your personal information when you use our website or services.{" "}
    <br />
    <br />
    1. <strong>Collection of Personal Information</strong> <br />
    We may collect personal information from you when you visit our website,
    schedule appointments, or use our services. This information may include
    your name, address, phone number, email address, medical history, and other
    information that you provide to us. We may also collect information about
    your use of our website, including your IP address and browser type.
    <br />
    <br />
    2. <strong>Use of Personal Information</strong> <br />
    We use your personal information to provide you with medical services,
    process payments, and communicate with you. We may also use your personal
    information for research and statistical purposes, but we will only use
    de-identified or aggregated data for these purposes. We do not sell your
    personal information to third parties.
    <br />
    <br /> 3. <strong>Disclosure of Personal</strong> <br />
    Information We may disclose your personal information to third-party service
    providers who assist us in providing medical services or processing
    payments. We may also disclose your personal information if required by law,
    such as in response to a court order or subpoena. We may also disclose your
    personal information if we believe that it is necessary to protect our
    rights or the rights of our patients.
    <br />
    <br />
    4. <strong>Security of Personal Information</strong> <br />
    We take reasonable steps to protect your personal information from
    unauthorized access, use, or disclosure. We use a variety of security
    measures, including encryption, to protect your personal information.
    <br />
    <br />
    5.<strong>Third-Party Websites</strong> <br />
    Our website may contain links to third-party websites. We are not
    responsible for the privacy practices of these websites. We encourage you to
    read the privacy policies of these websites before providing any personal
    information.
    <br />
    <br /> 6. <strong>Updates to Privacy Policy</strong>
    <br />
    We may update this privacy policy from time to time. The updated privacy
    policy will be posted on our website, and we encourage you to review it
    periodically.
    <br />
    <br />
    If you have any questions or concerns about this privacy policy, please
    contact us <Link href="/contact">here</Link>.
   </article>
  </section>
 );
}

export default page;

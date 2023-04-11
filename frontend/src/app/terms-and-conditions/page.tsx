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
    <h1 className="text-xl text-start lg:text-3xl">TERMS AND CONDITIONS</h1>
    Welcome to the Vegas Clinic service website. The following terms and
    conditions (“Terms”) govern your use of our website and any content,
    products, or services provided by us. By using our website, you agree to be
    bound by these Terms. If you do not agree with any of these Terms, please do
    not use our website. <br />
    <br />
    1. <strong>Acceptance of Terms</strong> <br />
    By using our website, you agree to these Terms, which may be updated from
    time to time. It is your responsibility to review these Terms regularly to
    ensure that you are aware of any updates or changes.
    <br />
    <br />
    2. <strong>Medical Information Disclaimer</strong> <br />
    The information provided on our website is intended for informational
    purposes only and should not be used as a substitute for professional
    medical advice, diagnosis, or treatment. Always seek the advice of a
    qualified healthcare provider with any questions you may have regarding a
    medical condition. We do not endorse or recommend any specific tests,
    physicians, products, procedures, opinions, or other information that may be
    mentioned on our website.
    <br />
    <br /> 3. <strong>User Accounts</strong> <br />
    You may be required to create an account to access certain parts of our
    website or services. You are responsible for maintaining the confidentiality
    of your account information, including your password, and for all activity
    that occurs under your account. You agree to notify us immediately of any
    unauthorized use of your account or password.
    <br />
    <br />
    4. <strong>User Conduct</strong> <br />
    You agree to use our website only for lawful purposes and in a manner that
    does not infringe the rights of any third party. You agree not to upload or
    transmit any content that is offensive, harmful, or violates any applicable
    law.
    <br />
    <br />
    5.<strong>Intellectual Property</strong> <br />
    All content on our website, including but not limited to text, graphics,
    logos, images, and software, is the property of our website or our licensors
    and is protected by copyright, trademark, and other intellectual property
    laws. You may not reproduce, modify, distribute, or otherwise use any
    content on our website without our prior written consent.
    <br /> 6. <strong>Links to Third-Party Websites</strong>
    <br />
    <br /> Our website may contain links to third-party websites or resources.
    We do not endorse or assume any responsibility for any third-party content,
    products, or services. You acknowledge and agree that we are not responsible
    or liable for any damage or loss caused by or in connection with your use of
    any third-party website or resource.
    <br />
    <br />
    7. <strong>Limitation of Liability</strong>
    <br /> To the fullest extent permitted by law, we will not be liable for any
    direct, indirect, incidental, special, consequential, or punitive damages
    arising out of or in connection with your use of our website or any content,
    products, or services provided by us.
    <br />
    <br />
    8. <strong>Indemnification</strong>
    <br /> You agree to indemnify and hold harmless our website and its
    affiliates, officers, directors, employees, agents, and licensors from any
    claims, damages, expenses, or other losses arising out of or in connection
    with your use of our website or any content, products, or services provided
    by us.
    <br />
    <br />
    9. <strong>Governing Law and Jurisdiction</strong>
    <br /> These Terms shall be governed by and construed in accordance with the
    laws of the jurisdiction where our website is located, without giving effect
    to any principles of conflicts of law. You agree to submit to the exclusive
    jurisdiction of the courts located in the jurisdiction where our website is
    located.
    <br />
    <br />
    10. <strong>Termination</strong>
    <br /> We reserve the right to terminate or suspend your access to our
    website or any content, products, or services provided by us at any time and
    without notice.
    <br />
    <br />
    11.<strong>Entire Agreement</strong>
    <br /> These Terms constitute the entire agreement between you and our
    website and supersede all prior agreements or understandings, whether
    written or oral, relating to your use of our website or any content,
    products, or services provided by us. If you have any questions or concerns
    about these Terms, please contact us <Link href="/contact">here</Link>.
   </article>
  </section>
 );
}

export default page;

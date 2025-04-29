import PDFViewer from "@/components/PDFViewer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Radio Show",
  description:
    "Listen to our latest Medical Radio Show sessions where experts discuss treatments, patient stories, and cutting-edge research in healthcare.",
  alternates: {
    canonical: "/medical-radio-show",
  },
};

export default function MedicalRadioShowPage() {
  return (
    <section className="bg-white">
      <div className="container px-4 py-8 mx-auto text-center sm:py-12 sm:px-6 lg:py-24 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl mb-6">
          Medical Radio Show
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 text-justify mb-10">
          Welcome to the Medical Radio Show archive. Browse through transcripts
          of our radio sessions, where our healthcare professionals share their
          insights on pain management, men’s health, and innovative therapies.
        </p>
        <div className="flex justify-center">
          <PDFViewer fileUrl="/MediaKitNew.pdf" />
        </div>
      </div>
    </section>
  );
}

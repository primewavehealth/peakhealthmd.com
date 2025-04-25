'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { version as pdfjsVersion } from 'pdfjs-dist/package.json';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Correct internal worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  fileUrl: string;
}

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="h-[80vh] overflow-y-scroll border rounded p-4 bg-white">
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error("Document load error:", error)}
      >
        {Array.from(new Array(numPages || 0), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={800}
            renderMode="canvas"
          />
        ))}
      </Document>
    </div>
  );
}

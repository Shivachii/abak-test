"use client";

import Link from "next/link";
import React from "react";

interface PDFViewerProps {
  title: string;
  fileUrl: string;
  mode?: "embed" | "button";
}

export const PDFViewer: React.FC<PDFViewerProps> = ({
  title,
  fileUrl,
  mode = "embed",
}) => {
  if (!fileUrl) return <p>No PDF file available.</p>;

  const DownloadButton = (
    <Link
      href={fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-secondary text-white px-6 py-3 rounded-md shadow-md hover:bg-secondary/90 transition"
    >
      Open & Download {title}
    </Link>
  );

  if (mode === "button") {
    return <div>{DownloadButton}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="w-full h-[80vh] border rounded shadow">
        <iframe
          src={fileUrl + "#toolbar=0"}
          title={title}
          width="100%"
          height="100%"
          allow="fullscreen"
          className="rounded"
        />
      </div>

      <div className="text-right">{DownloadButton}</div>
    </div>
  );
};

'use client'

import { Download } from "lucide-react";

export const DownloadButton = () => {
  const handleDownload = () => {
    const a = window.document.createElement('a');
    a.setAttribute('download', 'Mohit_s_Resume.pdf');
    a.href = '/Mohit_s_Resume.pdf';
    a.click();
  }
  return (
    <button
      onClick={handleDownload}
      className="hover:text-gray-200 flex items-center bg-transparent border-none focus:outline-none">
      [<Download width={18} height={18} />]
    </button>
  );
}

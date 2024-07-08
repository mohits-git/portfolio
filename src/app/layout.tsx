import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/providers/modal";
import AppBar from "@/components/global/app-bar";
import Terminal from "@/components/terminal";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit's Site",
  description: "Mohit's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>
        <ModalProvider>
          <AppBar />
          <div className="py-20 h-screen">
            {children}
          </div>
          <Terminal />
        </ModalProvider>
      </body>
    </html>
  );
}

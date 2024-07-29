import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/providers/modal";
import AppBar from "@/components/global/app-bar";
import Terminal from "@/components/terminal";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={ibmPlexMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full h-full flex flex-col justify-center items-center scroll-bar">
            <ModalProvider>
              <AppBar />
              <div className="py-20 min-h-full lg:h-screen max-w-[1440]">
                {children}
              </div>
              <Terminal />
              <Toaster theme="dark" />
            </ModalProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

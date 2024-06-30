import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Chatbot from "@/components/chatbot/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QD Web Designs",
  description: "A digital agency specializing in web development, logo design, branding, and app development.",
  keywords: "web development, logo design, branding, app development",
  openGraph: {
    title: "TigerTastic Family Daycare",
    description: "A family daycare that provides a safe, nurturing, and educational environment for children.",
    type: "website",
    siteName: "TigerTastic Family Daycare",
    url: "https://qualitydesigns.site",

    // images: [
    //   {
    //     url: "https://qualitydesigns.site/img5.jpg",
    //     width: 500,
    //     height: 500,
    //     alt: "TigerTastic Family Daycare",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="relative overflow-hidden">
          {children}
        </main>
        {/* <Chatbot /> */}
        <Footer />
        </body>
    </html>
  );
}

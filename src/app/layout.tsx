import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Chatbot from "@/components/chatbot/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QD Web Designs",
  description:
    "A digital agency specializing in web development, logo design, branding, and app development.",
  keywords: "web development, logo design, branding, app development",
  openGraph: {
    title: "QD Web Designs",
    description:
      "A digital agency specializing in web development, logo design, branding, and app development.",
    type: "website",
    siteName: "QD Web Designs",
    url: "https://www.qualitydesigns.site/",

    // images: [
    //   {
    //     url: "https://qualitydesigns.site/img5.jpg",
    //     width: 500,
    //     height: 500,
    //     alt: "QD Web Designs",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V0ZMEQD36H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V0ZMEQD36H');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        {/* <Chatbot /> */}
        <Footer />
      </body>
    </html>
  );
}

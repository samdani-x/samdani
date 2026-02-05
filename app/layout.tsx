import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Mahbub E Samdani | Cybersecurity Researcher & Full-Stack Developer",
  description: "CSE Undergraduate specializing in Cybersecurity Research, Digital Forensics, and Full-Stack Development. Building secure, scalable applications.",
  keywords: ["Md. Mahbub E Samdani", "Cybersecurity Researcher", "Digital Forensics", "Full-Stack Developer", "CSE", "Portfolio", "Web Developer", "Bangladesh"],
  authors: [{ name: "Md. Mahbub E Samdani" }],
  creator: "Md. Mahbub E Samdani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samdani-x.github.io/samdani",
    siteName: "Md. Mahbub E Samdani",
    title: "Md. Mahbub E Samdani | Cybersecurity Researcher & Full-Stack Developer",
    description: "CSE Undergraduate specializing in Cybersecurity Research, Digital Forensics, and Full-Stack Development.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Md. Mahbub E Samdani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Mahbub E Samdani | Cybersecurity Researcher & Full-Stack Developer",
    description: "CSE Undergraduate specializing in Cybersecurity Research, Digital Forensics, and Full-Stack Development.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll />
          <CustomCursor />
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

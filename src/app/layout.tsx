import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalCursor from "../components/GlobalCursor";
import Navbar from "@/components/Navbar";
import { NavbarProvider } from "../contexts/NavbarContext";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROHIT DASGUPTA | Full Stack Developer & CS Student",
  description:
    "Portfolio of Rohit Dasgupta - Full Stack Developer specializing in CS + Math at the University of Florida. Explore my projects, experience, and skills.",
  keywords: [
    "Rohit Dasgupta",
    "Full Stack Developer",
    "Computer Science",
    "Mathematics",
    "University of Florida",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Rohit Dasgupta" }],
  creator: "Rohit Dasgupta",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💥</text></svg>",
  },
  openGraph: {
    title: "ROHIT DASGUPTA | Full Stack Developer & CS Student",
    description:
      "Portfolio of Rohit Dasgupta - Full Stack Developer specializing in CS + Math at the University of Florida",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROHIT DASGUPTA | Full Stack Developer & CS Student",
    description:
      "Portfolio of Rohit Dasgupta - Full Stack Developer specializing in CS + Math at the University of Florida",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalCursor />
        <NavbarProvider>
          <Navbar />
          {children}
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}

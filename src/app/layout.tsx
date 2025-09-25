import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AccessibilityControls from "@/components/ui/AccessibilityControls";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Communication Access Network | Empowering Access Through Support and Communication",
  description: "CAN provides statewide auxiliary support services to Connecticut's DeafBlind, deaf, and hard-of-hearing residents with visual impairments, promoting independence and community connection.",
  keywords: "deaf, hard of hearing, DeafBlind, visual impairment, ASL, American Sign Language, auxiliary services, Connecticut, disability support",
  authors: [{ name: "Communication Access Network" }],
  openGraph: {
    title: "Communication Access Network",
    description: "Empowering Access Through Support and Communication for Connecticut's deaf, hard-of-hearing, and DeafBlind community",
    type: "website",
    locale: "en_US",
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
        <AccessibilityControls />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

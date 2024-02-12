import type { Metadata } from "next";
import { Inter, Architects_Daughter } from 'next/font/google'
import "./additionalCSS/globals.css";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Nepali Language Processing",
  description: "Nepali Language Processing website tha provides Spelling Correction and Text Generation features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header/>
        {children}
        <Footer />
      </div>
    </body>
  </html>
  );
}

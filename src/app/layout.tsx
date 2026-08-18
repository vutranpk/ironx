import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "IronX - Smart Fitness",
  description: "More Than a Gym - A Space Built for Progress",
};

import CustomCursor from "@/components/CustomCursor";
import Background3D from "@/components/Background3D";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-white selection:bg-accent selection:text-white min-h-screen relative font-sans lg:cursor-none">
        
        <LanguageProvider>
          {/* Animated Custom Cursor */}
          <CustomCursor />

          {/* 3D Background Canvas */}
          <Background3D />
          
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}

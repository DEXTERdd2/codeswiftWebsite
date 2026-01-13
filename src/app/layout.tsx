import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./webdev-cards.css";
import { Header } from "../components/header";
import { Background } from "@/components/ui/background";
import AnimatedLogoRow from "@/components/AnimatedLogoRow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeSwift",
  description: "Transforming ideas into powerful digital solutions",
  keywords: ["web development", "mobile apps", "UI/UX design", "software development", "tech solutions"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { HeaderMenuProvider } = require("@/context/HeaderMenuContext");
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Vector.svg" />
      </head>
      <body className={`${inter.className} antialiased text-white min-h-screen`}>
        <HeaderMenuProvider>
          <Background />
          <Header />
          {children}
        </HeaderMenuProvider>
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeSwift - Modern Web Development",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased text-white min-h-screen`}
        style={{
          backgroundImage: "linear-gradient(180deg, #000000 0%, #200D42 36.21%, #4F21A1 68.68%, #8752FA 86.54%)",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
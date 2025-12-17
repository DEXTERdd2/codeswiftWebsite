import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/page-transition";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "CodeSwift - Modern Web Development",
  description: "Transforming ideas into powerful digital solutions",
  keywords: ["web development", "mobile apps", "UI/UX design", "software development", "tech solutions"],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563EB",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
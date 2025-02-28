import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist } from "next/font/google"; // ✅ Correct import
import "./globals.css";

// Load Geist font (latest working version)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Page Metadata
export const metadata: Metadata = {
  title: "Glow&Fit - Beauty & Fitness Store",
  description: "Your ultimate destination for beauty and fitness essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={geist.variable}>
        <body className="font-sans antialiased bg-gray-50 text-gray-900">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

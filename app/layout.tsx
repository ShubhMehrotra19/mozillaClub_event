import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anti Ragging Awareness",
  description: "Anti Ragging Awareness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollbarWidth: 'none'}}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

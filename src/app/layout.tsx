import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="forest">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-primary text-primary-foreground`}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "contradiction-online",
  description: "contradiction29だよ",
  icons: {
    icon: "/favicon.ico",
  },
};
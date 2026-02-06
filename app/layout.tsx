import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Merchant Hub",
  description: "Merchant Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
          rel="stylesheet"
        />
      </head>
      <body className="font-body min-h-screen bg-warm-gray text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

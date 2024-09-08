import type { Metadata } from "next";
import Head from 'next/head';
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nadun Sumedha | Product Designer & Web Developer",
  description: "HI! I am Nadun Sumedha. A WEB designer and product designer based on Srilanka, let's discuss your project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        />
      </Head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}

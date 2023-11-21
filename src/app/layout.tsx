import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotoSansTC = Noto_Sans_TC({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "天使協會 TAVA",
  description: "天使協會 TAVA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh-Hant-TW'>
      <link rel='icon' href='/favicon.svg' sizes='any' />

      <body className={NotoSansTC.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

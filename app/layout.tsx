import type { Metadata } from "next";
import { DM_Sans, Inconsolata } from "next/font/google";
import "./globals.css";

const headerFont = DM_Sans({ subsets: ["latin"], variable: "--header-font" });
const paragraphFont = Inconsolata({ subsets: ["latin"], variable: "--paragraph-font" });

export const metadata: Metadata = {
  title: "Katie Kauffman",
  description:
    "Software engineer and builder focused on human-centered systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="fluxLight" className={`${headerFont.variable} ${paragraphFont.variable}`}>
      <body style={{ fontFamily: "var(--paragraph-font)" }}>{children}</body>
    </html>
  );
}

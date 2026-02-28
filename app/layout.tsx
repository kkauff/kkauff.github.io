import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katie Kauffman",
  description: "Software engineer and builder focused on human-centered systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="classicLight">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}

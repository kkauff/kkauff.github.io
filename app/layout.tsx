import type { Metadata } from "next";
import { DM_Sans, Inconsolata } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const headerFont = DM_Sans({ subsets: ["latin"], variable: "--header-font" });
const paragraphFont = Inconsolata({
  subsets: ["latin"],
  variable: "--paragraph-font",
});

export const metadata: Metadata = {
  title: "Katie Kauffman",
  description:
    "Software engineer and builder focused on human-centered systems.",
  verification: {
    google: "ydj_ONbSvBTLjaAPLFbsBV0O_Wi81ECQG2qdw-2k13s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="classicLight"
      className={`${headerFont.variable} ${paragraphFont.variable}`}
    >
      <head>
        {/* Apply the saved theme before paint to avoid a flash on reload. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--paragraph-font)" }}>{children}</body>
      <GoogleAnalytics gaId="G-V0QNT61W6R" />
    </html>
  );
}

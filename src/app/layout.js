import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

import ClientWrapper from "@/components/ClientWrapper";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevSecOps Portfolio | Web Developer",
  description: "Elite Web Developer crafting secure and visually stunning digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body selection:bg-surface-tint/30 selection:text-white bg-slate-950">

        <ClientWrapper>
          {children}
        </ClientWrapper>

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "NovaForge Studios | Web Experiences That Stand Out",
  description:
    "NovaForge Studios crafts immersive, high-performance digital experiences for ambitious brands."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}

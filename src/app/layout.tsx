import type { Metadata } from "next";
import { Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jnana — Coming Soon",
  description:
    "The operating system for institutional knowledge. Retrieval, decision memory, and AI-grounded answers for enterprise teams.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

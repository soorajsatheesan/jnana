import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jnana | Enterprise Knowledge Platform",
  description:
    "Jnana is an enterprise knowledge base platform for trusted search, decision memory, and AI-grounded answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "@coherence/tokens/css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coherence Docs",
  description: "Coherence design system foundation"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
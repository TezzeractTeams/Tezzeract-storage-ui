import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tezzeract Storage",
  description: "Secure, scalable storage built for modern teams.",
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

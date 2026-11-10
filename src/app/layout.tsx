import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tezzeract Storage — Pay-as-you-go file storage",
  description:
    "Store and share your files with Tezzeract Storage. No subscriptions, no tiers — just pay for the space you actually use.",
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

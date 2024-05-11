import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Executive Hospitality Company",
  description:
    "Discover bespoke Chauffeur, Security, and Concierge services tailored for Discerning clients in the UK and internationally. Experience the pinnacle of sophistication and service with Executive Hospitality Company.",
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

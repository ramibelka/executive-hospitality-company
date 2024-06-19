import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "VIP Choice",
  description:
    "Discover bespoke Chauffeur, Security, and Concierge services tailored for Discerning clients in the UK and internationally. Experience the pinnacle of sophistication and service with VIP Choice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

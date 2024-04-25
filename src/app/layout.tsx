import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const pjs = Plus_Jakarta_Sans({
  weight: ["200", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "idak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pjs.className}`}>{children}</body>
    </html>
  );
}

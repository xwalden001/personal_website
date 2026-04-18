import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xavier | Software Engineer",
  description: "Full-stack software engineer based in Minneapolis, MN.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
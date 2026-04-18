import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary font-sans">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

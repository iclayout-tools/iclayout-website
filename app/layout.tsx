import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IC Layout - Intelligent Concepts and Layouts",
  description: "From precision IC layout design to transformative software solutions. Expert integrated circuit design and custom software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

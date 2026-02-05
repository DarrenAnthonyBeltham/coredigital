import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoreDigital | Software House",
  description: "Modern software solutions for your business",
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
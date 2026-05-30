import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mental Coach AI ",
  description: "Your supportive mental coach powered by AI - built by kwalsh6street",
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

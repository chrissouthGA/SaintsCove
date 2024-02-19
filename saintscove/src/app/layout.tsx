import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "../../components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saint's Cove",
  description: "Created by Agatha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Logo />
        {children}
      </body>
    </html>
  );
}

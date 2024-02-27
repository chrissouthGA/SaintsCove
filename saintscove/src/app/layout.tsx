import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
const cormorant =  Cormorant({ subsets: ["latin"] });

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
      <body className={cormorant.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

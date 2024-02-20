import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/NavBar";
import Image from "next/image";

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
        <Navbar />
        <section className="w-full mx-auto">
          <Image
            className="w-full max-h-screen object-contain"
            src='/images/Black and White Geometric Minimalist Logo-2.png'
            width={800}
            height={600}
            alt="Background"
            priority={true}
          />
        </section>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

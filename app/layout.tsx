import type { Metadata } from "next";
import {Providers} from "./components/context/providers";
import { Inter } from "next/font/google";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cubango",
  description: "Cubango Fresh Produce exports high-quality agricultural products to countries across Africa and Europe. Our efficient logistics network ensures timely delivery of fresh produce to our international partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  );
}

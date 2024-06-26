"use client";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "African Capital",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}

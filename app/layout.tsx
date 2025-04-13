import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/globals";
import { ReactNode } from "react";

const lufga = localFont({
  src: [
    { path: "fonts/lufga/lufga-regular.otf", weight: "400", style: "normal" },
    { path: "fonts/lufga/lufga-medium.otf", weight: "500", style: "normal" },
    { path: "fonts/lufga/lufga-semibold.otf", weight: "600", style: "normal" },
    { path: "fonts/lufga/lufga-bold.otf", weight: "700", style: "normal" },
    { path: "fonts/lufga/lufga-black.otf", weight: "800", style: "normal" },
  ],
});

const montserrat = localFont({
  src: [
    {
      path: "fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Montserrat/Montserrat-Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "3D Portfolio",
  description: "This is Abdullah Tharwat 3D Portfolio",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={`${lufga.className} ${montserrat.className} antialiased`}>
      <main className="main-container">
        <Header />
        <div className="max-w-7xl align-center justify-start mt-4">
          <div className="mt-4 px-4 py-8">{children}</div>
        </div>
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;

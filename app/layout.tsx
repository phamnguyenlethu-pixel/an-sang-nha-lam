import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Ăn Sáng Nhà Làm - Bữa Sáng Ngon Dinh Dưỡng Cho Bé",
  description: "Bữa sáng ngon, nhanh, đủ chất cho bé. Giao tận tay tại Biên Hòa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

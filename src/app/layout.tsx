import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SoulArt",
  description:
    "SoulArt - ნახატების ონლაინ პლატფორმა, სადაც შეგიძლიათ გაყიდოთ და შეიძინოთ უნიკალური ხელოვნების ნიმუშები. შექმენით პირადი გალერეა და გახდით მხატვარი ან კოლექციონერი.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} FiraGO`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

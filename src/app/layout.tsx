import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Providers from "@/providers/Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import TopLoader from "@/components/shared/TopLoader";

const geistInter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Hunt",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  // console.log("session", session);
  return (
    <html lang="en">
      <body
        className={`${geistInter.className} antialiased`}
      >
        <TopLoader />
        <Providers>
          <LayoutWrapper session={session}>{children}</LayoutWrapper>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}

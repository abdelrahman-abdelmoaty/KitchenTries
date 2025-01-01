import Header from "@/components/header";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
});

export const metadata = {
  title: "KitchenTries",
  description:
    "Your go-to platform for discovering, sharing, and celebrating home cooking adventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${interTight.variable} font-interTight antialiased`}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

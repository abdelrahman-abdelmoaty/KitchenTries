import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ComingSoonModal } from "@/components/comming-soon-modal/comming-soon-modal";
import { CookieConsent } from "@/components/cookie-consent";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "KitchenTries - Share Your Kitchen Stories & Discover Recipes",
    template: "%s | KitchenTries",
  },
  description:
    "Join our community of home chefs, share your favorite recipes, and discover culinary inspirations from around the world. Find recipes, cooking tips, and connect with passionate food lovers.",

  // App Information
  applicationName: "KitchenTries",
  authors: [{ name: "KitchenTries Team" }],
  generator: "Next.js",
  keywords: [
    "recipes",
    "cooking",
    "food",
    "cuisine",
    "home cooking",
    "recipe sharing",
    "cooking community",
    "cooking tips",
    "culinary",
    "home chef",
    "food community",
    "kitchen stories",
    "cooking inspiration",
    "meal ideas",
    "cooking techniques",
  ],

  // Viewport
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false,
  // },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon.ico",
      },
    ],
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://KitchenTries.com",
    siteName: "KitchenTries",
    title: "KitchenTries - Share Your Kitchen Stories & Discover Recipes",
    description:
      "Join our community of home chefs, share your favorite recipes, and discover culinary inspirations from around the world.",
    images: [
      {
        url: "https://KitchenTries.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KitchenTries - Your Culinary Community",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@KitchenTries",
    creator: "@KitchenTries",
    title: "KitchenTries - Share Your Kitchen Stories & Discover Recipes",
    description:
      "Join our community of home chefs, share your favorite recipes, and discover culinary inspirations from around the world.",
    images: ["https://KitchenTries.com/twitter-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
    other: {
      me: ["your-personal-website"],
    },
  },

  // Manifest
  manifest: "/manifest.json",

  // Additional Metadata
  category: "food & drink",
  classification: "cooking & recipes",
  creator: "KitchenTries Team",
  publisher: "KitchenTries",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },

  // Theme Colors
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#10b981" }, // emerald-500
  //   { media: "(prefers-color-scheme: dark)", color: "#059669" }, // emerald-600
  // ],

  // Alternative Languages
  alternates: {
    canonical: "https://KitchenTries.com",
    languages: {
      "en-US": "https://KitchenTries.com",
      "es-ES": "https://KitchenTries.com/es",
      "fr-FR": "https://KitchenTries.com/fr",
    },
  },

  // Other
  referrer: "origin-when-cross-origin",
  // colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} font-sans antialiased grid grid-rows-[1fr,auto] min-h-scree relative`}
      >
        <Header />
        {children}
        <Footer />
        <ComingSoonModal />
        <CookieConsent />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

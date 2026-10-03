import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Self-hosted variable fonts (src/fonts) — builds require no network access.
const playfair = localFont({
  src: [
    { path: "../fonts/PlayfairDisplay-Variable.woff2", weight: "400 900", style: "normal" },
    { path: "../fonts/PlayfairDisplay-Italic-Variable.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-display-src",
  display: "swap",
});

const manrope = localFont({
  src: [{ path: "../fonts/Manrope-Variable.woff2", weight: "200 800", style: "normal" }],
  variable: "--font-body-src",
  display: "swap",
});

const jetbrains = localFont({
  src: [
    { path: "../fonts/JetBrainsMono-Variable.woff2", weight: "100 800", style: "normal" },
    { path: "../fonts/JetBrainsMono-Italic-Variable.woff2", weight: "100 800", style: "italic" },
  ],
  variable: "--font-mono-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://droyce-tech-club.pages.dev"),
  title: "Droyce Tech Club | Technology, Learning & Digital Community",
  description:
    "Droyce Tech Club is a private technology society connecting independent creators with an engaged global learning community through a structured, year-long digital experience.",
  keywords: [
    "Droyce Tech Club",
    "technology community",
    "digital learning",
    "innovation society",
    "private tech club",
    "managed digital experience",
    "tech residency",
  ],
  authors: [{ name: "Droyce Tech Club" }],
  applicationName: "Droyce Tech Club",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "Droyce Tech Club | Technology, Learning & Digital Community",
    description:
      "A private technology society and managed digital experience — connecting brilliant independent creators with a global community of deeply engaged minds.",
    siteName: "Droyce Tech Club",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Droyce Tech Club | Technology, Learning & Digital Community",
    description:
      "A private technology society and managed digital experience — connecting brilliant independent creators with a global community of deeply engaged minds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0C0E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${manrope.variable} ${jetbrains.variable} antialiased bg-ink text-cream font-body`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

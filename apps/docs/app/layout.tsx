import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";
const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "auto",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    shortcut: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: [
      { url: "/favicon-57x57.png", sizes: "57x57" },
      { url: "/favicon-60x60.png", sizes: "60x60" },
      { url: "/favicon-72x72.png", sizes: "72x72" },
      { url: "/favicon-76x76.png", sizes: "76x76" },
      { url: "/favicon-114x114.png", sizes: "114x114" },
      { url: "/favicon-120x120.png", sizes: "120x120" },
      { url: "/favicon-144x144.png", sizes: "144x144" },
      { url: "/favicon-152x152.png", sizes: "152x152" },
      { url: "/favicon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-96x96.png", sizes: "96x96" },
      { url: "/favicon-192x192.png", sizes: "192x192" },
    ],
  },
};

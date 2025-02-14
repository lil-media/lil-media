import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { getServerSideURL } from '@/utilities/getURL'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'
import React from 'react'
import './globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  viewportFit: 'auto',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '32x32' }],
    shortcut: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: [
      { url: '/favicon-57x57.png', sizes: '57x57' },
      { url: '/favicon-60x60.png', sizes: '60x60' },
      { url: '/favicon-72x72.png', sizes: '72x72' },
      { url: '/favicon-76x76.png', sizes: '76x76' },
      { url: '/favicon-114x114.png', sizes: '114x114' },
      { url: '/favicon-120x120.png', sizes: '120x120' },
      { url: '/favicon-144x144.png', sizes: '144x144' },
      { url: '/favicon-152x152.png', sizes: '152x152' },
      { url: '/favicon-180x180.png', sizes: '180x180' },
    ],
    other: [
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-96x96.png', sizes: '96x96' },
      { url: '/favicon-192x192.png', sizes: '192x192' },
    ],
  },
}

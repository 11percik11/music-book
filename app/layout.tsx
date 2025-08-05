import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import './globals.css'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const moscow = localFont({
  display: 'swap',
  preload: true,
  variable: '--font-moscow',
  src: [
    { path: '../public/fonts/MOSCOW.woff', weight: '400' },
    { path: '../public/fonts/MOSCOW.woff2', weight: '400' },
  ],
})

export const metadata: Metadata = {
  title: 'Moscow 2030',
  description: 'Тот самый звук',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body
        className={cn(
          'min-h-screen bg-background font-montserrat antialiased overflow-hidden',
          montserrat.variable,
          moscow.variable,
        )}
      >
        <Script src='/exiter.js' />
        {children}
      </body>
    </html>
  )
}

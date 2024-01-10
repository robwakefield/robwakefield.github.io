import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const font = Roboto_Mono({ weight: ['400'], subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Rob Wakefield',
  description: 'Portfolio Website for Rob Wakefield',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}

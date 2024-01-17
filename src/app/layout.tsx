import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bayathy.dev',
  description: 'ばやしのポートフォリオサイト兼ブログ。',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="mb-12 grid min-h-[100lvh] grid-flow-row grid-cols-[100%] grid-rows-[auto_1fr]">
          <Header />
          <div className="mx-auto mt-4 w-full max-w-7xl px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

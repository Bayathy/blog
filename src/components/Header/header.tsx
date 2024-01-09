'use client'

import type { FC } from 'react'
import { ThemeProvider } from 'next-themes'
import { ThemeToggleMenu } from './theme-toggle-menu'

export const Header: FC = () => {
  return (
    <header className="mx-auto flex h-16 max-w-7xl items-center justify-end px-4">
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange
        defaultTheme="system"
      >
        <ThemeToggleMenu />
      </ThemeProvider>
    </header>
  )
}

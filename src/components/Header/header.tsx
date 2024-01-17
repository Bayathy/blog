'use client'

import type { FC } from 'react'
import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '../ui/pagination'
import { ThemeToggleMenu } from './theme-toggle-menu'

export const Header: FC = () => {
  const pathname = usePathname()

  return (
    <header className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
      <Pagination className="mr-auto justify-start">
        <PaginationContent className="*:px-2">
          <PaginationLink href="/">
            Home
          </PaginationLink>
          {pathname === '/about' && (
            <>
              <PaginationItem>
                /
              </PaginationItem>
              <PaginationLink href="/about">
                About
              </PaginationLink>
            </>
          )}

          {pathname === '/links' && (
            <>
              <PaginationItem>
                /
              </PaginationItem>
              <PaginationLink href="/links">
                Links
              </PaginationLink>
            </>
          )}

          {pathname.startsWith('/posts') && (
            <>
              <PaginationItem>
                /
              </PaginationItem>
              <PaginationLink href="/posts">
                Posts
              </PaginationLink>
            </>
          )}

        </PaginationContent>
      </Pagination>
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

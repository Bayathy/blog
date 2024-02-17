'use client'

import type { FC } from 'react'
import { ThemeProvider } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Github, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '../ui/pagination'
import { ThemeToggleMenu } from './theme-toggle-menu'

export const Header: FC = () => {
  const pathname = usePathname()

  return (
    <header className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
      <Pagination className="mr-auto justify-start">
        <PaginationContent className="gap-0 *:px-2">
          <PaginationLink href="/">
            Home
          </PaginationLink>
          {pathname === '/aboutme' && (
            <>
              <PaginationItem>
                /
              </PaginationItem>
              <PaginationLink href="/about">
                About
              </PaginationLink>
            </>
          )}

          {pathname.startsWith('/works') && (
            <>
              <PaginationItem>
                /
              </PaginationItem>
              <PaginationLink href="/works">
                Works
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
      <Link href="https://github.com/Bayathy" className="mr-4 rounded-full hover:text-blue-400">
        <Github size={24} />
      </Link>
      <Link href="https://twitter.com/Bayathy" className="mr-4 hover:text-blue-400">
        <TwitterIcon size={24} />
      </Link>
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

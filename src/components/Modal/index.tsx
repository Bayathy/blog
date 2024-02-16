'use client'
import { type FC, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogOverlay } from '../ui/dialog'

interface Props {
  children: React.ReactNode
}

export const Modal: FC<Props> = ({ children }) => {
  const router = useRouter()
  const routerBack = useCallback(
    () => {
      router.back()
    },
    [router],
  )

  return (
    <Dialog defaultOpen>
      <DialogOverlay />
      <DialogContent onPointerDownOutside={() => routerBack()} onEscapeKeyDown={() => routerBack()} className="w-11/12">
        {children}
      </DialogContent>
    </Dialog>
  )
}

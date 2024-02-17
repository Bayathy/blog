'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import type { ComponentProps, FC } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentProps<typeof AspectRatio> & ComponentProps<typeof Image>

export const ResizableImage: FC<Props> = ({ ratio, className, ...props }) => {
  return (
    <AspectRatio ratio={ratio}>
      <Image {...props} className={cn('object-cover', className)} />
    </AspectRatio>
  )
}

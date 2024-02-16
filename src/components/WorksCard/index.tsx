'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import type { FC } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '../ui/card'
import type { Work } from '@/types/work'

export const WorksCard: FC<Work> = ({ _id, title, description, Image }) => {
  return (
    <Link href={`/works/detail/${_id}`}>
      <Card>
        <CardHeader>
          <AspectRatio ratio={16 / 9}>
            <NextImage src={Image.src} alt={Image.alt ?? title} className="object-contain" fill />
          </AspectRatio>
        </CardHeader>
        <CardContent>
          <h3>{title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}

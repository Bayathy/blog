'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '../ui/card'
import type { Post } from '@/types/post'
import { formatDate } from '@/lib/format-date'

interface Props {
  post: Post
}

export function PostCard({ post }: Props) {
  return (
    <Link
      href={`/posts/${post._id}`}
      key={post._id}
    >
      <Card className="bg-secondary/50 text-blue-600 backdrop-blur-xl duration-200 ease-in hover:bg-secondary/70 dark:text-blue-400 ">
        <CardHeader className="relative order-2 md:order-1">
          <AspectRatio ratio={16 / 9}>
            <Image
              fill
              loading="lazy"
              src={post.cardImage ? post.cardImage : '/placeholder.svg'}
              alt={post.title}
              className="object-contain"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent>
          <p>{post.title}</p>
          <small>{formatDate(post.createdAt)}</small>
        </CardContent>
      </Card>
    </Link>
  )
}

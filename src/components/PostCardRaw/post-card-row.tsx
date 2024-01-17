'use client'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Card, CardContent, CardHeader } from '../ui/card'
import type { Post } from '@/types/post'
import { formatDate } from '@/lib/format-date'

interface Props {
  posts: Post[]
}

export const PostCardRow: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
      {posts.map(post => (
        <Link
          href={`/posts/${post._id}`}
          key={post._id}
        >
          <Card className="bg-secondary/50 text-blue-600 backdrop-blur-xl duration-200 ease-in hover:bg-secondary/70 dark:text-blue-400 ">
            <CardHeader className="relative order-2 md:order-1">
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
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
      ))}
    </div>
  )
}

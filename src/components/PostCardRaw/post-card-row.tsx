'use client'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Card, CardContent, CardHeader } from '../ui/card'
import type { Post } from '@/types/post'

interface Props {
  posts: Post[]
}

export const PostCardRow: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid w-full grid-cols-3 gap-4">
      {posts.map(post => (
        <Link
          href={`/posts/${post._id}`}
          key={post._id}
        >
          <Card className="bg-secondary/50 text-blue-400 backdrop-blur-xl duration-200 ease-in hover:bg-secondary/70">
            <CardHeader className="relative">
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
                  src={post.cardImage ? post.cardImage : '/images/placeholder.png'}
                  alt={post.title}
                  className="object-contain"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent>
              {post.title}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

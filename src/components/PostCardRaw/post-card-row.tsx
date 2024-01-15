'use client'
import Link from 'next/link'
import type { AssetFields } from 'contentful'
import Image from 'next/image'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Card, CardContent, CardHeader } from '../ui/card'

interface Props {
  posts: {
    id: string
    title: string
    ogp?: AssetFields
    createdAt: string
  }[]
}

export const PostCardRow: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid w-full grid-cols-3 gap-4">
      {posts.map(post => (
        <Link
          href={`/posts/${post.id}`}
          key={post.id}
        >
          <Card className="bg-card-bg">
            <CardHeader className="relative">
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
                  src={post.ogp?.file?.url ? `https:${post.ogp?.file?.url}` : '/images/ogp.png'}
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

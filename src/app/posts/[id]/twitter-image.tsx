import { ImageResponse } from 'next/og'
import { client } from '@/lib/instance'
import type { Post } from '@/types/post'

export const runtime = 'edge'

export const alt = 'Bayathy.dev'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string } }) {
  const data = await client.getContent<Post>({
    appUid: 'blog',
    modelUid: 'post',
    contentId: params.id,
    query: {
      select: ['title'],
    },
  })

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: '#a0b6ff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 96,
            background: 'white',
            width: '90%',
            height: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
          }}
        >
          {data.title}
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}

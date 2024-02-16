import { cache } from 'react'
import { client } from '@/lib/instance'
import type { Post } from '@/types/post'

export const getArticles = cache(async () => {
  const data = await client.getContents<Post>({
    appUid: 'blog',
    modelUid: 'post',
    query: {
      select: ['_id', 'description', 'title', 'cardImage', 'createdAt', 'content'],
    },
  })
  return data.items
})

import { cache } from 'react'
import { client } from '@/lib/instance'
import type { Work } from '@/types/work'

export const getWorkById = cache(async (id: string) => {
  const data = await client.getContent({
    appUid: 'blog',
    modelUid: 'works',
    contentId: id,
    query: {
      select: ['_id', 'title', 'Image', 'description', 'createdAt', 'content'],
    },
  })
  return data as Work
})

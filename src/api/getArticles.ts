import { client } from '@/lib/instance'
import type { Post } from '@/types/post'

export async function getArticles() {
  const data = await client.getContents<Post>({
    appUid: 'blog',
    modelUid: 'post',
    query: {
      select: ['_id', 'title', 'cardImage', 'createdAt', 'content'],
    },
  })
  return data.items
}

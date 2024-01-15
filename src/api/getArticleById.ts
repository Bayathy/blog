import { client } from '@/lib/instance'
import type { Post } from '@/types/post'

export async function getArticleById(id: string) {
  const data = await client.getContent<Post>({
    appUid: 'blog',
    modelUid: 'post',
    contentId: id,
    query: {
      select: ['_id', 'title', 'cardImage', 'createdAt', 'content'],
    },
  })
  return data
}

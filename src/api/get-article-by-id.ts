import { NodeHtmlMarkdown } from 'node-html-markdown'
import { cache } from 'react'
import { client } from '@/lib/instance'
import type { Post } from '@/types/post'

export const getArticleById = cache(async (id: string) => {
  const data = await client.getContent<Post>({
    appUid: 'blog',
    modelUid: 'post',
    contentId: id,
    query: {
      select: ['_id', 'description', 'title', 'cardImage', 'createdAt', 'content'],
    },
  })
  return {
    ...data,
    content: NodeHtmlMarkdown.translate(data.content),
  }
})

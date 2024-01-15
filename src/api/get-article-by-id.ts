import { NodeHtmlMarkdown } from 'node-html-markdown'
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
  return {
    ...data,
    content: NodeHtmlMarkdown.translate(data.content),
  }
}

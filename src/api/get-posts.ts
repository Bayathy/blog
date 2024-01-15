import type { Asset, AssetFields } from 'contentful'
import { client } from '@/lib/instance'
import type { TypePostsSkeleton } from '@/types/post'

export async function getPosts() {
  const { items } = await client.getEntries<TypePostsSkeleton>({
    content_type: 'posts',
  })

  const posts = items.map((item) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      ogp: (item.fields.ogp as Asset)?.fields as AssetFields,
      createdAt: item.fields.createdAt,
      content: item.fields.content,
    }
  })
  return posts
}

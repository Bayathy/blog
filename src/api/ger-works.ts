import { client } from '@/lib/instance'
import type { Work } from '@/types/work'

export async function getWorks() {
  const data = await client.getContents({
    appUid: 'blog',
    modelUid: 'works',
    query: {
      select: ['_id', 'title', 'Image'],
    },
  })
  return data.items as Work[]
}

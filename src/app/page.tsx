import { Suspense } from 'react'
import { LinkCard } from '@/components/LinkCard/link-card'
import { PostCardRow } from '@/components/PostCardRaw/post-card-row'
import { Separator } from '@/components/ui/separator'

export const revalidate = 60 * 60

export default async function Home() {
  return (
    <main className="flex flex-col gap-8">
      <h2 className="text-xl">Profile</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        <LinkCard href="/aboutme" title="aboutme" />
        <LinkCard href="/works" title="Works" />
      </div>
      <Separator />
      <h2 className="text-xl">Posts</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <PostCardRow />
      </Suspense>
    </main>
  )
}

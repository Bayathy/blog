import { getArticles } from '@/api/get-articles'
import { LinkCard } from '@/components/LinkCard/link-card'
import { PostCardRow } from '@/components/PostCardRaw/post-card-row'

export const revalidate = 60 * 60

export default async function Home() {
  const data = await getArticles()

  return (
    <main className="flex flex-col gap-8">
      <h2 className="text-xl">Profile</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        <LinkCard href="/about" title="aboutme" />
        <LinkCard href="/works" title="Works" />
      </div>
      <hr className="border-gray-300 dark:border-gray-700" />
      <h2 className="text-xl">Posts</h2>
      <PostCardRow posts={data} />
    </main>
  )
}

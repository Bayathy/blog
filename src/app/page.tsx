import { getArticles } from '@/api/getArticles'
import { LinkCard } from '@/components/LinkCard/link-card'
import { PostCardRow } from '@/components/PostCardRaw/post-card-row'

export const Home: React.FC = async () => {
  const data = await getArticles()

  return (
    <main className="flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-2">
        <LinkCard href="/about" title="aboutme" />
        <LinkCard href="/links" title="Links" />
      </div>
      <PostCardRow posts={data} />
    </main>
  )
}

export default Home

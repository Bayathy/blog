import { getPosts } from '@/api/get-posts'
import { LinkCard } from '@/components/LinkCard/link-card'
import { PostCardRow } from '@/components/PostCardRaw/post-card-row'

export const Home: React.FC = async () => {
  const data = await getPosts()

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

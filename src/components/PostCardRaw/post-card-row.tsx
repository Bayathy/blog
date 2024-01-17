import { PostCard } from './post-card'
import { getArticles } from '@/api/get-articles'

export const PostCardRow: React.FC = async () => {
  const posts = await getArticles()

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

// import { getPostData } from '@/api/get-post-data'

import { getArticleById } from '@/api/getArticleById'

async function Post({ params }: { params: { id: string } }) {
  const data = await getArticleById(params.id)
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-2xl">{data.title}</h1>
      <div>
      </div>
    </article>
  )
}

export default Post

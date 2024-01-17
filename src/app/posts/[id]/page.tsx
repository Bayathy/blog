import Markdown from 'react-markdown'
import { highlight } from 'sugar-high'
import { getArticleById } from '@/api/get-article-by-id'
import { createHeading, createImage } from '@/lib/md-converters'

export const revalidate = 60 * 60

async function Post({ params }: { params: { id: string } }) {
  const data = await getArticleById(params.id)

  const date = new Date(data.createdAt).toLocaleDateString()
  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-4xl">{data.title}</h1>
      <p>
        投稿日：
        {date}
      </p>
      <div className="rounded-md bg-secondary p-4">
        <p>{data.description}</p>
      </div>
      <div className="prose mt-8 max-w-full dark:prose-invert">
        <Markdown
          components={{
            a: ({ href, children }) => (
              createImage({ src: href, alt: children as string })
            ),
            h1: ({ children }) => createHeading(1)({ children }),
            h2: ({ children }) => createHeading(2)({ children }),
            h3: ({ children }) => createHeading(3)({ children }),
            h4: ({ children }) => createHeading(4)({ children }),
            h5: ({ children }) => createHeading(5)({ children }),
            h6: ({ children }) => createHeading(6)({ children }),
            code: ({ children }) => {
              const codeHtml = highlight(children as string)
              return (
                <code dangerouslySetInnerHTML={{ __html: codeHtml }} />
              )
            },
          }}
        >
          {data.content}
        </Markdown>
      </div>
    </article>
  )
}

export default Post

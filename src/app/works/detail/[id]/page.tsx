import Image from 'next/image'
import { getWorkById } from '@/api/get-work-by-id'
import { Card, CardContent } from '@/components/ui/card'

export const revalidate = 60 * 60

export default async function DetailPage({ params }: { params: { id: string } }) {
  const data = await getWorkById(params.id)

  return (
    <div>
      <h1 className="text-2xl">Works</h1>
      <Card className="mt-4 bg-secondary/50 p-0">
        <CardContent className="p-4">
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <h2 className="mt-4 text-balance break-all text-xl">{data.title}</h2>
            <div className="relative aspect-video flex-1">
              <Image
                src={data.Image.src}
                alt={data.Image.alt || data.title}
                fill
                className="rounded-t-lg object-contain"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-4">
        <div dangerouslySetInnerHTML={{ __html: data.description }} className="prose dark:prose-invert" />
      </div>
    </div>
  )
}

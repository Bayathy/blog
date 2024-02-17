import Image from 'next/image'
import { getWorkById } from '@/api/get-work-by-id'
import { Modal } from '@/components/Modal'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export const revalidate = 60 * 60

async function DetailModal({ params }: { params: { id: string } }) {
  const data = await getWorkById(params.id)

  return (
    <Modal>
      <div className="relative aspect-video">
        <Image
          src={data.Image.src}
          alt={data.Image.alt || data.title}
          layout="fill"
          className="rounded-t-lg object-contain"
        />
      </div>
      <h2 className="mt-4 text-balance break-all text-xl">{data.title}</h2>
      <Separator />
      <ScrollArea className="mt-4 h-80">
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </ScrollArea>
    </Modal>
  )
}

export default DetailModal

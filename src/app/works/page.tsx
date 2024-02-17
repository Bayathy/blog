import { getWorks } from '@/api/ger-works'
import { WorksCard } from '@/components/WorksCard'
import { Separator } from '@/components/ui/separator'

export const revalidate = 60 * 60

async function Works() {
  const data = await getWorks()
  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-2xl">Works</h1>
      <div>
        <p>作ったものを紹介します。</p>
      </div>
      <Separator />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map(work => (
          <WorksCard key={work._id} {...work} />
        ))}
      </div>
    </main>
  )
}

export default Works

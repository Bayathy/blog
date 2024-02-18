import { ResizableImage } from '@/components/ResizableImage'

function AboutMe() {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl">About Me</h1>
      <div>
        <div className="mx-auto w-72">
          <ResizableImage src="/profile5.webp" alt="Bayathyのウロフィール写真" fill ratio={1 / 1} className="rounded-full" />
        </div>
        <div className="mt-4">
          <p>
            Bayathyです。
          </p>
          <p>フロントエンドを好んで触っています。フロントオブフロントに興味があり、UI/UXにとても興味があります。</p>
        </div>
      </div>
    </main>
  )
}

export default AboutMe

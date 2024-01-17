import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-3xl">404</h1>
      <p>ページが見つかりませんでした。</p>
      <Image alt="cute dog" src="/placeholder.svg" width={256} height={256} />
    </div>
  )
}

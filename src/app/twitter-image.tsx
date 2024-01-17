import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Bayathy.dev'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const sawarabiRegular = fetch(
    new URL('./Sawarabi.ttf', import.meta.url),
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: '#a0b6ff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 96,
            background: 'white',
            width: '90%',
            height: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
          }}
        >
          Bayathy.dev
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await sawarabiRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}

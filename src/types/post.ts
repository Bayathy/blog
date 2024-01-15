import type { Image } from 'newt-client-js'

export interface Post {
  _id: string
  title: string
  cardImage?: Image
  createdAt: string
  content: string
}

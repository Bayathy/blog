import 'server-only'
import process from 'node:process'
import { createClient } from 'newt-client-js'

const { CMS_SPACE_ID, CMS_API_KEY } = process.env

export const client = createClient({
  spaceUid: CMS_SPACE_ID as string,
  token: CMS_API_KEY as string,
  apiType: 'cdn',
})

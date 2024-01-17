import 'server-only'
import { createClient } from 'newt-client-js'

// eslint-disable-next-line node/prefer-global/process
const { CMS_SPACE_ID, CMS_API_KEY } = process.env

export const client = createClient({
  spaceUid: CMS_SPACE_ID as string,
  token: CMS_API_KEY as string,
  apiType: 'cdn',
})

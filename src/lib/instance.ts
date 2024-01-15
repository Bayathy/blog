import { createClient } from 'contentful'

// eslint-disable-next-line node/prefer-global/process
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

// This is the standard Contentful client. It fetches
// content that has been published.
export const client = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
})

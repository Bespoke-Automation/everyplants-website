import { createClient } from 'next-sanity'
import { draftMode } from 'next/headers'

// Client for fetching with stega encoding (visual editing overlays)
const stegaClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
})

// Regular client without stega
const regularClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Token-authenticated client for draft content
const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
})

export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string
  params?: Record<string, unknown>
}): Promise<T> {
  const { isEnabled: isDraftMode } = await draftMode()

  if (isDraftMode) {
    // In draft mode: use token auth + stega for overlays + fetch drafts
    return previewClient.fetch<T>(query, params, {
      perspective: 'previewDrafts',
    })
  }

  // Production: use CDN, no stega
  return regularClient.fetch<T>(query, params)
}

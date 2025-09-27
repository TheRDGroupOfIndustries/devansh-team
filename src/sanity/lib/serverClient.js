import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env.js'

export function getServerClient() {

  const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN
  if (!projectId || !token) return null

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  })
}

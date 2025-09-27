// Prefer server-side environment variables (no NEXT_PUBLIC_) so server
// processes (like API routes) have access to the project configuration.
// Fall back to NEXT_PUBLIC_* for client code running in the browser.
export const apiVersion =
  process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-23'

export const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

/** Resolve a public/ path against Vite `base` (required for GitHub Pages project sites). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalized = path.replace(/^\/+/, '')
  return `${base}${normalized}`
}

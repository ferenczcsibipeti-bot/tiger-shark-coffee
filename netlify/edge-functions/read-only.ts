import type { Config } from '@netlify/edge-functions'

// The site is public but read-only: visitors may view pages and assets,
// but any request that would submit or change data is rejected.
const READ_METHODS = ['GET', 'HEAD', 'OPTIONS']

export default async (req: Request) => {
  if (READ_METHODS.includes(req.method)) return

  return new Response('Method Not Allowed: this site is read-only.', {
    status: 405,
    headers: { Allow: READ_METHODS.join(', ') },
  })
}

export const config: Config = {
  path: '/*',
}

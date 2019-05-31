// @flow
export const PAGE_PARAM = 'p'
export const PAGE_SIZE_PARAM = 'page_size'
export const PAGE_SIZE_MAX = 100
export const DEFAULT_PAGE = 1
export const DEFAULT_PAGE_SIZE = 10

/**
 * Holds pagination parameters
 */
export class PaginateData {
  // default page
  page = DEFAULT_PAGE
  // default number of items per page
  size = DEFAULT_PAGE_SIZE
  constructor({ page, size }: { page: number, size: number }) {
    if (page) this.page = page
    if (size) this.size = size
  }
}

/**
 * Parse pagination parameters from request query
 */
export function parseParameters(ctx: Object) {
  const q = ctx.request.query
  const result = {}
  if (PAGE_PARAM in q) {
    const p = Number(q[PAGE_PARAM])
    if (Number.isSafeInteger(p) && p > 0) {
      result.page = p
    }
  }
  if (PAGE_SIZE_PARAM in q) {
    const size = Number(q[PAGE_SIZE_PARAM])
    if (Number.isSafeInteger(size) && size > 0 && size <= PAGE_SIZE_MAX) {
      result.size = size
    }
  }
  return result
}

/**
 * Parses out the 'p' query parameter, removing it from the parameter list,
 * and sets the page property in the request context.
 */
export default async function(ctx: Object, next: () => Promise<void>) {
  ctx.state.paginate = new PaginateData(parseParameters(ctx))
  await next()
  if (typeof ctx.body === 'object') {
    ;(ctx.body: any).page = ctx.state.paginate
  }
}

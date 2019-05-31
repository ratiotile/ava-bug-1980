import test from 'ava'
import paginate from './paginate'

const next = () => {}

test("paginate sets page to 1 if there is no 'p' query parameter", async t => {
  const ctx = {
    request: {
      query: {},
    },
    // state: {},
    body: {},
  }
  await paginate(ctx, next)
  t.is(ctx.body.page, 1)
})

test("paginate uses 'p' query parameter to set body.page", async t => {
  const ctx = {
    request: {
      query: { p: 123 },
    },
    state: {},
    body: {},
  }
  await paginate(ctx, next)
  t.is(ctx.body.page, 123)
  // strings are converted to numbers
  ctx.request.query.p = '123'
  await paginate(ctx, next)
  t.is(ctx.body.page, 123)
  // TODO: test validation
})

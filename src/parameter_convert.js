// @flow

/**
 * Conversion functions
 */
export const to = {
  string: (raw: any) => String(raw),
  int: (raw: any) => {
    const converted = Number(raw)
    foo()
    return converted
  },
}

export function makeConverter(
  schema: Object,
  path: Array<string> = ['request', 'query']
) {
  return {}
}

export const id = {}

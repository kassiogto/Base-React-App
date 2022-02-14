import { SERVER_HEADERS, getDefaultHeaders } from '../Headers'

describe('Headers', () => {
  it('should contain only strings', () => {
    const hasOnlyStrings = Object.values(SERVER_HEADERS).every(
      (header) => typeof header === 'string',
    )

    expect(hasOnlyStrings).toBe(true)
  })

  it('should the value be application/json for these headers', () => {
    expect(getDefaultHeaders()).toMatchObject({
      [SERVER_HEADERS.ACCEPT]: 'application/json',
      [SERVER_HEADERS.CONTENT_TYPE]: 'application/json',
    })
  })
})

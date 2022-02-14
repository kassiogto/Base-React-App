import Server from '../Server'
import { transformResponse } from '../Transformer'

describe('Headers', () => {
  it('should use the baseUrl from the .env file', () => {
    expect(Server.defaults.baseURL).toBe(process.env.REACT_APP_API_URL)
  })

  it('should use the auth username and password from the .env file', () => {
    expect(Server.defaults.auth).toEqual({
      username: process.env.REACT_APP_API_USER || '',
      password: process.env.REACT_APP_API_PASSWORD || '',
    })
  })

  it('should use the transformation function to transform the response', () => {
    expect(Server.defaults.transformResponse).toContain(transformResponse)
  })
})

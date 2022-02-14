import { LOCAL_STORAGE_KEYS } from '../LocalStorage'

describe('LocalStorage Keys', () => {
  it('should have the correct prefix in every local storage key', () => {
    const includesPrefix = Object.values(LOCAL_STORAGE_KEYS).every((value) =>
      value.includes('@UNICODE_WEB/'),
    )

    expect(includesPrefix).toBe(true)
  })
})

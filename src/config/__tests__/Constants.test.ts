import { LOCAL_STORAGE_KEYS } from '../LocalStorage'

describe('Constants', () => {
  it('should have values as strings', () => {
    const allValuesAreStrings = Object.values(LOCAL_STORAGE_KEYS).every(
      (value) => typeof value === 'string',
    )

    expect(allValuesAreStrings).toBe(true)
  })
})

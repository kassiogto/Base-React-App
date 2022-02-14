import * as EndPoints from '../EndPoints'

describe('EndPoints', () => {
  it('should all end points be strings', () => {
    const apiClasses = Object.values(EndPoints)

    const hasOnlyStrings = apiClasses.every((apiClass) => {
      return Object.values(apiClass).every(
        (method) => typeof method === 'string',
      )
    })

    expect(hasOnlyStrings).toBe(true)
  })

  it('should have just one slash in the middle of string', () => {
    const apiClasses = Object.values(EndPoints)

    const hasSlashInMiddleOfString = apiClasses.every((apiClass) => {
      return Object.values(apiClass).every(
        (method) => method.split('/').length === 2,
      )
    })

    expect(hasSlashInMiddleOfString).toBe(true)
  })
})

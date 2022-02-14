import { serverStructureFactory } from '../Factory'

describe('Server Factory Functions', () => {
  it('should build a structure known by the server', () => {
    const data = {
      numericValue: 5,
      stringValue: 'A string',
      anNumberArray: [1, 2, 3],
    }

    const dataWithServerStructure = serverStructureFactory(data, 'MyTable')

    expect(dataWithServerStructure).toEqual({
      TABELA: 'MyTable',
      DADOS: [data],
    })
  })
})

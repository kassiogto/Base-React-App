import { makeServerResponse } from 'src/tests'

import { transformResponse } from '../Transformer'
import { ApiResponse } from '../Types'

describe('Transformer', () => {
  it('should return an empty object if there is no api response', () => {
    expect(transformResponse('')).toEqual({})
  })

  it('should transform a success response to the correct format', () => {
    const successResponse: ApiResponse = {
      result: [
        {
          Resultado: '0',
          Conteudo: {
            TABELA: 'Table',
            DADOS: [{ first: 'first', second: 'second' }],
          },
          MensagensSucesso: [
            { Codigo: '001', Mensagem: 'Message', Ajuda: 'Help' },
          ],
        },
      ],
    }

    const json = JSON.stringify(successResponse)
    const transformedResponse = transformResponse(json)

    const { data: serverResponse } = makeServerResponse({
      isSuccessful: true,
      data: [{ first: 'first', second: 'second' }],
      table: 'Table',
      successMessages: [
        {
          code: '001',
          message: 'Message',
          help: 'Help',
          fullMessage: '001: Message',
        },
      ],
    })

    expect(transformedResponse.table).toBe(serverResponse.table)
    expect(transformedResponse.data).toEqual(serverResponse.data)
    expect(transformedResponse.result).toBe(serverResponse.result)
    expect(transformedResponse.hasData).toBe(serverResponse.hasData)
    expect(transformedResponse.messages).toEqual(serverResponse.messages)
    expect(transformedResponse.isSuccessful).toBe(serverResponse.isSuccessful)
    expect(transformedResponse.successMessages).toEqual(
      serverResponse.successMessages,
    )
  })

  it('should transform an error response to the correct format', () => {
    const errorResponse: ApiResponse = {
      result: [
        {
          Resultado: '1',
          Conteudo: {
            TABELA: 'Table',
            DADOS: [],
          },
          Mensagens: [{ Codigo: '001', Mensagem: 'Message', Ajuda: 'Help' }],
        },
      ],
    }

    const json = JSON.stringify(errorResponse)
    const transformedResponse = transformResponse(json)

    const { data: serverResponse } = makeServerResponse({
      isSuccessful: false,
      data: [],
      table: 'Table',
      messages: [
        {
          code: '001',
          message: 'Message',
          help: 'Help',
          fullMessage: '001: Message',
        },
      ],
    })

    expect(transformedResponse.table).toBe(serverResponse.table)
    expect(transformedResponse.data).toEqual(serverResponse.data)
    expect(transformedResponse.result).toBe(serverResponse.result)
    expect(transformedResponse.hasData).toBe(serverResponse.hasData)
    expect(transformedResponse.messages).toEqual(serverResponse.messages)
    expect(transformedResponse.isSuccessful).toBe(serverResponse.isSuccessful)
    expect(transformedResponse.successMessages).toEqual(
      serverResponse.successMessages,
    )
  })

  it('should all functions return the expected value', () => {
    const responseWithAllDataAndMessages: ApiResponse = {
      result: [
        {
          Resultado: '0',
          Conteudo: {
            TABELA: 'Table',
            DADOS: [{ first: 'first' }, { second: 'second' }],
          },
          Mensagens: [{ Codigo: '001', Mensagem: 'Error', Ajuda: 'Help 1' }],
          MensagensSucesso: [
            { Codigo: '002', Mensagem: 'Success', Ajuda: 'Help 2' },
          ],
        },
      ],
    }

    const json = JSON.stringify(responseWithAllDataAndMessages)
    const transformedResponse = transformResponse(json)

    const { data: serverResponse } = makeServerResponse<any>({
      isSuccessful: true,
      data: [{ first: 'first' }, { second: 'second' }],
      table: 'Table',
      messages: [
        {
          code: '001',
          message: 'Error',
          help: 'Help 1',
          fullMessage: '001: Error',
        },
      ],
      successMessages: [
        {
          code: '002',
          message: 'Success',
          help: 'Help 2',
          fullMessage: '002: Success',
        },
      ],
    })

    expect(transformedResponse.getFirstData()).toMatchObject(
      serverResponse.getFirstData(),
    )

    expect(transformedResponse.getFirstHelpText()).toBe(
      serverResponse.getFirstHelpText(),
    )

    expect(transformedResponse.getFirstMessage()).toBe(
      serverResponse.getFirstMessage(),
    )

    expect(transformedResponse.getFirstMessageObj()).toEqual(
      serverResponse.getFirstMessageObj(),
    )

    expect(transformedResponse.getFirstSuccessMessage()).toBe(
      serverResponse.getFirstSuccessMessage(),
    )

    expect(transformedResponse.getFirstSuccessMessageObj()).toEqual(
      serverResponse.getFirstSuccessMessageObj(),
    )
  })
})

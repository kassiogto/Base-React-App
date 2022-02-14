import { AxiosServerResponse, ServerMessage } from 'src/services'

export interface MakeServerResponseParams<T = any[]> {
  isSuccessful?: boolean
  data?: T[]
  table?: string
  messages?: ServerMessage[]
  successMessages?: ServerMessage[]
}

export const makeServerResponse = <T = any[]>({
  data,
  isSuccessful = true,
  table = '',
  messages = [],
  successMessages = [],
}: MakeServerResponseParams<T>): Pick<AxiosServerResponse<T, any>, 'data'> => {
  return {
    data: {
      content: {
        TABELA: table,
        DADOS: data || [],
      },
      data: data || [],
      table,
      isSuccessful,
      messages,
      successMessages,
      hasData: !!data && !!data.length,
      result: isSuccessful ? 0 : 1,

      getFirstData: (def) => (data && data.length ? data[0] : def),

      getFirstHelpText: (def) =>
        messages && messages.length ? messages[0].help : def,

      getFirstMessage: (def) =>
        messages && messages.length ? messages[0].message : def,

      getFirstMessageObj: () =>
        messages && messages.length ? messages[0] : undefined,

      getFirstSuccessMessage: (def) =>
        successMessages && successMessages.length
          ? successMessages[0].message
          : def,

      getFirstSuccessMessageObj: () =>
        successMessages && successMessages.length
          ? successMessages[0]
          : undefined,
    },
  }
}

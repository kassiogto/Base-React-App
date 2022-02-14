import { AxiosResponse } from 'axios'

export interface ApiMessage {
  Codigo: string
  Mensagem: string
  Ajuda: string
}

export interface ApiResult<T = any> {
  Resultado: '0' | '1'
  Mensagens?: ApiMessage[]
  MensagensSucesso?: ApiMessage[]
  Conteudo: {
    TABELA: string
    DADOS: T[]
  }
}

export interface ApiResponse<T = any> {
  result: ApiResult<T>[]
}

export interface ServerMessage {
  code: string
  message: string
  help: string
  fullMessage: string
}

export interface ServerResponse<T = any, U = any> {
  result: number
  content: U
  table: string
  data: T[]
  isSuccessful: boolean
  hasData: boolean
  messages: ServerMessage[]
  successMessages: ServerMessage[]
  getFirstData: (def?: any | null) => T | undefined | null
  getFirstMessage: (def?: string | null) => string | undefined | null
  getFirstSuccessMessage: (def?: string | null) => string | undefined | null
  getFirstHelpText: (def?: string | null) => string | undefined | null
  getFirstMessageObj: () => ServerMessage | undefined | null
  getFirstSuccessMessageObj: () => ServerMessage | undefined | null
}

export type AxiosServerResponse<T = any, U = any> = AxiosResponse<
  ServerResponse<T, U>
>

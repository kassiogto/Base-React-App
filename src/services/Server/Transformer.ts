import { ServerResponse, ServerMessage, ApiMessage, ApiResponse } from './Types'

export const transformResponse = (json: string): ServerResponse => {
  const apiData: ApiResponse | null = json ? JSON.parse(json) : null

  if (apiData && apiData.result) {
    const [firstResult] = apiData.result
    const { Resultado, Conteudo, Mensagens, MensagensSucesso } = firstResult

    const mapMessages = (msg: ApiMessage): ServerMessage => ({
      code: msg.Codigo,
      message: msg.Mensagem,
      help: msg.Ajuda,
      fullMessage: `${msg.Codigo}: ${msg.Mensagem}`,
    })

    const content = Conteudo
    const table = Conteudo.TABELA
    const data = Conteudo.DADOS
    const isSuccessful = Resultado === '0'
    const messages = Mensagens ? Mensagens.map(mapMessages) : []
    const hasData = !!Conteudo.DADOS && Conteudo.DADOS.length > 0

    const successMessages = MensagensSucesso
      ? MensagensSucesso.map(mapMessages)
      : []

    const newData: ServerResponse = {
      result: isSuccessful ? 0 : 1,

      content,
      table,
      data,
      isSuccessful,
      hasData,
      messages,
      successMessages,

      getFirstData(def) {
        if (!hasData) return def
        const [firstData] = data
        return firstData
      },

      getFirstMessage(def) {
        const [firstMessageObj] = messages
        return firstMessageObj ? firstMessageObj.message : def
      },

      getFirstSuccessMessage(def) {
        const [firstMessageObj] = successMessages
        return firstMessageObj ? firstMessageObj.message : def
      },

      getFirstHelpText(def) {
        const [firstMessageObj] = messages
        return firstMessageObj ? firstMessageObj.help : def
      },

      getFirstMessageObj() {
        const [firstMessageObj] = messages
        return firstMessageObj
      },

      getFirstSuccessMessageObj() {
        const [firstMessageObj] = successMessages
        return firstMessageObj
      },
    }

    return newData
  }

  return {} as ServerResponse
}

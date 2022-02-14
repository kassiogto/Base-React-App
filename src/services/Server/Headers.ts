import { CONSTANTS } from 'src/config'

export enum SERVER_HEADERS {
  ACCEPT = 'Accept',
  CONTENT_TYPE = 'Content-Type',
  REPRES_CODIGO = 'repres_codigo',
  PUBUSUARIO = 'PubUsuario',
  PUBEMPRESA = 'PubEmpresa',
  PUBUSUARIOALTERAEMPRESA = 'PubUsuarioAlteraEmpresa',
  PUBUSUARIOVISUALIZAREMPLOG = 'PubUsuarioVisualizarEmpLog',
  PUBSISTEMA = 'PubSistema',
  PUBSISTEMADESCRICAO = 'PubSistemaDescricao',
  PUBUPPERCASE = 'PubUpperCase',
  PUBCLIENTEREGISTRO = 'PubClienteRegistro',
  PUBMACADDRESS = 'PubMacAddress',
}

export const getDefaultHeaders = () => ({})

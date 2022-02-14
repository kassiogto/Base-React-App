/* eslint-disable @typescript-eslint/no-unused-vars */

namespace UncDashboard {
  namespace UnionTypes {
    type YesOrNo = 'S' | 'N'
    type ActiveOrInactive = 'A' | 'I'
    type DashboardCategory = '001' | '002' | '003' | '004'
    type AnalysisType = '01' | '02' | '03' | '04'
    type SellerType = 'A' | 'I' | 'E'
  }

  interface User {
    usuario_codigo: string
    usuario_login: string
    usuario_emaillogin: string
    usuario_senha?: string
    usuario_permitealterarempresa: UnionTypes.YesOrNo
  }

  interface Login {
    login_macadress: string
  }

  interface Company {
    empresa_codigo: string
    empresa_razao: string
    empresa_fantasia: string
  }

  interface Representative {
    repres_codigo: string
    repres_descricao: string
  }

  interface Customer {
    cliente_codigo: string
  }

  interface AnalysisType {
    tipoanalise_codigo: number
    tipoanalise_descricao: string
    tipoanalise_tipo?: UnionTypes.AnalysisType
  }

  interface Analysis {
    analise_codigo: number
    analise_descricao: string
    tipoanalise_codigo: number
    analise_tipovendedor: UnionTypes.SellerType
    analise_tiposdevenda?: string
    analise_empresas?: string
  }

  interface Dashboard {
    dash_codigo: number
    dash_descricao: string
    dash_tipo: UnionTypes.DashboardCategory
    dash_automatico: UnionTypes.YesOrNo
    dash_situacao: UnionTypes.ActiveOrInactive
    dash_tempotelas?: number
  }

  interface DashboardScreen {
    teladash_codigo: number
    teladash_descricao: string
  }

  interface DashboardScreens {
    dashtelas_codigo: number
    teladash_codigo: number
    dash_codigo: number
    dashtelas_seq: number
  }

  interface DashboardScreenAnalysis {
    telaanalise_codigo: number
    analise_codigo: number
    teladash_codigo: number
    telaanalise_seq: number
  }

  interface SalesType {
    tipopedvenda_codigo: string
    tipopedvenda_descricao: string
  }

  namespace ComposedTypes {
    interface DashboardDataValues {
      serie_nome?: string
      serie_nomealternativo?: string
      serie_valor?: number
      serie_percentual?: number
      card_valor?: number
      ano?: number
      mes?: number
      dia?: number
      diautil?: string
      serie_titulo?: string
      serie_metacomercial?: number
      serie_metarecalculada?: number
      serie_percentualatingido?: number
      serie_vendasefetivadas?: number
    }

    interface DashboardDataAnalysis {
      telaanalise_codigo: number
      telaanalise_seq: number
      analise_codigo: number
      analise_descricao: string
      teladash_codigo: number
      tipoanalise_codigo: number
      tipoanalise_descricao: string
      tipoanalise_tipo: UnionTypes.AnalysisType
      DADOS?: DashboardDataValues[]
    }

    interface DashboardDataScreen {
      teladash_descricao: string
      dashtelas_codigo: number
      teladash_codigo: number
      dashtelas_seq: number
      LISTA_ANALISES: DashboardDataAnalysis[]
    }

    interface teladash_analise {
      analise_codigo: string
    }

    interface AnalysesData {
      telaanalise_codigo: number
      telaanalise_seq: number
      analise_codigo: number
      analise_descricao: string
      teladash_codigo: number
      tipoanalise_codigo: number
      tipoanalise_descricao: string
      tipoanalise_tipo: UnionTypes.AnalysisType
    }

    interface FullDashboardScreen {
      dash_tipo: string
      dash_codigo: number
      dashtelas_seq: number
      dash_situacao: string
      dash_descricao: string
      dash_tempotelas: number
      teladash_codigo: number
      dashtelas_codigo: number
      teladash_descricao: string
      LISTA_TELAS: DashboardDataScreen[]
      TELADASH_ANALISE: teladash_analise[]
    }

    interface GetDashboardScreen {
      dash_tipo: string
      dash_codigo: number
      dashtelas_seq: number
      dash_situacao: string
      dash_descricao: string
      dash_tempotelas: number
      teladash_codigo: number
      dashtelas_codigo: number
      teladash_descricao: string
      LISTA_TELAS: DashboardDataScreen[]
    }

    interface NextSequenceScreen {
      DASHTELAS_SEQ: string
    }

    interface DashboardData extends Dashboard {
      LISTA_TELAS: DashboardDataScreen[]
    }

    type UserWithoutPassword = Omit<User, 'usuario_senha'>
  }
}

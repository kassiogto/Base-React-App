export const serverStructureFactory = <T extends object>(
  data: T,
  table: string = '',
) => {
  return {
    TABELA: table,
    DADOS: [data],
  }
}

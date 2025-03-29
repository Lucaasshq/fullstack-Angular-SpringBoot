export interface Lancamento {
  tipo: 'DESPESA' | 'RECEITA',
  descricao:string,
  dataVencimento: string,
  dataPagamento: string | null,
  valor: number,
  pessoa: string;
}

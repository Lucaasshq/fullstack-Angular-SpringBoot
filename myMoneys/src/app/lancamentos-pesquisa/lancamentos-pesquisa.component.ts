import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Lancamento } from '../Model/Lancamentos';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-lancamentos-pesquisa',
  imports: [
    CommonModule,
    InputTextModule,
    FluidModule,
    ButtonModule,
    TableModule,
    TooltipModule,
  ],
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrl: './lancamentos-pesquisa.component.css',
})
export class LancamentosPesquisaComponent {
  lancamentos: Lancamento[] = [
    {
      tipo: 'DESPESA',
      descricao: 'Compra de pão',
      dataVencimento: '30/06/2017',
      dataPagamento: null,
      valor: 5,
      pessoa: 'Padaria do José',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de leite',
      dataVencimento: '01/07/2017',
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Supermercado da Dona Maria',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Venda de pão',
      dataVencimento: '05/07/2017',
      dataPagamento: '06/07/2017',
      valor: 10,
      pessoa: 'Cliente A',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de café',
      dataVencimento: '07/07/2017',
      dataPagamento: '08/07/2017',
      valor: 7.5,
      pessoa: 'Café & Companhia',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Venda de café',
      dataVencimento: '10/07/2017',
      dataPagamento: '11/07/2017',
      valor: 15,
      pessoa: 'Cliente B',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra de frutas',
      dataVencimento: '15/07/2017',
      dataPagamento: null,
      valor: 12.25,
      pessoa: 'Feira da Praça',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Venda de frutas',
      dataVencimento: '16/07/2017',
      dataPagamento: '17/07/2017',
      valor: 18.3,
      pessoa: 'Cliente C',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Aluguel do mês',
      dataVencimento: '30/07/2017',
      dataPagamento: '31/07/2017',
      valor: 500,
      pessoa: 'Imobiliária XYZ',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Venda de equipamento',
      dataVencimento: '05/08/2017',
      dataPagamento: '06/08/2017',
      valor: 250,
      pessoa: 'Cliente D',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Manutenção do computador',
      dataVencimento: '10/08/2017',
      dataPagamento: '11/08/2017',
      valor: 75,
      pessoa: 'Assistência Técnica A',
    },
  ];
}

import { Cliente } from './Cliente';
import { Servico } from './Servico';

export interface Agendamento {
  id?: number | string;
  status: 'Pendente' | 'Confirmado' | 'Cancelado' | 'Concluido' | string;
  dataHora: Date | string;
  lojaId?: number | string;
  clienteId: number | string;
  servicoId: number | string;
  
  cliente?: Cliente;
  servico?: Servico;

  criadoEm?: Date | string;
  atualizadoEm?: Date | string;
}

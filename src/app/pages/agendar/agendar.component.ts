import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendar.component.html',
  styleUrl: './agendar.component.css'
})
export class AgendarComponent {
  idLoja: string | null = null;
  step = 1;

  servicoSelecionado: any = null;
  dataSelecionada: string | null = null;
  horarioSelecionado: string | null = null;

  clienteNome: string = '';
  clienteWhatsapp: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.idLoja = params.get('idLoja');
    });
  }

  selecionarServico(servico: any) {
    this.servicoSelecionado = servico;
    this.step = 2;
  }

  selecionarHorario(data: string, horario: string) {
    this.dataSelecionada = data;
    this.horarioSelecionado = horario;
    this.step = 3;
  }

  confirmarAgendamento() {
    if (this.clienteNome && this.clienteWhatsapp) {
      this.step = 4;
    }
  }
}

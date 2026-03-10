import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { BloqueiosComponent } from './pages/bloqueios/bloqueios.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { DadosLojaComponent } from './pages/dados-loja/dados-loja.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'bloqueios', component: BloqueiosComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: 'dados-loja', component: DadosLojaComponent },
  { path: 'clientes', component: ClientesComponent } // Rota nova aqui!
];
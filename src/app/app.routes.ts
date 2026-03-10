import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { BloqueiosComponent } from './pages/bloqueios/bloqueios.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { DadosLojaComponent } from './pages/dados-loja/dados-loja.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotificacoesComponent } from './pages/notificacoes/notificacoes.component';
import { LoginComponent } from './pages/login/login.component'; // Import Novo
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { NovaSenhaComponent } from './pages/nova-senha/nova-senha.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent }, // Rota de Login
  { path: 'servicos', component: ServicosComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'bloqueios', component: BloqueiosComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent },
  { path: 'dados-loja', component: DadosLojaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent }, // Rota Nova
  { path: 'nova-senha', component: NovaSenhaComponent }, // Rota Nova
  { path: 'perfil', component: PerfilComponent },
  { path: 'cadastro', component: CadastroComponent }, // Rota Nova!
  { path: 'onboarding', component: OnboardingComponent }, // ROTA FINAL!
  { path: 'notificacoes', component: NotificacoesComponent }
];
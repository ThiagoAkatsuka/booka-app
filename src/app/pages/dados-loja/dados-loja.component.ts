import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dados-loja',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, RouterModule],
  templateUrl: './dados-loja.component.html',
  styleUrl: './dados-loja.component.css'
})
export class DadosLojaComponent {}
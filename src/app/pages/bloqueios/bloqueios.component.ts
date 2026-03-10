import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bloqueios',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, RouterModule],
  templateUrl: './bloqueios.component.html',
  styleUrl: './bloqueios.component.css'
})
export class BloqueiosComponent {}
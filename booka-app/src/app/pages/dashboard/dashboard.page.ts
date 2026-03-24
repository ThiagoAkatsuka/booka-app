import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  notificationsOutline, calendarOutline, cashOutline, 
  trendingUpOutline, trendingDownOutline, ellipsisHorizontal,
  home, calendarClearOutline, cutOutline, settingsOutline, add
} from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, CommonModule, FormsModule]
})
export class DashboardPage implements OnInit {

  metrics = [
    { title: 'Agendamentos Hoje', value: '24', trend: '+12% vs. ontem', icon: 'calendar-outline', isUp: true },
    { title: 'Receita Diária', value: 'R$ 1.250,00', trend: '+8% vs. ontem', icon: 'cash-outline', isUp: true }
  ];

  weeklyTotal = 'R$ 8.400';
  weeklyPerformance = [
    { day: 'S', height: 40, active: false },
    { day: 'T', height: 75, active: true },
    { day: 'Q', height: 50, active: false },
    { day: 'Q', height: 35, active: false },
    { day: 'S', height: 90, active: true },
    { day: 'S', height: 60, active: false },
    { day: 'D', height: 45, active: false }
  ];

  appointments = [
    { time: '10:00 AM', client: 'Sarah Lee', service: 'Corte de Cabelo & Escova', status: 'Confirmado', statusId: 'confirmed' },
    { time: '11:30 AM', client: 'Mark Chen', service: 'Barba Terapia', status: 'Pendente', statusId: 'pending' },
    { time: '01:00 PM', client: 'Emily Davis', service: 'Consultoria Visual', status: 'Confirmado', statusId: 'confirmed' },
    { time: '02:30 PM', client: 'Chris Patel', service: 'Spa Completo', status: 'Cancelado', statusId: 'cancelled' },
    { time: '04:00 PM', client: 'Jessica Kim', service: 'Coloração & Corte', status: 'Confirmado', statusId: 'confirmed' },
  ];

  constructor() { 
    addIcons({
      notificationsOutline, calendarOutline, cashOutline, 
      trendingUpOutline, trendingDownOutline, ellipsisHorizontal,
      home, calendarClearOutline, cutOutline, settingsOutline, add
    });
  }

  ngOnInit() {
  }

}

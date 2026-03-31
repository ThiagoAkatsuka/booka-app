import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline, chevronForwardOutline, checkmarkCircle,
  checkmarkOutline, cutOutline, calendarOutline, timeOutline,
  personOutline, callOutline, mailOutline, chatbubbleOutline
} from 'ionicons/icons';

interface Service {
  id: number;
  name: string;
  duration: string;
  price: string;
  emoji: string;
}

interface TimeSlot {
  time: string;
  unavailable?: boolean;
}

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, CommonModule, FormsModule]
})
export class AgendamentoPage implements OnInit {

  currentStep = 1;
  isConfirmed = false;

  stepTitles = [
    'Escolher Serviço',
    'Data e Horário',
    'Seus Dados',
    'Confirmar'
  ];

  // --- Step 1 ---
  services: Service[] = [
    { id: 1, name: 'Corte de Cabelo', duration: '45 min', price: '50,00', emoji: '✂️' },
    { id: 2, name: 'Barba Completa', duration: '30 min', price: '35,00', emoji: '🪒' },
    { id: 3, name: 'Corte + Barba', duration: '1h 15min', price: '75,00', emoji: '💈' },
    { id: 4, name: 'Hidratação Capilar', duration: '60 min', price: '60,00', emoji: '💆' },
    { id: 5, name: 'Manicure', duration: '50 min', price: '45,00', emoji: '💅' },
    { id: 6, name: 'Consultoria Visual', duration: '30 min', price: '80,00', emoji: '👔' },
  ];
  selectedService: Service | null = null;

  // --- Step 2 ---
  weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  currentMonth = 0;
  currentYear = 0;
  calendarDays: (number | null)[] = [];
  selectedDay: number | null = null;
  todayDate = 0;
  currentMonthLabel = '';

  availableSlots: TimeSlot[] = [];
  selectedSlot: TimeSlot | null = null;

  private allSlots: TimeSlot[] = [
    { time: '08:00' }, { time: '08:30' }, { time: '09:00' },
    { time: '09:30', unavailable: true }, { time: '10:00' }, { time: '10:30' },
    { time: '11:00', unavailable: true }, { time: '11:30' }, { time: '14:00' },
    { time: '14:30' }, { time: '15:00', unavailable: true }, { time: '15:30' },
    { time: '16:00' }, { time: '16:30' }, { time: '17:00', unavailable: true },
  ];

  // --- Step 3 ---
  clientData = { name: '', phone: '', email: '', notes: '' };

  private monthNames = [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
  ];

  constructor(private router: Router) {
    addIcons({
      chevronBackOutline, chevronForwardOutline, checkmarkCircle,
      checkmarkOutline, cutOutline, calendarOutline, timeOutline,
      personOutline, callOutline, mailOutline, chatbubbleOutline
    });
  }

  ngOnInit() {
    const now = new Date();
    this.currentMonth = now.getMonth();
    this.currentYear = now.getFullYear();
    this.todayDate = now.getDate();
    this.buildCalendar();
  }

  buildCalendar() {
    this.currentMonthLabel = `${this.monthNames[this.currentMonth]} ${this.currentYear}`;
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.calendarDays = [];
    for (let i = 0; i < firstDay; i++) this.calendarDays.push(null);
    for (let d = 1; d <= daysInMonth; d++) this.calendarDays.push(d);
  }

  prevMonth() {
    if (this.currentMonth === 0) { this.currentMonth = 11; this.currentYear--; }
    else this.currentMonth--;
    this.selectedDay = null;
    this.selectedSlot = null;
    this.buildCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) { this.currentMonth = 0; this.currentYear++; }
    else this.currentMonth++;
    this.selectedDay = null;
    this.selectedSlot = null;
    this.buildCalendar();
  }

  selectDay(day: number) {
    this.selectedDay = day;
    this.selectedSlot = null;
    this.availableSlots = [...this.allSlots];
  }

  selectService(s: Service) { this.selectedService = s; }
  selectSlot(s: TimeSlot) { this.selectedSlot = s; }

  canProceed(): boolean {
    if (this.currentStep === 1) return !!this.selectedService;
    if (this.currentStep === 2) return !!this.selectedDay && !!this.selectedSlot;
    if (this.currentStep === 3) return !!this.clientData.name.trim() && !!this.clientData.phone.trim();
    return true;
  }

  nextStep() { if (this.currentStep < 4 && this.canProceed()) this.currentStep++; }
  prevStep() { if (this.currentStep > 1) this.currentStep--; }

  confirm() {
    this.isConfirmed = true;
  }

  resetFlow() {
    this.currentStep = 1;
    this.isConfirmed = false;
    this.selectedService = null;
    this.selectedDay = null;
    this.selectedSlot = null;
    this.clientData = { name: '', phone: '', email: '', notes: '' };
  }

  goBack() {
    if (this.currentStep > 1) this.prevStep();
    else this.router.navigate(['/dashboard']);
  }
}

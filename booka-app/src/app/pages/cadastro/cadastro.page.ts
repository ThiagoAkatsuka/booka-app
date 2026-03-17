import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { 
  IonContent, IonCard, IonSegment, IonSegmentButton, 
  IonLabel, IonItem, IonInput, IonButton, IonIcon, 
  IonTextarea, IonRow, IonCol, IonProgressBar // <-- Importado aqui
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { eyeOutline, arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    IonContent, IonCard, IonSegment, IonSegmentButton, 
    IonLabel, IonItem, IonInput, IonButton, IonIcon, 
    IonTextarea, IonRow, IonCol, IonProgressBar // <-- Adicionado na lista
  ]
})
export class CadastroPage implements OnInit {
  
  tipoUsuario: string = 'cliente'; 
  etapaAtual: number = 1; 
  totalEtapas: number = 2; // <-- Controle do total para a barra

  constructor() { 
    addIcons({ eyeOutline, arrowBackOutline });
  }

  ngOnInit() {}

  proximaEtapa() {
    this.etapaAtual = 2;
  }

  etapaAnterior() {
    this.etapaAtual = 1;
  }

}
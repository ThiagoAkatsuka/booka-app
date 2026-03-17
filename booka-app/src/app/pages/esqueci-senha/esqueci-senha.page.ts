import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { 
  IonContent, IonCard, IonLabel, IonItem, 
  IonInput, IonButton, IonIcon 
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    IonContent, IonCard, IonLabel, IonItem, 
    IonInput, IonButton, IonIcon
  ]
})
export class EsqueciSenhaPage implements OnInit {

  constructor() {
    addIcons({ arrowBackOutline });
  }

  ngOnInit() {}

}
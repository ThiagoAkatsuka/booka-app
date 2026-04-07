import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-bloqueios',
  standalone: true,
  imports: [RouterModule, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonFab, IonFabButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './bloqueios.component.html',
  styleUrl: './bloqueios.component.css'
})
export class BloqueiosComponent {
  constructor() { addIcons({ addOutline, lockClosedOutline }); }
}

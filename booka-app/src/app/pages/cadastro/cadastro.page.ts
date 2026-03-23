import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { IonContent, IonIcon, IonInput, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  standalone: true,
  imports: [FormsModule, RouterModule, IonContent, IonIcon, IonInput, IonButton],
})
export class CadastroPage {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirm = false;

  constructor(private router: Router) {
    addIcons({ arrowBackOutline, eyeOutline, eyeOffOutline });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  signUp() {
    this.router.navigate(['/login']);
  }
}

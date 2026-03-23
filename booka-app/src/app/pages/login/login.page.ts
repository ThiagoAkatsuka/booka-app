import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { IonContent, IonIcon, IonInput, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmark, eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  imports: [FormsModule, RouterModule, IonContent, IonIcon, IonInput, IonButton],
})
export class LoginPage {
  email = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {
    addIcons({ bookmark, eyeOutline, eyeOffOutline });
  }

  signIn() {
    this.router.navigate(['/home']);
  }
}

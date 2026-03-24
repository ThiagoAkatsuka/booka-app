import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { IonContent, IonIcon, IonInput, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline, logoGoogle, logoApple } from 'ionicons/icons';

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
    addIcons({ eyeOutline, eyeOffOutline, logoGoogle, logoApple });
  }

  signIn() {
    this.router.navigate(['/dashboard']);
  }
}

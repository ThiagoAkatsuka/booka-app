import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonSpinner, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, IonContent, IonCard, IonItem, IonLabel, IonInput, IonButton, IonIcon, IonSpinner]
})
export class EsqueciSenhaPage {
  recoverForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController
  ) {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async recoverPassword() {
    if (this.recoverForm.invalid) {
      this.recoverForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    // Simulate API call to backend service
    setTimeout(async () => {
      this.isLoading = false;
      const toast = await this.toastController.create({
        message: 'Se essa conta existir, um e-mail de recuperação foi enviado!',
        duration: 4000,
        color: 'success',
        position: 'bottom',
        icon: 'checkmark-circle-outline'
      });
      await toast.present();
      this.recoverForm.reset();
    }, 1500);
  }
}

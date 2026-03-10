import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  password = '';
  confirmPassword = '';
  showPassword = false;
  
  // Nova variável para controlar o dropdown mágico
  showRequirements = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Quando clica no campo
  onPasswordFocus() {
    this.showRequirements = true;
  }

  // Quando sai do campo (com um pequeno atraso pra dar tempo de clicar no olhinho sem sumir)
  onPasswordBlur() {
    setTimeout(() => {
      this.showRequirements = false;
    }, 150);
  }

  get hasMinLength() {
    return this.password.length >= 8;
  }

  get hasNumber() {
    return /[0-9]/.test(this.password);
  }

  get hasSpecialChar() {
    return /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
  }

  get passwordsMatch() {
    return this.password === this.confirmPassword && this.password.length > 0;
  }
}
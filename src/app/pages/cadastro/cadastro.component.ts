import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  
  // Nova variável para controlar o dropdown mágico
  showRequirements = false;

  private authService = inject(AuthService);
  private router = inject(Router);

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

  onSubmit() {
    if (!this.fullName || !this.email || !this.password) {
      alert('Preencha os campos obrigatórios!');
      return;
    }
    if (!this.passwordsMatch || !this.hasMinLength) {
      alert('Verifique os requisitos da senha!');
      return;
    }

    this.authService.register(this.fullName, this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/onboarding']);
      },
      error: (err) => {
        alert('Erro ao realizar cadastro.');
        console.error(err);
      }
    });
  }
}
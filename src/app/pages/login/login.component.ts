import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  
  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit() {
    if (!this.email || !this.password) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        const role = this.authService.getRole();
        if (role === 'PROFISSIONAL') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/explorar']);
        }
      },
      error: (err) => {
        alert('Erro ao fazer login. Verifique suas credenciais.');
        console.error(err);
      }
    });
  }
}
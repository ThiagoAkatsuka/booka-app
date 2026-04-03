import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  login(email: string, senha: string) {
    return this.http.post<{ token: string, usuario: any }>(`${this.apiUrl}/auth/login`, { email, senha })
      .pipe(
        tap(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
        })
      );
  }

  register(nome: string, email: string, senha: string) {
    return this.http.post<{ token: string, usuario: any }>(`${this.apiUrl}/auth/register`, { nome, email, senha })
      .pipe(
        tap(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    if (typeof window === 'undefined') return false; // Compatibilidade SSR
    return !!localStorage.getItem('token');
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Loja } from '../models';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/loja`;

  buscarDados(): Observable<Loja> {
    return this.http.get<Loja>(this.apiUrl);
  }

  atualizarDados(loja: Partial<Loja>): Observable<Loja> {
    return this.http.put<Loja>(this.apiUrl, loja);
  }

  buscarProfissionalPorId(id: string | number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/profissionais/${id}`).pipe(
      timeout(300),
      catchError(error => {
        console.warn('API de profissionais abstrata não está pronta ou offline. Usando fallback estático.');
        return of({
          id,
          nome: 'Profissional Dinâmico',
          img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlmfgo6Kxn_z7ZBiZT9Uto-k4k3Bcl-sC1AqA11Vk2PtEXhgebXNzPFDh-q_EgrLXT7GTDah5udAwMFct_ZRi6beBAB4tfcfGfGp7s-4tpkxZVzOY-BtNwWaPwhaz6wCNowAWlzV3xWJOYZ6-zKlFicEAYJvby83AkBqkGBSOCEBspaif1uv_W1ZutG05Wr5AO3Mj1Q6H0_8Slh2QUPGSWtcYQb3nxBlsJSmyJQHrU3VigeNrcu6Db8zI27Q1EX8X6xK4pXudIfhI',
          servicos: [
            { id: 1, nome: 'Serviço Premium 1', preco: 150, duracao: 60 },
            { id: 2, nome: 'Serviço Express', preco: 50, duracao: 30 }
          ]
        });
      })
    );
  }
}

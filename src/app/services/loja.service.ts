import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Loja } from '../models';
import { Observable } from 'rxjs';

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
}

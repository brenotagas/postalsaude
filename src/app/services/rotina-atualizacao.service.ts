import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RotinaAtualizacaoService {

  rotinaAtualizacaoUrl = 'http://localhost:62689/api/RotinaAtualizacao';

  constructor(private http: HttpClient) { }

  ListarRotinas() {
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/GetAll`);
  }

  BuscarRotinaPorId() { 
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/GetById?codigo=2`)
  }
}

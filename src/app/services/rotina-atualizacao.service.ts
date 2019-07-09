import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RotinaAtualizacaoService {

  rotinaAtualizacaoUrl = 'http://homapp.postalsaude.com.br:8080/api_arrecada/api';

  constructor(private http: HttpClient) { }

  ListarRotinas() {
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/GetAll`);
  }

  BuscarInformacoesPorMatricula(matricula) { 
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/Beneficiarios/${ matricula }/informacoes-basicas`)
  }
}

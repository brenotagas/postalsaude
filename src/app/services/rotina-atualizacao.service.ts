import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RotinaAtualizacaoService {

  rotinaAtualizacaoUrl = 'http://homapp.postalsaude.com.br:8080/api_arrecada/api';

  constructor(private http: HttpClient) { }

  BuscarInformacoesPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/Beneficiarios/${matricula}/informacoes-basicas`)
  }

  BuscarCompetenciasComDespesasPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/Beneficiarios/${matricula}/compentencias-com-despesas`)
  }

  BuscarMensalidadesAposentadoPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/Aposentados/${matricula}/mensalidades`)
  }

  BuscarParcelamentosAposentadoPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/Aposentados/${matricula}/parcelamentos`)
  }

  BuscarFichaFinanceiraAposentadoCopar1PorMatricula(matricula){
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/Aposentados/${matricula}/ficha-financeira-copar-i`)
  }

  BuscarFichaFinanceiraAposentadoCopar2PorMatricula(matricula){
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/Aposentados/${matricula}/ficha-financeira-copar-ii`)
  }

//Ativos

  BuscarMensalidadesAtivosPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.rotinaAtualizacaoUrl}/Ativos/${matricula}/mensalidades`)
  }

}

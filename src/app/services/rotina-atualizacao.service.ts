import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RotinaAtualizacaoService {

  urlApiArrecada = 'http://homapp.postalsaude.com.br:8080/api_arrecada/api';

  constructor(private http: HttpClient) { }

  BuscarInformacoesPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Beneficiarios/${matricula}/informacoes-basicas`)
  }

  BuscarCompetenciasComDespesasPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Beneficiarios/${matricula}/compentencias-com-despesas`)
  }

  // Aposentados

  BuscarMensalidadesAposentadoPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Aposentados/${matricula}/mensalidades`)
  }

  BuscarParcelamentosAposentadoPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Aposentados/${matricula}/parcelamentos`)
  }

  BuscarFichaFinanceiraAposentadoCopar1PorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Aposentados/${matricula}/ficha-financeira-copar-i`)
  }

  BuscarFichaFinanceiraAposentadoCopar2PorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Aposentados/${matricula}/ficha-financeira-copar-ii`)
  }

  BuscarInadimplenciasAposentadosPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Aposentados/${matricula}/inadimplencias`)
  }

  BuscarBoletosEmAbertoAposentadosPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Aposentados/${matricula}/boletos-em-aberto`)
  }

  //Ativos

  BuscarMensalidadesAtivosPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Ativos/${matricula}/mensalidades`)
  }

  BuscarFichaFinanceiraAtivoCopar1PorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Ativos/${matricula}/ficha-financeira-copar-i`)
  }

  BuscarFichaFinanceiraAtivoCopar2PorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Ativos/${matricula}/ficha-financeira-copar-ii`)
  }

  // Afastados

  BuscarMensalidadesAfastadosPorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Afastados/${matricula}/mensalidades`)
  }

  BuscarFichaFinanceiraAfastadosCopar1PorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Afastados/${matricula}/ficha-financeira-copar-i`)
  }

  BuscarFichaFinanceiraAfastadosCopar2PorMatricula(matricula) {
    return this.http.get<any[]>(`${this.urlApiArrecada}/Afastados/${matricula}/ficha-financeira-copar-ii`)
  }

}

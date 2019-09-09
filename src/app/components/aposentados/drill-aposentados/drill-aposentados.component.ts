import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';

@Component({
  selector: 'app-drill',
  templateUrl: './drill-aposentados.component.html',
  styleUrls: ['./drill-aposentados.component.css']
})
export class DrillComponent implements OnInit {

  carregando = false;
  matricula: string;
  dados: any;
  competencias: any;
  inadimplencias: any;
  boletos: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarInformacoesPorMatricula(this.matricula);
    //this.BuscarCompetenciasComDespesasPorMatricula(this.matricula);
    this.BuscarInadimplenciasPorMatricula(this.matricula);
    this.BuscarBoletosAbertosPorMatricula(this.matricula);
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      this.matricula = params.matricula;
    }, (error: any) => {
      console.log('Erro: ' + error);
    });
  }

  BuscarInformacoesPorMatricula(matricula: any) {
    this.rotinaservice.BuscarInformacoesPorMatricula(matricula).subscribe((res: any) => {
      this.dados = res.data;
      // console.log(this.dados);
    }, (error: any) => {
      console.log('Erro: ' + error);
    });
  }

  BuscarCompetenciasComDespesasPorMatricula(matricula: any) {
    this.rotinaservice.BuscarCompetenciasComDespesasPorMatricula(matricula).subscribe((res: any) => {
      this.competencias = res.data;
    }, (error: any) => {
      console.log('Erro: ' + error);
    });
  }

  BuscarInadimplenciasPorMatricula(matricula: any) {
    this.carregando = true;
    this.rotinaservice.BuscarInadimplenciasAposentadosPorMatricula(matricula).subscribe((res: any) => {
      this.inadimplencias = res;
      // console.log(this.inadimplencias);
      this.carregando = false
    }, (error: any) => {
      console.log('Erro: ' + error);
    });
  }

  BuscarBoletosAbertosPorMatricula(matricula: any) {
    this.carregando = true;
    this.rotinaservice.BuscarBoletosEmAbertoAposentadosPorMatricula(matricula).subscribe((res: any) => {
      this.boletos = res;
      //console.log(this.boletos);
      this.carregando = false;
    }, (error: any) => {
      console.log('Erro: ' + error);
    });
  }

}
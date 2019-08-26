import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';

@Component({
  selector: 'app-drill',
  templateUrl: './drill-aposentados.component.html',
  styleUrls: ['./drill-aposentados.component.css']
})
export class DrillComponent implements OnInit {

  matricula: string;
  dados: any;
  competencias: any;
  inadimplencias: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarInformacoesPorMatricula(this.matricula);
    //this.BuscarCompetenciasComDespesasPorMatricula(this.matricula);
    this.BuscarInadimplenciasPorMatricula(this.matricula);
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      this.matricula = params.matricula;
    });
  }

  BuscarInformacoesPorMatricula(matricula: any) {
    this.rotinaservice.BuscarInformacoesPorMatricula(matricula).subscribe((res: any) => {
      this.dados = res.data;
      console.log(this.dados);
    });
  }

  BuscarCompetenciasComDespesasPorMatricula(matricula: any) {
    this.rotinaservice.BuscarCompetenciasComDespesasPorMatricula(matricula).subscribe((res: any) => {
      this.competencias = res.data;
    });
  }

  BuscarInadimplenciasPorMatricula(matricula: any) {
    this.rotinaservice.BuscarInadimplenciasAposentadosPorMatricula(matricula).subscribe((res: any) => {
      this.inadimplencias = res.data;
      console.log(this.inadimplencias);
    });
  }

}
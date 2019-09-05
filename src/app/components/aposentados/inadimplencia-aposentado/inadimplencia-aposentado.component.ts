import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inadimplencia-aposentado',
  templateUrl: './inadimplencia-aposentado.component.html',
  styleUrls: ['./inadimplencia-aposentado.component.css']
})
export class InadimplenciaAposentadoComponent implements OnInit {

  matricula: string;
  inadimplencias: any;
  carregando: boolean;
  agora: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarInadimplenciasPorMatricula(this.matricula);
    this.agora = new Date();
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      this.matricula = params.matricula;
    });
  }

  BuscarInadimplenciasPorMatricula(matricula: any) {
    this.carregando = true;
    this.rotinaservice.BuscarInadimplenciasAposentadosPorMatricula(matricula).subscribe((res: any) => {
      this.inadimplencias = res;
      console.log(this.inadimplencias);
      this.carregando = false;
    });
  }

}

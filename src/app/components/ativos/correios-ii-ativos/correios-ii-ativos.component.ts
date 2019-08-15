import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-correios-ii-ativos',
  templateUrl: './correios-ii-ativos.component.html',
  styleUrls: ['./correios-ii-ativos.component.css']
})
export class CorreiosIIAtivosComponent implements OnInit {

  matricula: string;
  fichas: any;
  carregando: boolean;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarFichaFinanceiraAtivoCopar2PorMatricula(this.matricula);
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarFichaFinanceiraAtivoCopar2PorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarFichaFinanceiraAtivoCopar2PorMatricula(matricula).subscribe((res: any) => {
      this.fichas = res.data;
      console.log(this.fichas);
      this.carregando = false;
    });
  }

}

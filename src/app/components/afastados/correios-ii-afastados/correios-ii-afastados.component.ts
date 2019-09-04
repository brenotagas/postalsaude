import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-correios-ii-afastados',
  templateUrl: './correios-ii-afastados.component.html',
  styleUrls: ['./correios-ii-afastados.component.css']
})
export class CorreiosIiAfastadosComponent implements OnInit {

  matricula: string;
  fichas: any;
  carregando: boolean;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarFichaFinanceiraAfastadoCopar2PorMatricula(this.matricula);
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarFichaFinanceiraAfastadoCopar2PorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarFichaFinanceiraAfastadosCopar2PorMatricula(matricula).subscribe((res: any) => {
      this.fichas = res.data;
      console.log(this.fichas);
      this.carregando = false;
    });
  }

}

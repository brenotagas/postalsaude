import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-correios-i-afastados',
  templateUrl: './correios-i-afastados.component.html',
  styleUrls: ['./correios-i-afastados.component.css']
})
export class CorreiosIAfastadosComponent implements OnInit {

  matricula: string;
  fichas: any;
  carregando: boolean;
  agora: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarFichaFinanceiraAfastadoCopar1PorMatricula(this.matricula);
    this.agora = new Date();
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarFichaFinanceiraAfastadoCopar1PorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarFichaFinanceiraAfastadosCopar1PorMatricula(matricula).subscribe((res: any) => {
      this.fichas = res.data;
      //console.log(this.fichas);
      this.carregando = false;
    });
  }

}

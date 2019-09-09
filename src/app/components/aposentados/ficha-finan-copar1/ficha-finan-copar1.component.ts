import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-finan-copar1',
  templateUrl: './ficha-finan-copar1.component.html',
  styleUrls: ['./ficha-finan-copar1.component.css']
})
export class FichaFinanCopar1Component implements OnInit {

  matricula: string;
  ficha: any;
  carregando: boolean;
  agora: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarFichaFinanceiraAposentadoCopar1PorMatricula(this.matricula);
    this.agora = new Date();
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarFichaFinanceiraAposentadoCopar1PorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarFichaFinanceiraAposentadoCopar1PorMatricula(matricula).subscribe((res: any) => {
      this.ficha = res.data;
      //console.log(this.ficha);
      this.carregando = false;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-finan-copar2',
  templateUrl: './ficha-finan-copar2.component.html',
  styleUrls: ['./ficha-finan-copar2.component.css']
})
export class FichaFinanCopar2Component implements OnInit {

  matricula: string;
  ficha: any;
  carregando: boolean;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarFichaFinanceiraAposentadoCopar2PorMatricula(this.matricula);
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarFichaFinanceiraAposentadoCopar2PorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarFichaFinanceiraAposentadoCopar2PorMatricula(matricula).subscribe((res: any) => {
      this.ficha = res.data;
      console.log(this.ficha);
      this.carregando = false;
    });
  }
}

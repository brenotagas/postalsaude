import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parcelamento-afastados',
  templateUrl: './parcelamento-afastados.component.html',
  styleUrls: ['./parcelamento-afastados.component.css']
})
export class ParcelamentoAfastadosComponent implements OnInit {

  matricula: string;
  parcelamento: any;
  carregando: boolean;
  agora: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarParcelamentosAfastadosPorMatricula(this.matricula);
    this.agora = new Date();
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarParcelamentosAfastadosPorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarParcelamentosAfastadosPorMatricula(matricula).subscribe((res: any) => {
      this.parcelamento = res;
      console.log(this.parcelamento);
      this.carregando = false;
    });
  }

}

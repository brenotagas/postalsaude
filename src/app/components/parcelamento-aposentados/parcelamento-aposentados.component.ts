import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parcelamento-aposentados',
  templateUrl: './parcelamento-aposentados.component.html',
  styleUrls: ['./parcelamento-aposentados.component.css']
})
export class ParcelamentoAposentadosComponent implements OnInit {

  matricula: string;
  parcelamento: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarParcelamentosAposentadoPorMatricula(this.matricula);
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarParcelamentosAposentadoPorMatricula(matricula) {
    this.rotinaservice.BuscarParcelamentosAposentadoPorMatricula(matricula).subscribe((res: any) => {
      this.parcelamento = res;
      console.log(this.parcelamento);
    });
  }
}

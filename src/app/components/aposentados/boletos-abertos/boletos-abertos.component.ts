import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boletos-abertos',
  templateUrl: './boletos-abertos.component.html',
  styleUrls: ['./boletos-abertos.component.css']
})
export class BoletosAbertosComponent implements OnInit {

  matricula: string;
  boletos: any;
  carregando: boolean;
  agora: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarBoletosAbertos(this.matricula);
    this.agora = new Date();
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      this.matricula = params.matricula;
    });
  }

  BuscarBoletosAbertos(matricula: any) {
    this.carregando = true;
    this.rotinaservice.BuscarBoletosEmAbertoAposentadosPorMatricula(matricula).subscribe((res: any) => {
      this.boletos = res;
      console.log(this.boletos);
      this.carregando = false;
    });
  }

}

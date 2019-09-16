import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-mensalidade-ativos',
  templateUrl: './mensalidade-ativos.component.html',
  styleUrls: ['./mensalidade-ativos.component.css']
})
export class MensalidadeAtivosComponent implements OnInit {

  matricula: string;
  mensalidades: any;
  carregando: boolean;
  agora: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.agora = new Date();
    this.VerificarQueryString();
    this.BuscarMensalidadesAtivosPorMatricula(this.matricula);
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarMensalidadesAtivosPorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarMensalidadesAtivosPorMatricula(matricula).subscribe((res: any) => {
      this.mensalidades = res;
      //console.log(this.mensalidades);
      this.carregando = false;
    });
  }
}

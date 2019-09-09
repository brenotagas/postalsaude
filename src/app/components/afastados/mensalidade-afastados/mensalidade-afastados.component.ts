import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensalidade-afastados',
  templateUrl: './mensalidade-afastados.component.html',
  styleUrls: ['./mensalidade-afastados.component.css']
})
export class MensalidadeAfastadosComponent implements OnInit {

  matricula: string;
  mensalidades: any;
  carregando: boolean;
  agora: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarMensalidadesAfastadosPorMatricula(this.matricula);
    this.agora = new Date();
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarMensalidadesAfastadosPorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarMensalidadesAfastadosPorMatricula(matricula).subscribe((res: any) => {
      this.mensalidades = res;
      //console.log(this.mensalidades);
      this.carregando = false;
    });
  }
}

import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-mensalidade-aposentado',
  templateUrl: './mensalidade-aposentado.component.html',
  styleUrls: ['./mensalidade-aposentado.component.css']
})
export class MensalidadeAposentadoComponent implements OnInit {

  matricula: string;
  mensalidades: any;
  carregando: boolean;
  agora: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarMensalidadesAposentadoPorMatricula(this.matricula)
    this.agora = new Date();
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      this.matricula = params.matricula;
    });
  }

  BuscarMensalidadesAposentadoPorMatricula(matricula) {
    this.carregando = true;
    this.rotinaservice.BuscarMensalidadesAposentadoPorMatricula(matricula).subscribe((res: any) => {
      this.mensalidades = res;
      console.log(this.mensalidades);
      this.carregando = false;
    });
  }
}

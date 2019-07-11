import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensalidade-aposentado',
  templateUrl: './mensalidade-aposentado.component.html',
  styleUrls: ['./mensalidade-aposentado.component.css']
})
export class MensalidadeAposentadoComponent implements OnInit {

  matricula: string;
  mensalidades: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarMensalidadesAposentadoPorMatricula(this.matricula)
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarMensalidadesAposentadoPorMatricula(matricula) {
    this.rotinaservice.BuscarMensalidadesAposentadoPorMatricula(matricula).subscribe((res: any) => {
      this.mensalidades = res;
      console.log(this.mensalidades);
    });
  }
}

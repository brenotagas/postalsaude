import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  matricula: string;
  dados: any;

  beneficiario = {
    codigo: 53614,
    nome: "MARISA LIPPE CAPELLA",
    matricula: "089089499"
  }

  constructor(private rotinaservice: RotinaAtualizacaoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.BuscarInformacoesPorMatricula(this.matricula);
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      this.matricula = params.matricula;
    });
  }

  BuscarInformacoesPorMatricula(matricula: any) {
    this.rotinaservice.BuscarInformacoesPorMatricula(matricula).subscribe((res: any) => {
      this.dados = res.data;
      //console.log(this.dados);
    });
  }
}

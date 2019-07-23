import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formMatricula = new FormGroup({
    matricula: new FormControl()
  });

  dados: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private router: Router) { }

  ngOnInit() {
    //this.BuscarInformacoesPorMatricula("89056086");
  }

  BuscarInformacoesPorMatricula(matricula) {
    this.rotinaservice.BuscarInformacoesPorMatricula(matricula).subscribe((res: any) => {
      this.dados = res;
      //console.log(this.dados);
      if (this.dados.data.tipoBeneficiario == "Aposentado") {
        this.router.navigate(['drill-aposentados'], { queryParams: { matricula: matricula } })
      } else if (this.dados.data.tipoBeneficiario == "Ativo") {
        this.router.navigate(['drill-ativos'], { queryParams: { matricula: matricula } })
      } else {
        this.router.navigate(['drill-afastados'], { queryParams: { matricula: matricula } })
      }
    },
      error => {
        console.log("Error", error);
      });
  }
}
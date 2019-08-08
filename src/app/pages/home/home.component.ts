import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';

declare var $: any;

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
    let matriculaTratada;
    if (matricula.charAt(0) === '0') {
      matriculaTratada = matricula.substring(1);
    } else {
      matriculaTratada = matricula
    }    
    this.rotinaservice.BuscarInformacoesPorMatricula(matriculaTratada).subscribe((res: any) => {
      this.dados = res;
      //console.log(this.dados);
      if (this.dados.data.matricula == null && this.dados.data.nome == null && this.dados.data.tipoBeneficiario == null) {
        console.log("Matrícula Inválida ou Beneficiario não encontrado!");
        $('#alertMatricula').removeClass("hide");
      } else if (this.dados.data.tipoBeneficiario == "Aposentado Normal" || this.dados.data.tipoBeneficiario == "Aposentado por Invalidez") {
        this.router.navigate(['drill-aposentados'], { queryParams: { matricula: matriculaTratada } })
      } else if (this.dados.data.tipoBeneficiario == "Ativo" || this.dados.data.tipoBeneficiario == "Afastado") {
        this.router.navigate(['drill-ativos'], { queryParams: { matricula: matriculaTratada } })
      }// } else {
      //   this.router.navigate(['drill-afastados'], { queryParams: { matricula: matriculaTratada } })
      // }
    },
      error => {
        console.log("Error", error);
      });
  }
}
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

  carregando = false;

  formMatricula = new FormGroup({
    matricula: new FormControl()
  });

  dados: any;
  renderer: any;

  constructor(private rotinaservice: RotinaAtualizacaoService, private router: Router) { }

  ngOnInit() {
    //this.BuscarInformacoesPorMatricula("89056086");
  }

  BuscarInformacoesPorMatricula(matricula) {
    if (matricula == null) {
      alert("Informe uma matrícula");
    }
    else {
      this.carregando = true;
      let matriculaTratada;
      if (matricula.charAt(0) === '0') {
        matriculaTratada = matricula.substring(1);
      } else {
        matriculaTratada = matricula
      }
      matriculaTratada = matriculaTratada.trim();
      this.rotinaservice.BuscarInformacoesPorMatricula(matriculaTratada).subscribe((res: any) => {
        this.dados = res.data;
        console.log(this.dados);
        if (this.dados.matricula == null && this.dados.nome == null && this.dados.tipoBeneficiario == null) {
          //console.log("Matrícula Inválida ou Beneficiario não encontrado!");
          //$('#alertMatricula').removeClass("hide");
          this.carregando = false;
        } else if (this.dados.tipoBeneficiario == "Aposentado Normal" || this.dados.tipoBeneficiario == "Aposentado por Invalidez") {
          this.carregando = false;
          this.router.navigate(['drill-aposentados'], { queryParams: { matricula: matriculaTratada } })
        } else if (this.dados.tipoBeneficiario == "Ativo") {
          this.carregando = false;
          this.router.navigate(['drill-ativos'], { queryParams: { matricula: matriculaTratada } })
        } else {
          this.router.navigate(['drill-afastados'], { queryParams: { matricula: matriculaTratada } })
        }
      },
        error => {
          this.carregando = false;
          this.dados = error.error.data[0]
          console.log(this.dados);
        });
    }
  }
}
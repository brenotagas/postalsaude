import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';
import sha256 from 'crypto-js/sha256';
import CryptoJS from 'crypto-js';
import { createTokenForReference } from '@angular/compiler/src/identifiers';

@Component({
  selector: 'app-homeredirect',
  templateUrl: './homeredirect.component.html',
  styleUrls: ['./homeredirect.component.css']
})
export class HomeredirectComponent implements OnInit {

  matricula: string;
  source = 'E3771031E7F9817178B11A67484D474B59F6CDC8A3F1113179A4250A2788C198';
  dados: any;
  encriptado: string;

  constructor(private rotinaservice: RotinaAtualizacaoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.VerificarQueryString();
    this.EncriptarMatricula(this.matricula);
    this.DecriptarMatricula(this.encriptado);
    //this.DecriptaToken();
    //console.log('http://homapp.postalsaude.com.br:8080/arrecada/redirect?matricula=80830692&source=E3771031E7F9817178B11A67484D474B59F6CDC8A3F1113179A4250A2788C198');
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula + ' - ' + params.source);
      if (params.matricula == '' || params.source == '') {
        window.location.href = 'http://www.postalsaude.com.br/';
      }
      this.matricula = params.matricula;
      if (params.source != null) {
        if (this.ValidarToken(params.source)) {
          this.BuscarInformacoesPorMatricula(this.matricula);
        }
      }
    });
  }

  ValidarToken(token): boolean {
    if (token == this.source) { return true }
  }

  EncriptarMatricula(matricula: string) {
    const key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
    const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    this.encriptado = CryptoJS.AES.encrypt(matricula, key, { iv: iv });
    console.log("Encriptado: " + this.encriptado);
  }

  DecriptarMatricula(encriptado: string) {
    var decriptado = CryptoJS.AES.decrypt(encriptado, 'P0st@lS@ud32020');
    console.log("Decriptado: " + decriptado);
  }

  BuscarInformacoesPorMatricula(matricula) {
    let matriculaTratada;
    if (matricula.charAt(0) === '0') {
      matriculaTratada = matricula.substring(1);
    } else {
      matriculaTratada = matricula
    }
    matriculaTratada = matriculaTratada.trim();
    this.rotinaservice.BuscarInformacoesPorMatricula(matriculaTratada).subscribe((res: any) => {
      this.dados = res.data;
      if (this.dados.matricula == null && this.dados.nome == null && this.dados.tipoBeneficiario == null) {
        window.location.href = 'http://www.postalsaude.com.br/';
      } else if (this.dados.tipoBeneficiario == "Aposentado Normal" || this.dados.tipoBeneficiario == "Aposentado por Invalidez") {
        this.router.navigate(['drill-aposentados'], { queryParams: { matricula: matriculaTratada } })
      } else if (this.dados.tipoBeneficiario == "Ativo") {
        this.router.navigate(['drill-ativos'], { queryParams: { matricula: matriculaTratada } })
      } else {
        this.router.navigate(['drill-afastados'], { queryParams: { matricula: matriculaTratada } })
        //window.location.href = 'http://www.postalsaude.com.br/'
      }
    },
      error => {
        console.log(error.error);
      });
  }

}

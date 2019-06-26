import { Component, OnInit } from '@angular/core';
import { RotinaAtualizacaoService } from 'src/app/services/rotina-atualizacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rotinasAtualizacao: Array<any>;

  constructor(private rotinaservice: RotinaAtualizacaoService) { }

  ngOnInit() {

  }

  ListarRotinas() {
    this.rotinaservice.ListarRotinas()
      .subscribe(dados => this.rotinasAtualizacao = dados);
    console.log(this.rotinasAtualizacao);
  }

  BuscarRotinaPorId() {
    this.rotinaservice.BuscarRotinaPorId()
      .subscribe(dados => this.rotinasAtualizacao = dados);
    console.log(this.rotinasAtualizacao);
  }
}
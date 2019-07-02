import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensalidade-ativos',
  templateUrl: './mensalidade-ativos.component.html',
  styleUrls: ['./mensalidade-ativos.component.css']
})
export class MensalidadeAtivosComponent implements OnInit {

  titulo = 'FICHA FINANCEIRA MENSALIDADE';

  constructor() {
   
   }

  ngOnInit() {
  }

  getTitulo(){
    return this.titulo;
  }

}
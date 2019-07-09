import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  beneficiario = {
    codigo: 53614,
    nome: "MARISA LIPPE CAPELLA",
    matricula: "089089499"
  }

  constructor() { }

  ngOnInit() {
  }

}

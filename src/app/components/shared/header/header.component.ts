import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrar: boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.VerificarQueryString();
  }

  VerificarQueryString(): any {
    this.route.queryParams.subscribe(params => {
      //console.log(params.matricula)
      params.source;
      if (params.source) {
        this.mostrar = false;
      }
    });
  }

}

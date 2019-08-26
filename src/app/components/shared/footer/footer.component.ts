import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  url: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.VerificarUrl();
  }

  VerificarUrl() {
    this.url = this.router.url;
    if (this.url.includes('drill')) {
      $('#footerpostal').addClass('footer-drill');
    }
  }

}

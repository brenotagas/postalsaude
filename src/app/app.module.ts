import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { RotinaAtualizacaoService } from './services/rotina-atualizacao.service';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { DrillComponent } from './components/drill/drill.component';
import { RegrasComponent } from './components/regras/regras.component';
import { AppRoutingModule } from './app-routing.module';
import { MensalidadeAposentadoComponent } from './components/mensalidade-aposentado/mensalidade-aposentado.component';
import { FichaFinanCopar1Component } from './components/ficha-finan-copar1/ficha-finan-copar1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrillComponent,
    RegrasComponent,
    MensalidadeAposentadoComponent,
    FichaFinanCopar1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RotinaAtualizacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeBr, 'pt');

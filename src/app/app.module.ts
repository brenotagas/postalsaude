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
import { DrillAtivosComponent } from './components/drill-ativos/drill-ativos.component';
import { MensalidadeAtivosComponent } from './components/mensalidade-ativos/mensalidade-ativos.component';
import { CorreiosIAtivosComponent } from './components/correios-i-ativos/correios-i-ativos.component';
import { CorreiosIIAtivosComponent } from './components/correios-ii-ativos/correios-ii-ativos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrillComponent,
    RegrasComponent,
    DrillAtivosComponent,
    MensalidadeAtivosComponent,
    CorreiosIAtivosComponent,
    CorreiosIIAtivosComponent,
    FooterComponent,
    HeaderComponent
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

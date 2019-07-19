import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { RotinaAtualizacaoService } from './services/rotina-atualizacao.service';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { DrillComponent } from './components/aposentados/drill-aposentados/drill-aposentados.component';
import { RegrasComponent } from './components/shared/regras/regras.component';
import { AppRoutingModule } from './app-routing.module';
import { MensalidadeAposentadoComponent } from './components/aposentados/mensalidade-aposentado/mensalidade-aposentado.component';
import { FichaFinanCopar1Component } from './components/aposentados/ficha-finan-copar1/ficha-finan-copar1.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CorreiosIAtivosComponent } from './components/ativos/correios-i-ativos/correios-i-ativos.component';
import { CorreiosIIAtivosComponent } from './components/ativos/correios-ii-ativos/correios-ii-ativos.component';
import { DrillAtivosComponent } from './components/ativos/drill-ativos/drill-ativos.component';
import { MensalidadeAtivosComponent } from './components/ativos/mensalidade-ativos/mensalidade-ativos.component';
import { FichaFinanCopar2Component } from './components/aposentados/ficha-finan-copar2/ficha-finan-copar2.component';
import { DrillAfastadosComponent } from './components/afastados/drill-afastados/drill-afastados.component';
import { MensalidadeAfastadosComponent } from './components/afastados/mensalidade-afastados/mensalidade-afastados.component';
import { CorreiosIAfastadosComponent } from './components/afastados/correios-i-afastados/correios-i-afastados.component';
import { CorreiosIiAfastadosComponent } from './components/afastados/correios-ii-afastados/correios-ii-afastados.component';
import { ParcelamentoAfastadosComponent } from './components/afastados/parcelamento-afastados/parcelamento-afastados.component';
import { ParcelamentoAposentadosComponent } from './components/aposentados/parcelamento-aposentados/parcelamento-aposentados.component';
import { CabecalhoComponent } from './components/shared/cabecalho/cabecalho.component';
import { NomePipe } from './pipes/nome.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrillComponent,
    HeaderComponent,
    FooterComponent,
    RegrasComponent,
    MensalidadeAposentadoComponent,
    FichaFinanCopar1Component,
    CorreiosIAtivosComponent,
    CorreiosIIAtivosComponent,
    DrillAtivosComponent,
    MensalidadeAtivosComponent,
    FichaFinanCopar2Component,
    DrillAfastadosComponent,
    MensalidadeAfastadosComponent,
    CorreiosIAfastadosComponent,
    CorreiosIiAfastadosComponent,
    ParcelamentoAfastadosComponent,
    ParcelamentoAposentadosComponent,
    CabecalhoComponent,
    NomePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [RotinaAtualizacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeBr, 'pt');

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DrillComponent } from './components/drill/drill.component';
import { RegrasComponent } from './components/regras/regras.component';
import { MensalidadeAposentadoComponent } from './components/mensalidade-aposentado/mensalidade-aposentado.component';
import { FichaFinanCopar1Component } from './components/ficha-finan-copar1/ficha-finan-copar1.component';
import { DrillAtivosComponent } from './components/drill-ativos/drill-ativos.component';
import { DrillAfastadosComponent } from './components/drill-afastados/drill-afastados.component';
import { CorreiosIAtivosComponent } from './components/correios-i-ativos/correios-i-ativos.component';
import { CorreiosIIAtivosComponent } from './components/correios-ii-ativos/correios-ii-ativos.component';
import { CorreiosIAfastadosComponent } from './components/correios-i-afastados/correios-i-afastados.component';
import { CorreiosIiAfastadosComponent } from './components/correios-ii-afastados/correios-ii-afastados.component';
import { MensalidadeAtivosComponent } from './components/mensalidade-ativos/mensalidade-ativos.component';
import { FichaFinanCopar2Component } from './components/ficha-finan-copar2/ficha-finan-copar2.component';
import { MensalidadeAfastadosComponent } from './components/mensalidade-afastados/mensalidade-afastados.component';
import { ParcelamentoAfastadosComponent } from './components/parcelamento-afastados/parcelamento-afastados.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'drill-aposentados', component: DrillComponent },
  { path: 'drill-afastados', component: DrillAfastadosComponent },
  { path: 'regras', component: RegrasComponent },
  { path: 'mensalidade-aposentados', component: MensalidadeAposentadoComponent },
  { path: 'ffcs-aposentados', component: FichaFinanCopar1Component },
  { path: 'ffcsii-aposentados', component: FichaFinanCopar2Component },
  { path: 'parcelamento-aposentados', component: MensalidadeAposentadoComponent },
  { path: 'drill-ativos', component: DrillAtivosComponent },
  { path: 'ffcs-ativos', component: CorreiosIAtivosComponent },
  { path: 'ffcsii-ativos', component: CorreiosIIAtivosComponent },
  { path: 'ffcs-afastados', component: CorreiosIAfastadosComponent },
  { path: 'ffcsii-afastados', component: CorreiosIiAfastadosComponent },
  { path: 'mensalidade-ativos', component: MensalidadeAtivosComponent },
  { path: 'mensalidade-afastados', component: MensalidadeAfastadosComponent },
  { path: 'parcelamento-afastados', component: ParcelamentoAfastadosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

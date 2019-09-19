import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DrillComponent } from './components/aposentados/drill-aposentados/drill-aposentados.component';
import { RegrasComponent } from './components/shared/regras/regras.component';
import { MensalidadeAposentadoComponent } from './components/aposentados/mensalidade-aposentado/mensalidade-aposentado.component';
import { FichaFinanCopar1Component } from './components/aposentados/ficha-finan-copar1/ficha-finan-copar1.component';
import { DrillAtivosComponent } from './components/ativos/drill-ativos/drill-ativos.component';
import { DrillAfastadosComponent } from './components/afastados/drill-afastados/drill-afastados.component';
import { CorreiosIAtivosComponent } from './components/ativos/correios-i-ativos/correios-i-ativos.component';
import { CorreiosIIAtivosComponent } from './components/ativos/correios-ii-ativos/correios-ii-ativos.component';
import { CorreiosIAfastadosComponent } from './components/afastados/correios-i-afastados/correios-i-afastados.component';
import { CorreiosIiAfastadosComponent } from './components/afastados/correios-ii-afastados/correios-ii-afastados.component';
import { MensalidadeAtivosComponent } from './components/ativos/mensalidade-ativos/mensalidade-ativos.component';
import { FichaFinanCopar2Component } from './components/aposentados/ficha-finan-copar2/ficha-finan-copar2.component';
import { MensalidadeAfastadosComponent } from './components/afastados/mensalidade-afastados/mensalidade-afastados.component';
import { ParcelamentoAfastadosComponent } from './components/afastados/parcelamento-afastados/parcelamento-afastados.component';
import { ParcelamentoAposentadosComponent } from './components/aposentados/parcelamento-aposentados/parcelamento-aposentados.component';
import { HomeredirectComponent } from './pages/homeredirect/homeredirect.component';
import { InadimplenciaAposentadoComponent } from './components/aposentados/inadimplencia-aposentado/inadimplencia-aposentado.component';
import { BoletosAbertosAposentadosComponent } from './components/aposentados/boletos-abertos-aposentados/boletos-abertos-aposentados.component';
import { BoletosAbertosAfastadosComponent } from './components/afastados/boletos-abertos-afastados/boletos-abertos-afastados.component';
import { InadimplenciaAfastadoComponent } from './components/afastados/inadimplencia-afastado/inadimplencia-afastado.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'drill-ativos', component: DrillAtivosComponent },
  { path: 'drill-aposentados', component: DrillComponent },
  { path: 'drill-afastados', component: DrillAfastadosComponent },
  { path: 'mensalidade-ativos', component: MensalidadeAtivosComponent },
  { path: 'mensalidade-aposentados', component: MensalidadeAposentadoComponent },
  { path: 'mensalidade-afastados', component: MensalidadeAfastadosComponent },
  { path: 'ffcs-aposentados', component: FichaFinanCopar1Component },
  { path: 'ffcs-ativos', component: CorreiosIAtivosComponent },
  { path: 'ffcs-afastados', component: CorreiosIAfastadosComponent },
  { path: 'ffcsii-aposentados', component: FichaFinanCopar2Component },
  { path: 'ffcsii-ativos', component: CorreiosIIAtivosComponent },
  { path: 'ffcsii-afastados', component: CorreiosIiAfastadosComponent },
  { path: 'parcelamento-aposentados', component: ParcelamentoAposentadosComponent },
  { path: 'parcelamento-afastados', component: ParcelamentoAfastadosComponent },
  { path: 'inadimplencia-aposentados', component: InadimplenciaAposentadoComponent },
  { path: 'inadimplencia-afastados', component: InadimplenciaAfastadoComponent },
  { path: 'boletos-abertos-aposentados', component: BoletosAbertosAposentadosComponent },
  { path: 'boletos-abertos-afastados', component: BoletosAbertosAfastadosComponent },
  { path: 'regras', component: RegrasComponent },
  { path: 'redirect', component: HomeredirectComponent },
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

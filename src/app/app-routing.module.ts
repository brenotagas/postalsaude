import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DrillComponent } from './components/drill/drill.component';
import { RegrasComponent } from './components/regras/regras.component';
import { MensalidadeAposentadoComponent } from './components/mensalidade-aposentado/mensalidade-aposentado.component';
import { FichaFinanCopar1Component } from './components/ficha-finan-copar1/ficha-finan-copar1.component';
import { DrillAtivosComponent } from './components/drill-ativos/drill-ativos.component';
import { CorreiosIAtivosComponent } from './components/correios-i-ativos/correios-i-ativos.component';
import { CorreiosIIAtivosComponent } from './components/correios-ii-ativos/correios-ii-ativos.component';
import { MensalidadeAtivosComponent } from './components/mensalidade-ativos/mensalidade-ativos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'drill-aposentados', component: DrillComponent },
  { path: 'regras', component: RegrasComponent },
  { path: 'mensalidade-aposentados', component: MensalidadeAposentadoComponent },
  { path: 'ffcs-aposentados', component: FichaFinanCopar1Component },
  { path: 'ffcsii-aposentados', component: MensalidadeAposentadoComponent },
  { path: 'parcelamento-aposentados', component: MensalidadeAposentadoComponent },
  { path: 'drill-ativos', component: DrillAtivosComponent },
  { path: 'ffcs-ativos', component: CorreiosIAtivosComponent },
  { path: 'ffcsii-ativos', component: CorreiosIIAtivosComponent },
  { path: 'mensalidade-ativos', component: MensalidadeAtivosComponent },
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

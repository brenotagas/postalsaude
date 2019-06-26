import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DrillComponent } from './components/drill/drill.component';
import { RegrasComponent } from './components/regras/regras.component';
import { MensalidadeAposentadoComponent } from './components/mensalidade-aposentado/mensalidade-aposentado.component';
import { FichaFinanCopar1Component } from './components/ficha-finan-copar1/ficha-finan-copar1.component';

const routes: Routes = [
  { path: 'drill', component: DrillComponent },
  { path: 'regras', component: RegrasComponent },
  { path: 'mensalidade', component: MensalidadeAposentadoComponent },
  { path: 'ffcs', component: FichaFinanCopar1Component },
  { path: 'ffcsii', component: MensalidadeAposentadoComponent },
  { path: 'parcelamento', component: MensalidadeAposentadoComponent },
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

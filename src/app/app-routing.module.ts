import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

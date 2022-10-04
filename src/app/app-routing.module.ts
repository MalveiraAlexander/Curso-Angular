import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VuelosComponent } from './pages/vuelos/vuelos.component';

const routes: Routes = [
  {path: '', redirectTo: 'vuelos', pathMatch: 'full'},
  {path: 'vuelos', component: VuelosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

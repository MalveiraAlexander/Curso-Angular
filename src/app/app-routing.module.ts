import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './pages/dogs/dogs.component';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { PeopleComponent } from './pages/people/people.component';

const routes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'dogs', component: DogsComponent},
  {path: 'marvel', component: MarvelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

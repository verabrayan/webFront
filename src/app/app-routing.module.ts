import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { ActorsComponent } from './components/actors/actors.component';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'actors',component: ActorsComponent},
  {path:'about',component: AboutComponent},
  {path:'movies/:id',component: DetailComponent},
  {path:'actors/:id',component: DetailActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

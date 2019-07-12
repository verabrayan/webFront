import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiService } from './services/movie-api.service';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorApiService } from './services/actor-api.service';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ActorsComponent,
    AboutComponent,
    DetailComponent,
    DetailActorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,
    MovieApiService,ActorApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

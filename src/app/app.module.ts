import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { from } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


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
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2CarouselamosModule
  ],
  providers: [HttpClientModule,
    MovieApiService,ActorApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class SomeModule { }
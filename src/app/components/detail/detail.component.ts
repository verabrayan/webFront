import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; 
import { MovieApiService } from '../../services/movie-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private idmovie=null;
  private sub:any;
  
  public imgURL='https://image.tmdb.org/t/p/w500/'
  public movie;
  public credits;
  public similar;

 
  /**
   * 
   * @param route 
   * 
   * @param _movieApiService 
   * 
   * @param router 
   */
  constructor(private route:ActivatedRoute,
    private _movieApiService:MovieApiService,
    private router: Router ) { }
  ngOnInit() {
    this.initialData();
  }

  /**
   * Es un metodo en el cual se hace el llamdo a todos los metodos del servicio de peliculas
   * 
   * @returns Primero el detalle de una pelicual como un array
   * 
   * @returns Segundo un array objec el cual contiene todas la pelicula similares
   * 
   * @returns Tercero un array el cual tine los creditos de la pelicula
   */
  initialData(){
    this.sub=this.route.params
    .subscribe(params =>{this.idmovie = params.id});

    this._movieApiService
    .getMovieDetail(this.idmovie)
    .then(data => this.movie = data)
    .catch(error => console.error(error));

    this._movieApiService
    .getSimilarMovies(this.idmovie)
    .then(data => this.similar= data.results)
    .catch(error => console.error(error));

    this._movieApiService
    .getMovieCredits(this.idmovie)
    .then(data => this.credits=data.cast)
    .catch(error => console.error(error));
    
    setTimeout(() => {
         console.log(this.movie) 
         console.log(this.similar)
         console.log(this.credits)
    },2000) 

  }

  /**
   * 
   * @param id el id de la pelicula a la cual se desea ver el detalle
   * 
   * Me lleva a la ruta de el detalle de una pelicula
   */
  goSimilarMovie(id) {
    console.log(id);
    this.router.navigate([`/movies`, id]);
    this.initialData();
  }
}

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

 
  
  constructor(private route:ActivatedRoute,
    private _movieApiService:MovieApiService,
    private router: Router

   



    ) {

       
    }

  ngOnInit() {
    this.initialData();
  }
  initialData(){
    this.sub=this.route.params.subscribe(params =>{this.idmovie = params.id});

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
  goSimilarMovie(id) {
    console.log(id);
    this.router.navigate([`/movies`, id]);
    this.initialData();
  }
}
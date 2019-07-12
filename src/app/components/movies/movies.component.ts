import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { promise } from 'protractor';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies=[]
  public imgURL='https://image.tmdb.org/t/p/w500/'
  router: any;

  constructor(private _movieApiService: MovieApiService) { }

  ngOnInit() {
    this._movieApiService.getPopularMovies().then(data => this.movies = data.results)
    setTimeout(() => {
      console.log('this.movies', this.movies)
    },4000)

  }


}

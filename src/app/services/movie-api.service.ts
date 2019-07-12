import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private baseURL='https://api.themoviedb.org/3';
  private apikey='abf662a1e403e935db8c037333fbbd0b';
  private language = 'es-US';

  constructor(private _http:HttpClient) { }

  getFromMovies(search: string): Promise<any>{
    let url = `${this.baseURL}/${search}?api_key=${this.apikey}&language=${this.language}`;
    return this._http.get(url).toPromise();
  }
  getPopularMovies():Promise<any>{
    return this.getFromMovies('movie/popular');
  }
  getMovieDetail(id:string):Promise<any>{
    return this.getFromMovies(`movie/${id}`);
  }
  getSimilarMovies(id:string):Promise<any>{
    return this.getFromMovies(`movie/${id}/similar`);
  }
  getMovieCredits(id:string):Promise<any>{
    return this.getFromMovies(`movie/${id}/credits`);
  }
}


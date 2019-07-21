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

  /**
   * 
   * @param _http 
   * 
   * Servicio de las peliculas el cual me genera la URL del "Movie Database"
   */

  constructor(private _http:HttpClient) { }

  /**
   * 
   * @param search 
   * 
   * @returns Una promesa la cual contiene la URL base del API de peliculas
   * 
   *  Metodo el cual genera la URL base del API de las peliculas
   */

  getFromMovies(search: string): Promise<any>{
    let url = `${this.baseURL}/${search}?api_key=${this.apikey}&language=${this.language}`;
    return this._http.get(url).toPromise();
  }

  /**
 * @returns Una promesa la cual tiene la URL del API "popular movies"
 * 
 * Metodo el cual genera la URL completa para acceder al API de peliculas populares
 */
  getPopularMovies():Promise<any>{
    return this.getFromMovies('movie/popular');
  }

  /**
   * 
   * @param id Es el id de la pelicula se desea conocer el detalle
   * 
   * @returns Una promesa la cual tiene la URL del API "detail movie"
   * 
   * Metodo el cual genera la URL completa para acceder al API del detalle de una pelicula
   */
  getMovieDetail(id:string):Promise<any>{
    return this.getFromMovies(`movie/${id}`);
  }

  /**
   * 
   * @param id Es el id de la pelicula  se desea conocer las peliculas similares a ella
   * 
   * @returns Una promesa la cual tiene la URL del API "similar movie"
   * 
   * Metodo el cual genera la URL completa para acceder al API de las peliculas similares
   */

  getSimilarMovies(id:string):Promise<any>{
    return this.getFromMovies(`movie/${id}/similar`);
  }

  /**
   * 
   * @param id Es el id de la pelicula se desea conocer los creditos de la pelicula seleccionada
   * 
   * @returns Una promesa la cual tiene la URL del API "credits"
   * 
   * Metodo el cual genera la URL completa para acceder al API de los creditos de la pelicula
   */

  getMovieCredits(id:string):Promise<any>{
    return this.getFromMovies(`movie/${id}/credits`);
  }
}


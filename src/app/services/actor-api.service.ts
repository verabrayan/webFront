import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ActorApiService {
  private baseURL='https://api.themoviedb.org/3';
  private apikey='abf662a1e403e935db8c037333fbbd0b';
  private language = 'es-US';

  /**
   * 
   * @param http 
   * 
   * Servicio de los actores el cual me genera la URL del "Movie Database"
   */

  constructor(private http:HttpClient) { }
/**
 * 
 * @param search 
 * 
 * @returns Una promesa la cual contiene la URL base del API de actores
 * 
 * Metodo el cual genera la URL base del API de actores   
 */
  getFromActors(search: string): Promise<any>{
    let url = `${this.baseURL}/${search}?api_key=${this.apikey}&language=${this.language}`;
    console.log('url',url);
    return this.http.get(url).toPromise();
  }
/**
 * @returns Una promesa la cual tiene la URL del API "popular person"
 * 
 * Metodo el cual genera la URL completa para acceder al API de actores populares
 */
  getPopularActors():Promise<any>{
    return this.getFromActors('person/popular');
  }
/**
 * 
 * @param id Es el id del actor al cual se desea conocer el detalle
 * 
 * @returns Una promesa la cual tiene la URL del API "detail person"
 * 
 * Metodo el cual genera la URL completa para acceder al API del detalle de un actor
 */
  getActorDetail(id:string):Promise<any>{
    return this.getFromActors(`person/${id}`);
  }
}

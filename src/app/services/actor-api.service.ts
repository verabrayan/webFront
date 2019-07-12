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

  constructor(private http:HttpClient) { }

  getFromActors(search: string): Promise<any>{
    let url = `${this.baseURL}/${search}?api_key=${this.apikey}&language=${this.language}`;
    console.log('url',url);
    return this.http.get(url).toPromise();
  }

  getPopularActors():Promise<any>{
    return this.getFromActors('person/popular');
  }

  getActorDetail(id:string):Promise<any>{
    return this.getFromActors(`person/${id}`);
  }
}

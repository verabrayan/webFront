import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ActorApiService } from 'src/app/services/actor-api.service';

@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.scss']
})
export class DetailActorComponent implements OnInit {
  private idActor= null;
  private sub:any;
  public imgURL='https://image.tmdb.org/t/p/w500/'

  constructor(private route:ActivatedRoute,
    private _actorApiService:ActorApiService,
    private router:Router) { }

  public actor;
  public movies;

  ngOnInit() {
    
    this.sub=this.route.params.subscribe(params =>{this.idActor = params.id});
    
    this._actorApiService
    .getActorDetail(this.idActor)
    .then(data => this.actor = data)
    .catch(error => console.error(error));

    let similar=[]
    this._actorApiService
    .getPopularActors()
    .then(data => similar = data.results)
    .catch(error => console.error(error));

    setTimeout(() => {
      for(let i in similar){
        if(similar[i].id == this.idActor ){
          this.movies=similar[i]
        }
      }
      console.log(this.actor)
      console.log(this.movies)
    },2000) 


  }
  goMovie(id) {
    console.log(id);
    this.router.navigate([`/movies`, id]);
  }

}

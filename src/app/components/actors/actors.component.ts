import { Component, OnInit } from '@angular/core';
import { ActorApiService } from 'src/app/services/actor-api.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
  
  public actors=[]
  public imgURL='https://image.tmdb.org/t/p/w500/'

  constructor(private actorApiService: ActorApiService) { }

  ngOnInit() {
    this.actorApiService.getPopularActors().then(data => this.actors = data.results)
    console.log('this.actors', this.actors);
    setTimeout(() => {
      console.log('this.actors', this.actors)
    },4000)
  }

}

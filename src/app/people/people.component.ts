import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Actor } from '../model/actor';
import { ActorResults } from '../model/actor-result';
import { ActorsService } from '../services/actors.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  actorClick: boolean = false;
  popularActors: Actor[];
  actors: Actor[] = [];
  results: ActorResults;
  pagination: number[] = [];

  posterPath: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private actorsService: ActorsService) {
    this.actorsService.getPopularActors(1).subscribe((data: ActorResults) => {
      this.popularActors = data['results'].splice(0, 6);
      for (let i = 1; i <= 10; i++) {
        this.pagination.push(i);
      }
    });
  }

  ngOnInit(): void {}

  onActor(actor: Actor) {
    this.actorClick = true;
    this.actorsService.actor.next(actor);
  }
  onPageNumber(page) {
    this.actorsService.getPopularActors(page).subscribe((data) => {
      this.popularActors = data['results'].splice(0, 6);
    });
  }
}

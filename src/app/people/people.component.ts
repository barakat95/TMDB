import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../services/actors.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  popularActors: any[];
  posterPath:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private actorsService: ActorsService) {
    actorsService.getPopularActors().subscribe((data) => {
      this.popularActors = data.results;
    });
  }

  ngOnInit(): void {}
}

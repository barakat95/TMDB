import { Component, OnInit } from '@angular/core';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  actors: any[];
  actorDetails:any;
  constructor(private actorsService: ActorsService) {
    actorsService.getPopularActors().subscribe((response) => {
      this.actors = response.results;
      console.log(this.actors);

    });
  }

  ngOnInit(): void {}
}

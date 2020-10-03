import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor';
import { KnownFor } from 'src/app/model/known-for';
import { ActorsService } from 'src/app/services/actors.service';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  actors: any[];
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  // actorDetails:any;
  @Input() actorDetails:Actor;
  actor: Actor;
  knownFor: KnownFor = [];
  // name: string = this.actorDetails.name;
  constructor(private actorsService: ActorsService) {
    // actorsService.getActorDetails(6384).subscribe((response) => {
    //   this.actorDetails = response;
    //   console.log(this.actorDetails);
    // });

  }

  ngOnInit(): void {
    this.actorsService.actor.subscribe(actorSer => {
      this.actor = actorSer;
      this.knownFor = actorSer.known_for;
      console.log(this.actor);
      console.log(actorSer);
    })
  }
}

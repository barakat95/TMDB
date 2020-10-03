import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Actor } from '../model/actor';
import { map, tap } from 'rxjs/operators';
import { ActorResults } from '../model/actor-result';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  actor = new Subject<Actor>();

  constructor(private httpClient: HttpClient) {}
  getPopularActors(pageNumber): Observable<ActorResults> {
    return this.httpClient.get<ActorResults>(
      `https://api.themoviedb.org/3/person/popular?api_key=cfb831865e3176bd0a48f961f155bfb5&language=en-US&page=${pageNumber}`
    );
  }

  // getActorDetails(id):Observable<any>{
  //   return this.httpClient
  //   .get<Actor>(`https://api.themoviedb.org/3/person/${id}?api_key=cfb831865e3176bd0a48f961f155bfb5&language=en-US`)
  //   .pipe(
  //     map(actor =>{
  //       return actor
  //       console.log("Actor Details"+actor);
  //     })
  //   )
  // }
}

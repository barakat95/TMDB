import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  allMovies: object[];
  getTrendingMovies():Observable<any> {
    return this.httpClient.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=cfb831865e3176bd0a48f961f155bfb5&language=en-US&page=1    '
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private httpClient: HttpClient) {}
  getMovieDetails(id): Observable<any> {
    return this.httpClient
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=cfb831865e3176bd0a48f961f155bfb5&language=en-US
`);
  }
}

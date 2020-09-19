import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  constructor(private httpClient: HttpClient) {}

  getTrendingTV(): Observable<any> {
    return this.httpClient.get(
      'https://api.themoviedb.org/3/tv/popular?api_key=cfb831865e3176bd0a48f961f155bfb5&language=en-US&page=1'
    );
  }
}

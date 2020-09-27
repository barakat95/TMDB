import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpClient:HttpClient) { }

  getTvSeries(category):Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/tv/${category}?api_key=cfb831865e3176bd0a48f961f155bfb5&language=en-US&page=1`
    );
  }
  getTrendingSeries():Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=cfb831865e3176bd0a48f961f155bfb5`
    );
  }
}

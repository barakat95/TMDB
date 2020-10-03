import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}
  search(searchText): Observable<any> {
    return this.httpClient
      .get(`https://api.themoviedb.org/3/search/multi?api_key=cfb831865e3176bd0a48f961f155bfb5&language=en-US&query=${searchText}&include_adult=false`);
  }
}

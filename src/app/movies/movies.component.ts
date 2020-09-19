import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  trendingMovies:any[];
  posterPath:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private moviesService: MoviesService) {
    moviesService.getTrendingMovies().subscribe((data) => {
     this.trendingMovies = data.results;
    });
  }

  ngOnInit(): void {}
}

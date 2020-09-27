import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit {
  topRatedMovies: any[];
  posterPath:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private moviesService: MoviesService) {
    moviesService.getMovies('top_rated').subscribe((response) => {
            this.topRatedMovies = response.results;
    });
  }

  ngOnInit(): void {}
}

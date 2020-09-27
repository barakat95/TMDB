import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],
})
export class PopularMoviesComponent implements OnInit {
  popularMovies: any[];
  posterPath:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private moviesService: MoviesService) {
    moviesService.getMovies('popular').subscribe((response) => {
      this.popularMovies = response.results;
    });
  }

  ngOnInit(): void {}
}

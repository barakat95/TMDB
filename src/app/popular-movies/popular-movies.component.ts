import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],
})
export class PopularMoviesComponent implements OnInit {
  trendingMovies: any[];
  // stars: any[];
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private moviesService: MoviesService) {
    moviesService.getTrendingMovies().subscribe((response) => {
      this.trendingMovies = response.results.splice(0, 6);
      // for (let i = 0; i < this.popularMovies.length; i++) {
      //   this.stars = response.results[i].vote_average;
      //   console.log(this.stars);
      // }
      // console.log(response.results[1].vote_average);
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
// import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss'],
})
export class NowPlayingMoviesComponent implements OnInit {
    nowPlayingMovies: any[];
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private moviesService:MoviesService) {
    moviesService.getMovies('now_playing',1).subscribe((response) => {
      this.nowPlayingMovies = response.results;
    });
  }


  ngOnInit(): void {
    // $(document).ready(function() {
    //   $(".skitter-large").skitter();
    // });
  }
}

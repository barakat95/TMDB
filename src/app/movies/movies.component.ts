import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaDetailsService } from '../services/media-details.service';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  trendingMovies: any[];
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal,
    private movieDetailsService: MediaDetailsService,
  ) {
    moviesService.getTrendingMovies().subscribe((data) => {
      this.trendingMovies = data.results;
    });
  }
  ngOnInit(): void {}

  // getDetails(content) {
  //   this.movieDetailsService.open(content);
  // }
}

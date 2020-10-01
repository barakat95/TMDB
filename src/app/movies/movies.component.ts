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
  popularMovies: any[];
  pageNumber: number = 3;
  totalPages: number;
  pagination: number[] = [];
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal,
    private movieDetailsService: MediaDetailsService
  ) {
    moviesService.getMovies('popular', this.pageNumber).subscribe((data) => {
      this.popularMovies = data.results;
      this.pageNumber = data.page;
      this.totalPages = data.total_pages;
      for (let i = 1; i < data.total_pages; i++) {
        this.pagination.push(i);
      }
      console.log(this.pagination);
      // console.log(this.pageNumber);
      // console.log(this.totalPages);
    });
  }
  ngOnInit(): void {}

  // getDetails(content) {
  //   this.movieDetailsService.open(content);
  // }
}

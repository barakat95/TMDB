import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediaDetailsService } from '../services/media-details.service';
import { MoviesService } from '../services/movies.service';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  popularMovies: any[];
  pageNumber: number = 3;
  totalPages: number = 10;
  pagination: number[] = [];
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  isPageNumberChanged: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal,
    private movieDetailsService: MediaDetailsService,
    private searchService: SearchService
  ) {
    moviesService.getMovies('popular', this.pageNumber).subscribe((data) => {
      this.popularMovies = data.results;
      this.pageNumber = data.page;
      // this.totalPages = data.total_pages;
      for (let i = 1; i <= 10; i++) {
        this.pagination.push(i);
      }
    });
    // if(this.isPageNumberChanged) {
    //   this.onPageNumber()
    // }
  }
  ngOnInit(): void {}

  onPageNumber(page: number) {
    this.isPageNumberChanged = true;
    this.moviesService.getMovies('popular', page).subscribe((data) => {
      this.popularMovies = data.results;
    });
  }

  // getDetails(content) {
  //   this.movieDetailsService.open(content);
  // }

  searchText: any;
  data: any[] = [];
  search(searchText) {
    this.searchService.search(searchText).subscribe((response) => {
      this.data = response.results;
      console.log(this.data);
    });
  }
}

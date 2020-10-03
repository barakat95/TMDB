import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  pageNumber: number = 3;
  totalPages: number;
  pagination: number[] = [];
  trendingTV: any[];
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private tvService: TvService, private searchService: SearchService) {
    tvService.getTvSeries('popular', this.pageNumber).subscribe((data) => {
      this.trendingTV = data.results;
      this.pageNumber = data.page;
      this.totalPages = data.total_pages;
      for (let i = 1; i <= 10; i++) {
        this.pagination.push(i);
      }
      console.log(this.pagination);
    });
  }

  ngOnInit(): void {}

  searchText: any;
  data: any[] = [];
  search(searchText) {
    this.searchService.search(searchText).subscribe((response) => {
      this.data = response.results;
      console.log(this.data);
    });
  }

  onPageNumber(page) {
    this.tvService.getTvSeries('popular', page).subscribe((data) => {
      this.trendingTV = data.results;
    });
  }
}

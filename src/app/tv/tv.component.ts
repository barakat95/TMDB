import { Component, OnInit } from '@angular/core';
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
  posterPath:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private tvService: TvService) {
    tvService.getTvSeries('popular', this.pageNumber).subscribe((data) => {
      this.trendingTV = data.results;
      this.pageNumber = data.page;
      this.totalPages = data.total_pages;
      for (let i = 1; i < data.total_pages; i++) {
        this.pagination.push(i);
      }
      console.log(this.pagination);
    });

  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styleUrls: ['./top-rated-tv.component.scss'],
})
export class TopRatedTvComponent implements OnInit {
  topRatedTv: any[];
  results: any[];
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private tvService: TvService) {
    tvService.getTvSeries('top_rated').subscribe((response) => {
      this.topRatedTv = response.results.splice(0,10);
    });
  }

  ngOnInit(): void {}
}

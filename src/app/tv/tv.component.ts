import { Component, OnInit } from '@angular/core';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  trendingTV: any[];
  posterPath:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private tvService: TvService) {
    tvService.getTrendingSeries().subscribe((data) => {
      this.trendingTV = data.results;
    });
  }

  ngOnInit(): void {}
}

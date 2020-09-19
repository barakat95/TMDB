import { Component, OnInit } from '@angular/core';
import { TvService } from './tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
})
export class TvComponent implements OnInit {
  popularTV: any[];
  posterPath:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private tvService: TvService) {
    tvService.getTrendingTV().subscribe((data) => {
      this.popularTV = data.results;
    });
  }

  ngOnInit(): void {}
}

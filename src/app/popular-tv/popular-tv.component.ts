import { Component, OnInit } from '@angular/core';
import { TvService } from '../services/tv.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.scss']
})
export class PopularTvComponent implements OnInit {
  popularTv: any[];
  posterPath:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private tvService: TvService) {
    tvService.getTvSeries('popular').subscribe((response) => {
      this.popularTv = response.results.splice(0,6);
    });
  }

  ngOnInit(): void {
  }

}

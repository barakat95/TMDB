import { Component, OnInit } from '@angular/core';
import "@angular/compiler";
import { MoviesService } from '../services/movies.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
// import * as $ from 'jquery';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
  providers:[NgbCarouselConfig]
})
export class HomeSliderComponent implements OnInit {
  public imagesUrl:any[];
  nowPlaying:any[]=[];
  nowPlayingPoster:any[]=[];
  // poster:string;
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';

  showNavigationArrows = false;
  showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private moviesService:MoviesService,private config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.moviesService.getMovies('now_playing',1).subscribe(response=>{
      this.nowPlaying = response.results.splice(0,5);
      // for(let i=0;i<this.nowPlaying.length;i++){
      //   this.nowPlayingPoster = this.nowPlaying[i].poster_path;
      // }
    //  console.log(this.nowPlaying);
    //  console.log(this.nowPlaying[1].poster_path);
    //  this.poster = this.nowPlaying[1].poster_path;
  });
      // this.imagesUrl = [
      //  `https://image.tmdb.org/t/p/w500/${this.nowPlaying[1]?.poster_path}`,
      //   'https://d2ebzu6go672f3.cloudfront.net/media/content/images/cr/8c38e37d-e8b9-48dd-a9a8-65083a6115e5.jpg',
      //   '../../assets/images/item-1.png',
      // ];

  }
}

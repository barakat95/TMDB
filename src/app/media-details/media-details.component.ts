import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaDetailsService } from '../services/media-details.service';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
})
export class MediaDetailsComponent {
  mediaDetails: any;
  id: any;
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  movieFlag:boolean = false;
  tvFlag:boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mediaDetailsService: MediaDetailsService,
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
    mediaDetailsService.getMediaDetails('movie',this.id).subscribe((response) => {
      this.mediaDetails = response;
      this.movieFlag = true;
      // console.log(this.mediaDetails);
    });

    mediaDetailsService.getMediaDetails('tv',this.id).subscribe((response) => {
      this.mediaDetails = response;
      this.movieFlag = false;
      console.log(this.mediaDetails);
    });
  }

}

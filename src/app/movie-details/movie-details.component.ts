import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsService } from './movie-details.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any;
  id: any;
  posterPath: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieDetailsService: MovieDetailsService,
    private modalService: NgbModal
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
    movieDetailsService.getMovieDetails(this.id).subscribe((response) => {
      this.movieDetails = response;
      console.log(this.movieDetails);
    });
  }

  ngOnInit(): void {}

}

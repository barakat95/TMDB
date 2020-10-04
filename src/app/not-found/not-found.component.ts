import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotFoundService } from '../services/not-found.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit, OnDestroy {
  notFound;
  constructor(private notFoundService: NotFoundService) {}
  ngOnDestroy(): void {
    this.notFoundService.isNotFound.subscribe((response) => {
      this.notFound = !response;
    });
  }

  ngOnInit(): void {}
}

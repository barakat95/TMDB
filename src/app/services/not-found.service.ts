import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotFoundService {
isNotFound = new Subject<boolean>();
  constructor() {
    this.isNotFound.next(true);
  }
}

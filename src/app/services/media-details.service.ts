import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaDetailsService {
  constructor(private modalService: NgbModal, private httpClient: HttpClient) {}

  getMediaDetails(mediaType,id): Observable<any> {
    return this.httpClient
      .get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=cfb831865e3176bd0a48f961f155bfb5&language=en-US
`);
  }

  // closeResult = '';

  // open(content) {
  //   this.modalService
  //     .open(content, { ariaLabelledBy: 'modal-basic-title' })
  //     .result.then(
  //       (result) => {
  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       (reason) => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}

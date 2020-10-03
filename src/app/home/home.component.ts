import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
// declare var $:any;
// import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.isloginPage.next(false);
    //   $(document).ready(function () {
    //     $('.skitter-large').skitter();
    //   });
  }
}

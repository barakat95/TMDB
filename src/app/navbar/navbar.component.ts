import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  page: number;
  loginClicked = false;

  constructor(
    private authService: AuthService,
    private searchService: SearchService
  ) {
    this.authService.currentUser.subscribe((response) => {
      if (response == null) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }

  ngOnInit(): void {
    this.authService.isloginPage.subscribe(isLoginPage => {
      this.loginClicked = isLoginPage;
    })
  }

  onLogout() {
    this.authService.onLogout();
  }
  searchText: any;
  data: any[] = [];
  search(searchText) {
    this.searchService.search(searchText).subscribe((response) => {
      this.data = response.results;
      console.log(this.data);
    });
  }

  onLogin() {
    this.loginClicked = true;
  }


}

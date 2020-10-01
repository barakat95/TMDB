import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  page: number;
  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.authService.currentUser.subscribe((response) => {
      if (response == null) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }

  ngOnInit(): void {}

  onLogout() {
    this.authService.onLogout();
  }
}

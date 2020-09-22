import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private authService:AuthService) {
    this.authService.currentUser.subscribe((response)=>{
      if (response == null) {
        this.isLogin = false;
      }else{
        this.isLogin = true;
      }
    })
  }

  ngOnInit(): void {}

  onLogout(){
    this.authService.onLogout();
  }

}

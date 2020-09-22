import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject(null);
  constructor(private httpClient: HttpClient, private router:Router) {
    if (localStorage.getItem('user') != null) {
      this.currentUser.next(JSON.parse(localStorage.getItem('user')));
    }
  }

  onRegister(registerFormValue): Observable<any> {
    return this.httpClient.post(
      'https://routeegypt.herokuapp.com/signup',
      registerFormValue
    );
  }

  onLogin(loginFormValue): Observable<any> {
    return this.httpClient.post(
      'https://routeegypt.herokuapp.com/signin',
      loginFormValue
    );
  }

  onLogout() {
    if (JSON.parse(localStorage.getItem('user')) != null) {
      this.currentUser.next(null);
      localStorage.setItem('user', JSON.stringify(null));
      this.router.navigate(['/login']);
    }
  }

  saveCurrentUser(firstName, lastName, email, token) {
    let user = new User(firstName, lastName, email, token);
    this.currentUser.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}

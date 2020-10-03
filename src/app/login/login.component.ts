import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  flag: boolean = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe((param:Params)=>{
      this.authService.isloginPage.next(true);
    // })
  }

// ngOnInit(): void {
  //   this.route.params.subscribe(
  //     (params: Params) => {
  //       this.id = +params['id'];
  //       this.editMode = params['id'] != null;
  //       this.initForm();
  //     }
  //   );
  // }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  getLoginForm(loginForm) {
    return this.authService.onLogin(loginForm.value).subscribe((response) => {
      if (loginForm.valid == true) {
        console.log(response);
        if (response.message == 'success') {
          this.authService.saveCurrentUser(
            response.user.firstName,
            response.user.lastName,
            response.user.email,
            response.token
          );
          this.router.navigate(['/home']);
        }
      }
    });
  }
}

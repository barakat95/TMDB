import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss'],
})
export class RegisterationComponent implements OnInit {
  flag: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(/^[A-Z]/),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern(/^[A-Z]/),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  getRegisterForm(registerForm) {
    // console.log(registerForm.value);

    if (registerForm.valid == true) {
      this.authService.onRegister(registerForm.value).subscribe((response) => {
        console.log(response);
        if (response.message == 'success') {
          this.router.navigate(['/login']);
        } else {
          this.flag = true;
        }
      });
    }
  }
}

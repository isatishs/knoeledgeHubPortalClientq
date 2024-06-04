import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginFrom = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    //login form to login model
    if (this.loginFrom.valid) {
      let loginModel = new LoginModel(this.loginFrom.value.email, this.loginFrom.value.password);
      this.authService.login(loginModel).subscribe({
        next: resp => {
          console.log(resp.accessToken);
          //store the acessTolen in local storage
          localStorage.setItem("accessToken", resp.accessToken);
          this.router.navigateByUrl("");
        },
        error: err => {
          console.log(err);
          alert(err);
        }
      })

    }
  }

}

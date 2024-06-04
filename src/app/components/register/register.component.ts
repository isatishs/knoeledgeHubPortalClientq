import { Component } from '@angular/core';
import { Register } from '../../models/register';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // registerObj = new Register();
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  registerationCompleted: boolean = false;
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    cpassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    //register form to register model
    if (this.registerForm.valid) {
      console.log(`Password:${this.registerForm.value.password}     CPassword:${this.registerForm.value.cpassword}`)
      // let loginModel = new LoginModel(this.registerForm.value.email, this.registerForm.value.password);
      // this.authService.register(loginModel).subscribe({
      //   next: resp => {
      //   registerationCompleted = true;
      //     console.log(resp);
      //     this.router.navigateByUrl("");
      //   },
      //   error: err => {
      //     console.log(err);
      //     alert(err);
      //   }
      // })

    }
  }
}


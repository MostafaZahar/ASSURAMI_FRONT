import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../@core/auth/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'gi-log-in',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit {
  public authService = inject(AuthService);
  public router = inject(Router);
  private formBuilder = inject(FormBuilder);

  public connecting = false;
  public submitted = false;
  public loginFailed: boolean = false;

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  get getLoginForm() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

  //   this.connecting = true;
  //   this.loginFailed = false;
  //   this.authService
  //     .login(this.getLoginForm['email'].value, this.getLoginForm['password'].value)
  //     .pipe(first())
  //     .subscribe(
  //       {
  //         next: data => {
  //           this.connecting = false;
  //           this.router.navigate(['/accueil']);
  //         },
  //         error: error => {
  //           this.connecting = false;
  //           this.loginFailed = true;
  //           console.log(error);
  //         }
  //       });
   }
}

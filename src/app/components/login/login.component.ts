import { Component } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly identityService: IdentityService,
    private readonly snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });

    if (localStorage.getItem('token')) {
      this.router.navigate(['/app']);
    }
  }

  async onLogIn(): Promise<void> {
    const { username, password } = this.loginForm.value;
    try {
      await this.identityService.login(username, password);
      const user = await this.identityService.getUserProfile(username);
      this.identityService.saveUser(user);
      this.router.navigate(['/app']);
    } catch (e: any) {
      const error = e as FirebaseError;
      this.snackBar.open(error.message.split(':')[1]);
    }
  }
}

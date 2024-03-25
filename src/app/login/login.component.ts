import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ){}

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  private _lockForm = false;

  public get lockForm(){
    return this._lockForm;
  }

  public toggleForm() {
    this._lockForm = !this._lockForm;
  }

  public onLoginClick(){
    if(this.loginForm.value.username && this.loginForm.value.password){
      this.toggleForm();
      this._authService
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
          next: (v) => {
            this.toggleForm();
            this._router.navigate(['/dashboard']);
            alert(`hello, ${v.firstName}`)
          },
          error: () => {
            this.toggleForm();
            alert("login was failed");
          }
        })
    }
  }
}
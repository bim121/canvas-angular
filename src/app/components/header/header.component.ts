import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public get username() {
    return this._authService.profile?.username;
  }

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang("en");
    this.translateService.use("uk");
  }

  public isLoggedIn() {
    return this._authService.isAuthorized;
  }

  public onLogoutClick() {
    this._authService.logout();
    this._router.navigateByUrl('/');
  }

  public changeLanguage(language: string){
    this.translateService.use(language);
  }
}

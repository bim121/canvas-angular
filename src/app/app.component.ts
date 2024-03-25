import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-canvas';

  constructor(private readonly _authService: AuthService) {}

  public ngOnInit(): void {
    this._authService.restoreUserFromStorage();
  }
}

import {Component} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repair-shop-angular';

  constructor(oauthService: OAuthService) {
    oauthService.configure(environment.authConfig);
    oauthService.initImplicitFlow();
    oauthService.setupAutomaticSilentRefresh();
  }
}

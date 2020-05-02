import {Component, OnInit} from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private oauthService: OAuthService) {
    const config = new AuthConfig();
    config.tokenEndpoint = 'http://localhost:8081/auth/realms/Repair-Shop/protocol/openid-connect/token';
    config.clientId = 'sso-client';
    config.dummyClientSecret = '6385378d-1874-4fee-938e-7e46c8e80df6';
    this.oauthService.configure(config);

    this.oauthService.fetchTokenUsingPasswordFlow('marcinadd', 'marcinadd').then((resp) => {
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(
    private oauthService: OAuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.oauthService.configure(environment.authConfig);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    this.oauthService.refreshToken();
  }

  onSubmit(form) {
    this.oauthService.fetchTokenUsingPasswordFlow(form.username, form.password)
      .then(() => {
      this.router.navigate(['/']);
    }).catch(() => {
      alert('Login error');
    });
  }
}

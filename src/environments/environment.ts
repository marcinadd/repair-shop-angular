// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {HttpHeaders} from '@angular/common/http';
import {AuthConfig} from 'angular-oauth2-oidc';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  },
  authConfig: new AuthConfig({
    tokenEndpoint: 'http://localhost:8081/auth/realms/Repair-Shop/protocol/openid-connect/token',
    clientId: 'sso-client',
    showDebugInformation: true,
    redirectUri: window.location.origin + '/index.html',
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    silentRefreshTimeout: 3000,
    issuer: 'http://localhost:8081/auth/realms/sso-client',
    scope: 'profile email offline_access',
    responseType: 'code',
  }),
  currency: 'USD',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

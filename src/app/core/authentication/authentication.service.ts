import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { map, mergeMap } from 'rxjs/operators';
import { HttpService } from '../http/http.service';

export interface LoginContext {
  email: string;
  password: string;
  remember?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService, private httpService: HttpService) {}

  login(context: LoginContext): Observable<Credentials> {
    this.httpService
      .request('POST', '/auth/login', {
        body: context
      })
      .subscribe(result => {
        localStorage.setItem('accessToken', result.token);
      });

    return null;
  }

  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }

  getCurrentUser(): Observable<Credentials> {
    return this.httpService.authorizedGet('/oauth2/user').pipe(
      map(result => {
        return {
          name: result.name,
          imageUrl: result.imageUrl,
          token: localStorage.getItem('accessToken')
        };
      })
    );
  }
}

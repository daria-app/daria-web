import { Observable, of } from 'rxjs';

import { LoginContext } from './authentication.service';
import { Credentials } from './credentials.service';

export class MockAuthenticationService {
  credentials: Credentials | null = {
    name: 'test',
    imageUrl: null,
    token: '123'
  };

  login(context: LoginContext): Observable<Credentials> {
    return of(null);
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }
}

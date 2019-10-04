import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import {Logger, I18nService, untilDestroyed, CredentialsService, AuthenticationService, LoginContext} from '@app/core';

const log = new Logger('Login');

interface AuthUrls {
  facebook: string;
  google: string;
  github: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  authUrls: AuthUrls = {
    facebook: environment.facebookAuthUrl,
    google: environment.googleAuthUrl,
    github: environment.githubAuthUrl
  };

  error: object | undefined;
  loading = false;

  loginContext: LoginContext;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {
    this.loginContext = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    console.log('auth irlks', this.authUrls);
  }

  ngOnDestroy() {}

  login() {

    this.loading = true;

    this.authService.login(this.loginContext).subscribe(
      (credentials) => {
          console.log('login creds', credentials);
          this.credentialsService.setCredentials(credentials);
          this.router.navigate(['/home']);
        },
      (error) => {
          console.log('login err', error);
          this.loading = false;
          this.error = error.error;
        }
      );

  }

  onInput(event: any) {
    this.loginContext[event.target.name] = event.target.value;
    console.log(event);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService, untilDestroyed, CredentialsService } from '@app/core';

const log = new Logger('Login');

@Component({
  selector: 'app-login-redirect',
  templateUrl: './login-redirect.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CredentialsService, AuthenticationService]
})
export class LoginRedirectComponent implements OnInit {
  text: string | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {
    this.text = 'Redirecting...';
    route.queryParams.subscribe(params => {
      const { token, error } = params;
      if (token) {
        localStorage.setItem('accessToken', token);
        console.log('TOKEN ACQUIRED', token);
        authenticationService.getCurrentUser().subscribe(credentials => {
          credentialsService.setCredentials(credentials);
          router.navigate(['/home']);
        });
      } else {
        this.text = 'Token unavailable. Error: ' + error;
      }
    });
  }

  ngOnInit() {}
}

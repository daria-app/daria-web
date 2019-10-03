import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginRedirectComponent } from './login-redirect.component';
import { MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    MatInputModule,
    LoginRoutingModule,
    MatButtonModule
  ],
  declarations: [LoginComponent, LoginRedirectComponent]
})
export class LoginModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { TeachModule } from './teach/teach.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LearnModule } from '@app/learn/learn.module';
import { EditTrackModule } from '@app/teach/tracks/edit-track/edit-track.module';
import { ManageTrackModule } from '@app/teach/tracks/manage-track/manage-track.module';
import { ViewTrackModule } from '@app/learn/view-track/view-track.module';
import { PhraseModule } from '@app/teach/tracks/manage-track/phrase/phrase.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    MatSliderModule,
    ApolloModule,
    HttpLinkModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    LearnModule,
    ViewTrackModule,
    ManageTrackModule,
    EditTrackModule,
    PhraseModule,
    TeachModule,
    LoginModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        const authLink = setContext((_, { headers }) => {
          const token = localStorage.getItem('accessToken');
          return {
            headers: {
              ...headers,
              authorization: token ? `Bearer ${token}` : ''
            }
          };
        });

        return {
          cache: new InMemoryCache(),
          defaultOptions: {
            fetchPolicy: 'no-cache'
          },
          link: authLink.concat(
            httpLink.create({
              uri: 'https://local.hellodaria.com/graphql'
            })
          )
        };
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

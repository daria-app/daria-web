import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Query, Track } from '@app/types';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  getTracks() {
    const AllTracksQuery = gql`
      query AllTracks {
        tracks {
          id
          title
        }
      }
    `;

    return this.apollo.watchQuery<Query>({
      query: AllTracksQuery
    });
  }
}

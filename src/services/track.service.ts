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

  getTrack(id: string) {
    const TrackByIdQuery = gql`
      query TrackById($id: String!) {
        track(id: $id) {
          id
          title
        }
      }
    `;

    return this.apollo.watchQuery<Query>({
      query: TrackByIdQuery,
      variables: { id }
    });
  }

  saveTrack(trackInput: object) {
    const SaveTrackMutation = gql`
      mutation SaveTrack($input: TrackInput!) {
        saveTrack(input: $input) {
          id
          title
        }
      }
    `;

    console.log('sending', trackInput);
    return this.apollo.mutate({ mutation: SaveTrackMutation, variables: { input: trackInput } });
  }
}

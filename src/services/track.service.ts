import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Mutation, Query, Track } from '@app/types';
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
  _tracks: Subject<Array<Track>> = new Subject<Array<Track>>();

  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  fetchTracks() {
    this.getTracks().valueChanges.subscribe(({ data }) => {
      const { tracks } = data;
      this._tracks.next(tracks);
    });
  }

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
      query: AllTracksQuery,
      fetchPolicy: 'no-cache'
    });
  }

  getTrack(id: string) {
    const TrackByIdQuery = gql`
      query TrackById($id: String!) {
        track(id: $id) {
          id
          title
          description
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
          description
        }
      }
    `;

    console.log('sending', trackInput);
    return this.apollo.mutate<Mutation>({ mutation: SaveTrackMutation, variables: { input: trackInput } });
  }

  deleteTrack(id: string) {
    const DeleteTrackMutation = gql`
      mutation DeleteTrack($id: String!) {
        deleteTrack(id: $id) {
          id
          title
        }
      }
    `;

    console.log('deleting', id);
    return this.apollo.mutate<Mutation>({ mutation: DeleteTrackMutation, variables: { id } });
  }
}

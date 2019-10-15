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
  _managedTracks: Subject<Array<Track>> = new Subject<Array<Track>>();

  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  fetchManagedTracks() {
    this.getManagedTracks().valueChanges.subscribe(({ data }) => {
      const { managedTracks } = data;
      this._managedTracks.next(managedTracks);
    });
  }

  getTracks() {
    const AllTracksQuery = gql`
      query AllTracks {
        tracks {
          id
          title
          description
        }
      }
    `;

    return this.apollo.watchQuery<Query>({
      query: AllTracksQuery,
      fetchPolicy: 'no-cache'
    });
  }

  getFollowedTracks() {
    const FollowedTracksQuery = gql`
      query FollowedTracks {
        followedTracks {
          id
          title
          description
        }
      }
    `;

    return this.apollo.watchQuery<Query>({
      query: FollowedTracksQuery,
      fetchPolicy: 'no-cache'
    });
  }

  getAvailableTracks() {
    const AvailableTracksQuery = gql`
      query AvailableTracks {
        availableTracks {
          id
          title
          description
        }
      }
    `;

    return this.apollo.watchQuery<Query>({
      query: AvailableTracksQuery,
      fetchPolicy: 'no-cache'
    });
  }

  getManagedTracks() {
    const ManagedTracksQuery = gql`
      query ManagedTracks {
        managedTracks {
          id
          title
          description
        }
      }
    `;

    return this.apollo.watchQuery<Query>({
      query: ManagedTracksQuery,
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
          subscribed
          subscriptionId
          phrases {
            id
            text
            order
          }
        }
      }
    `;

    return this.apollo.watchQuery<Query>({
      query: TrackByIdQuery,
      variables: { id },
      fetchPolicy: 'no-cache'
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

  followTrack(trackSubscriptionInput: object) {
    const SaveTrackSubscriptionMutation = gql`
      mutation SaveTrackSubscription($input: TrackSubscriptionInput!) {
        saveTrackSubscription(input: $input) {
          id
          track {
            id
            title
          }
        }
      }
    `;

    console.log('following', trackSubscriptionInput);
    return this.apollo.mutate<Mutation>({
      mutation: SaveTrackSubscriptionMutation,
      variables: { input: trackSubscriptionInput }
    });
  }

  unfollowTrack(subscriptionId: string) {
    const DeleteTrackSubscriptionMutation = gql`
      mutation DeleteTrackSubscription($input: String!) {
        deleteTrackSubscription(input: $input) {
          id
        }
      }
    `;

    console.log('unfollowing', subscriptionId);
    return this.apollo.mutate<Mutation>({
      mutation: DeleteTrackSubscriptionMutation,
      variables: { input: subscriptionId }
    });
  }

  savePhrase(phraseInput: object) {
    const SavePhraseMutation = gql`
      mutation SavePhrase($input: PhraseInput!) {
        savePhrase(input: $input) {
          id
          trackId
          text
          order
        }
      }
    `;

    console.log('sending phrase', phraseInput);
    return this.apollo.mutate<Mutation>({ mutation: SavePhraseMutation, variables: { input: phraseInput } });
  }
}

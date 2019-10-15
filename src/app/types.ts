export interface Query {
  tracks: [Track];
  followedTracks: [Track];
  availableTracks: [Track];
  managedTracks: [Track];
  track: Track;
  user: User;
  tracksByUser: [Track];
}

export interface Mutation {
  saveTrack: Track;
  savePhrase: Phrase;
  saveTrackSubscription: TrackSubscription;
}

export interface User {
  id: string;
  username: string;
  createdAt: string;
  subscribedTracks: [Track];
  contributedTracks: [Track];
}

export interface Track {
  id: string;
  title: string;
  description: string;
  minutesPracticed: number;
  subscribers: [User];
  contributors: [User];
  subscribed: boolean;
  subscriptionId: string;
  phrases: [Phrase];
}

export interface TrackInput {
  id: string;
  title: string;
  description: string;
}

export interface TrackSubscription {
  id: string;
  track: Track;
  provider: User;
}

export interface TrackSubscriptionInput {
  trackId: string;
}

export interface Phrase {
  text: string;
  trackId: string;
  order: number;
}

export interface PhraseInput {
  text: string;
  trackId: string;
  order: number;
}

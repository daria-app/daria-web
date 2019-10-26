import { ManagePhraseComponent } from '@app/teach/tracks/manage-track/phrase/manage-phrase.component';

export interface Query {
  tracks: [Track];
  followedTracks: [Track];
  availableTracks: [Track];
  managedTracks: [Track];
  track: Track;
  user: User;
  phrase: Phrase;
  tracksByUser: [Track];
}

export interface Mutation {
  saveTrack: Track;
  savePhrase: Phrase;
  deletePhrase: Phrase;
  saveTrackSubscription: TrackSubscription;
  savePhraseComponent: PhraseComponent;
  deletePhraseComponent: PhraseComponent;
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
  id: string;
  text: string;
  trackId: string;
  order: number;
  components: PhraseComponent[];
}

export interface PhraseInput {
  id: string;
  text: string;
  trackId: string;
  order: number;
}

export interface PhraseComponent {
  id: string;
  phraseId: string;
  component: string;
  explanation: string;
}

export interface PhraseComponentInput {
  id: string;
  phraseId: string;
  component: string;
  explanation: string;
}

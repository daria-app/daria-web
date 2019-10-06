export interface Query {
  tracks: [Track];
  track: Track;
  user: User;
  tracksByUser: [Track];
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
  minutesPracticed: number;
  subscribers: [User];
  contributors: [User];
}

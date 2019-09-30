export type Query = {
  tracks: [Track];
  user(id: string): User;
  tracksByUser(userId: string): [Track];
};

export type User = {
  id: string;
  username: string;
  createdAt: string;
  subscribedTracks: [Track];
  contributedTracks: [Track];
};

export type Track = {
  id: string;
  title: string;
  minutesPracticed: number;
  subscribers: [User];
  contributors: [User];
};

import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { Track } from '../types';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  availableTracks: Track[];
  followedTracks: Track[];

  constructor(private trackService: TrackService) {}

  ngOnInit() {
    this.trackService.getFollowedTracks().valueChanges.subscribe(({ data, loading }) => {
      const { followedTracks } = data;
      this.followedTracks = followedTracks;
    });

    this.trackService.getAvailableTracks().valueChanges.subscribe(({ data, loading }) => {
      const { availableTracks } = data;
      this.availableTracks = availableTracks;
    });
  }
}

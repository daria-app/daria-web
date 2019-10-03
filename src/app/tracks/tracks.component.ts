import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { Track } from '../types';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  isLoading = false;

  tracks: Track[];

  constructor(private trackService: TrackService) {}

  ngOnInit() {
    this.isLoading = true;

    this.trackService.getTracks().valueChanges.subscribe(({ data, loading }) => {
      const { tracks } = data;
      this.tracks = tracks;
      this.isLoading = loading;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { Track } from '../types';

@Component({
  selector: 'app-tracks',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss']
})
export class TeachComponent implements OnInit {
  tracks: Track[];

  constructor(private trackService: TrackService) {
    this.trackService._tracks.subscribe(tracks => {
      this.tracks = tracks;
    });
  }

  ngOnInit() {
    this.trackService.fetchTracks();
  }
}

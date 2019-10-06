import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { Track } from '../types';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  isLoading = false;

  tracks: Track[];

  constructor(private trackService: TrackService) {}

  ngOnInit() {
    console.log('Learn cmpt loaded');
    this.isLoading = true;

    this.trackService.getTracks().valueChanges.subscribe(({ data, loading }) => {
      const { tracks } = data;
      this.tracks = tracks;
      this.isLoading = loading;
    });
  }
}

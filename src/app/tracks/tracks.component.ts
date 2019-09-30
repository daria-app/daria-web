import { Component, OnInit } from '@angular/core';
import { Observable } from 'apollo-client/util/Observable';
import { Apollo } from 'apollo-angular';

import { finalize, map } from 'rxjs/operators';
import { TrackService } from '../../services/track.service';
import { Query, Track, User } from '../types';
import gql from 'graphql-tag';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  tracks: Track[];

  constructor(private trackService: TrackService, private apollo: Apollo) {}

  ngOnInit() {
    this.isLoading = true;
    this.trackService.getTracks().valueChanges.subscribe(({ data, loading }) => {
      const { tracks } = data;
      this.tracks = tracks;
      this.isLoading = loading;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Track } from '@app/types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { TrackService } from '../../../services/track.service';

@Component({
  selector: 'app-edit-track',
  templateUrl: './view-track.component.html',
  styleUrls: ['./view-track.component.scss']
})
export class ViewTrackComponent implements OnInit {
  isLoading = false;

  error: object = null;
  track: Track = null;
  isFollowed = false;

  constructor(private trackService: TrackService, private route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    id.subscribe(trackId => {
      this.trackService.getTrack(trackId).valueChanges.subscribe(({ data, loading }) => {
        if (!data.track) {
          this.error = {
            error: 'trackNotFound',
            message: 'Track not found'
          };
        }
        this.track = data.track;
        this.isLoading = loading;
      });
    });
  }

  ngOnInit() {
    this.isLoading = true;
  }

  follow() {}
}

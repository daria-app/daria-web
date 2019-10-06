import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../../services/track.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Track } from '@app/types';

@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.component.html',
  styleUrls: ['./edit-track.component.scss']
})
export class EditTrackComponent implements OnInit {
  isLoading = false;
  error: object = null;

  track: Track = null;
  trackInput: object = {
    title: null
  };

  constructor(private trackService: TrackService, private route: ActivatedRoute) {
    this.isLoading = true;
    const id: Observable<string> = route.params.pipe(map(p => p.id));

    id.subscribe(trackId => {
      this.trackService.getTrack(trackId).valueChanges.subscribe(({ data, loading }) => {
        if (!data.track) {
          this.error = {
            error: 'trackNotFound',
            message: 'Track not found'
          };
          return;
        }
        this.track = data.track;
        Object.assign(this.trackInput, data.track);
        this.isLoading = loading;
      });
    });
  }

  ngOnInit() {}

  onInput(event: any) {
    this.trackInput[event.target.name] = event.target.value;
  }

  save() {
    this.trackService.saveTrack(this.trackInput).subscribe(({ data }) => {
      console.log('save result', data);
    });
  }
}

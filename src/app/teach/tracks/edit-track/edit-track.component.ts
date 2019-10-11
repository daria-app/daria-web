import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../../services/track.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Track, TrackInput } from '@app/types';

@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.component.html',
  styleUrls: ['./edit-track.component.scss']
})
export class EditTrackComponent implements OnInit {
  isLoading = false;
  isChanged = false;
  error: object = null;

  track: Track = null;
  trackInput: TrackInput = {
    id: null,
    title: null,
    description: null
  };

  constructor(private trackService: TrackService, private router: Router, private route: ActivatedRoute) {
    this.isLoading = true;
    const id: Observable<string> = route.params.pipe(map(p => p.id));

    id.subscribe(trackId => {
      if (!trackId) {
        return;
      }
      this.trackService.getTrack(trackId).valueChanges.subscribe(({ data, loading }) => {
        if (!data.track) {
          this.error = {
            error: 'trackNotFound',
            message: 'Track not found'
          };
          return;
        }
        this.track = data.track;
        this.trackInput = this.inputValues(this.track);
        this.isLoading = loading;
      });
    });
  }

  ngOnInit() {}

  onInput(event: any) {
    this.trackInput[event.target.name] = event.target.value;
    this.isChanged = true;
  }

  save() {
    const isNew = this.trackInput.id === null;
    this.trackService.saveTrack(this.trackInput).subscribe(({ data }) => {
      console.log('saved track', data);
      this.track = data.saveTrack;
      this.trackInput = this.inputValues(this.track);
      this.trackService.fetchTracks();
      this.isChanged = false;
      if (isNew) {
        this.router.navigateByUrl('/teach');
      }
    });
  }

  delete() {
    this.trackService.deleteTrack(this.track.id).subscribe(({ data }) => {
      console.log('deleted track', data);
      this.trackService.fetchTracks();
      this.router.navigateByUrl('/teach');
    });
  }

  inputValues(track: Track) {
    return {
      id: track.id,
      title: track.title,
      description: track.description
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../../services/track.service';
import { PhraseInput, Track } from '@app/types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-track',
  templateUrl: './manage-track.component.html',
  styleUrls: ['./manage-track.component.scss']
})
export class ManageTrackComponent implements OnInit {
  error: object = null;
  track: Track = null;
  phraseInput: PhraseInput = {
    id: null,
    text: null,
    trackId: null,
    order: 0
  };

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
        console.log('managed track', data);
        this.track = data.track;
        this.phraseInput.trackId = this.track.id;
      });
    });
  }

  ngOnInit() {}

  onPhraseInput(event: any) {
    this.phraseInput.text = event.target.value;
  }

  addPhrase() {
    console.log('add phrase', this.phraseInput);
    this.trackService.savePhrase(this.phraseInput).subscribe(({ data }) => {
      console.log('saved phrase', data);
      this.track.phrases.push(data.savePhrase);
      this.phraseInput.text = '';
      //this.track = data.saveTrack;
      //this.trackInput = this.inputValues(this.track);
      //this.trackService.fetchManagedTracks();
    });
  }
}

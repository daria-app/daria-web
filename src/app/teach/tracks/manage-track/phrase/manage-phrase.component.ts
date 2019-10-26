import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Phrase, PhraseComponentInput, PhraseComponent, PhraseInput, Track, TrackInput } from '@app/types';
import { TrackService } from '../../../../../services/track.service';

@Component({
  selector: 'app-edit-track',
  templateUrl: './manage-phrase.component.html',
  styleUrls: ['./manage-phrase.component.scss']
})
export class ManagePhraseComponent implements OnInit {
  isLoading = false;
  isChanged = false;
  error: object = null;

  phrase: Phrase = null;
  phraseInput: PhraseInput = {
    id: null,
    trackId: null,
    order: null,
    text: null
  };

  phraseComponentInput: PhraseComponentInput = {
    id: null,
    phraseId: null,
    component: null,
    explanation: null
  };

  constructor(private trackService: TrackService, private router: Router, private route: ActivatedRoute) {
    this.isLoading = true;
    const phraseId: Observable<string> = route.params.pipe(map(p => p.phraseId));

    phraseId.subscribe(id => {
      if (!id) {
        return;
      }
      this.trackService.getPhrase(id).valueChanges.subscribe(({ data, loading }) => {
        if (!data.phrase) {
          this.error = {
            error: 'phraseNotFound',
            message: 'Phrase not found'
          };
          return;
        }
        this.phrase = data.phrase;
        this.phraseInput = this.inputValues(this.phrase);
        this.isLoading = loading;
      });
    });
  }

  ngOnInit() {}

  onInput(event: any, field: string) {
    this[field][event.target.name] = event.target.value;
    this.isChanged = true;
  }

  save() {
    this.trackService.savePhrase(this.phraseInput).subscribe(({ data }) => {
      console.log('saved phrase', data);
      this.phrase = data.savePhrase;
      this.phraseInput = this.inputValues(this.phrase);
      this.isChanged = false;
    });
  }

  delete() {
    this.trackService.deletePhrase(this.phrase.id).subscribe(({ data }) => {
      console.log('deleted phrase', data);
      // this.trackService.fetchManagedTracks();
      // this.router.navigateByUrl('/teach');
    });
  }

  addPhraseComponent() {
    this.phraseComponentInput.phraseId = this.phrase.id;
    this.trackService.savePhraseComponent(this.phraseComponentInput).subscribe(({ data }) => {
      console.log('saved phrase component', data);
      this.phrase.components.push(data.savePhraseComponent);
      this.phraseComponentInput = {
        id: null,
        phraseId: this.phrase.id,
        component: null,
        explanation: null
      };
      this.isChanged = false;
    });
  }

  deletePhraseComponent(id: string) {
    this.trackService.deletePhraseComponent(id).subscribe(({ data }) => {
      console.log('deleted phrase component', data);
      this.phrase.components = this.phrase.components.filter(component => component.id !== id);
    });
  }

  inputValues(phrase: Phrase) {
    return {
      id: phrase.id,
      trackId: phrase.trackId,
      order: phrase.order,
      text: phrase.text
    };
  }
}

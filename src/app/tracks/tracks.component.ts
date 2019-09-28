import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs/operators';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private trackService: TrackService) {}

  ngOnInit() {
    this.isLoading = true;
    this.trackService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}

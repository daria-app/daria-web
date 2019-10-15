import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';

import { ViewTrackRoutingModule } from './view-track-routing.module';
import { ViewTrackComponent } from './view-track.component';
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, TranslateModule, MatButtonModule, MatIconModule, ViewTrackRoutingModule],
  declarations: [ViewTrackComponent]
})
export class ViewTrackModule {}

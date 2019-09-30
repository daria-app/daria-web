import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './tracks.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MatSliderModule, TracksRoutingModule],
  declarations: [TracksComponent]
})
export class TracksModule {}

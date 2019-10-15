import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';

import { ManageTrackRoutingModule } from './manage-track-routing.module';
import { ManageTrackComponent } from './manage-track.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ManageTrackRoutingModule
  ],
  declarations: [ManageTrackComponent]
})
export class ManageTrackModule {}

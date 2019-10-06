import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditTrackRoutingModule } from './edit-track-routing.module';
import { EditTrackComponent } from './edit-track.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    EditTrackRoutingModule
  ],
  declarations: [EditTrackComponent]
})
export class EditTrackModule {}

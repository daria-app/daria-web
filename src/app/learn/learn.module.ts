import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import { MatDividerModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatSliderModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    LearnRoutingModule
  ],
  declarations: [LearnComponent]
})
export class LearnModule {}

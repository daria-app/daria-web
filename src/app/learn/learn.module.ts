import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MatSliderModule, LearnRoutingModule],
  declarations: [LearnComponent]
})
export class LearnModule {}

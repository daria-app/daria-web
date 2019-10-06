import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';

import { TeachRoutingModule } from './teach-routing.module';
import { TeachComponent } from './teach.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, TranslateModule, MatButtonModule, MatIconModule, TeachRoutingModule],
  declarations: [TeachComponent]
})
export class TeachModule {}

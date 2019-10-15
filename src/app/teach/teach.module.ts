import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSliderModule } from '@angular/material/slider';

import { TeachRoutingModule } from './teach-routing.module';
import { TeachComponent } from './teach.component';
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, TranslateModule, MatButtonModule, MatIconModule, MatListModule, TeachRoutingModule],
  declarations: [TeachComponent]
})
export class TeachModule {}

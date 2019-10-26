import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PhraseRoutingModule } from './phrase-routing.module';
import { ManagePhraseComponent } from './manage-phrase.component';
import { MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    PhraseRoutingModule
  ],
  declarations: [ManagePhraseComponent]
})
export class PhraseModule {}

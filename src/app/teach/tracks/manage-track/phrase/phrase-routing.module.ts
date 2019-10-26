import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ManagePhraseComponent } from './manage-phrase.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'teach/tracks/:trackId/phrases/:phraseId',
      component: ManagePhraseComponent,
      data: { title: extract('Explain phrase') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PhraseRoutingModule {}

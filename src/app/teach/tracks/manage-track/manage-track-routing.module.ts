import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ManageTrackComponent } from './manage-track.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'teach/tracks/:id/manage', component: ManageTrackComponent, data: { title: extract('View track') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ManageTrackRoutingModule {}

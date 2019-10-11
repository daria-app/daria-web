import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ViewTrackComponent } from './view-track.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'learn/tracks/:id/view', component: ViewTrackComponent, data: { title: extract('View track') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ViewTrackRoutingModule {}

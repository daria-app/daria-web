import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { EditTrackComponent } from './edit-track.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'teach/tracks/:id/edit', component: EditTrackComponent, data: { title: extract('Edit track') } },
    { path: 'teach/tracks/new', component: EditTrackComponent, data: { title: extract('Edit track') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EditTrackRoutingModule {}

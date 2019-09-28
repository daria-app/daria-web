import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { TracksComponent } from './tracks.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'tracks', component: TracksComponent, data: { title: extract('Tracks') } },
    { path: 'tracks/:id', component: TracksComponent, data: { title: extract('Track') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TracksRoutingModule {}

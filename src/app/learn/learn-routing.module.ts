import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { LearnComponent } from './learn.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'learn', component: LearnComponent, data: { title: extract('Learn') } },
    { path: 'learn/tracks/:id', component: LearnComponent, data: { title: extract('Learning Track') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LearnRoutingModule {}

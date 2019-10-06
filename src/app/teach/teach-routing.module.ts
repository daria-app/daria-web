import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { TeachComponent } from './teach.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'teach', component: TeachComponent, data: { title: extract('Teach') } },
    { path: 'teach/tracks/:id', component: TeachComponent, data: { title: extract('Teaching Track') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TeachRoutingModule {}

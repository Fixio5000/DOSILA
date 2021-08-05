import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leccion1Page } from './leccion1.page';

const routes: Routes = [
  {
    path: '',
    component: Leccion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leccion1PageRoutingModule {}

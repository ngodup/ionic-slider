import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesPagerPage } from './slides-pager.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesPagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesPagerPageRoutingModule {}

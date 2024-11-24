import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProflandingPage } from './proflanding.page';

const routes: Routes = [
  {
    path: '',
    component: ProflandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProflandingPageRoutingModule {}


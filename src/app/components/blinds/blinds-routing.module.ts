import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlindsComponent } from './blinds.component';

const routes: Routes = [
  {
    path: 'blinds',
    component: BlindsComponent,
    children: [{ path: 'landing', component: BlindsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlindsRoutingModule {}

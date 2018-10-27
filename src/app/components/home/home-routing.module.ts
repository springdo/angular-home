import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HLandingComponent } from './h-landing/h-landing.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'landing', component: HLandingComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

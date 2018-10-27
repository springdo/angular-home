import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification.component';

const routes: Routes = [
  {
    path: 'notification',
    component: NotificationComponent,
    children: [{ path: 'landing', component: NotificationComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationRoutingModule } from './notification-routing.module';

@NgModule({
  imports: [CommonModule, NotificationRoutingModule],
  declarations: [NotificationComponent]
})
export class NotificationModule {}

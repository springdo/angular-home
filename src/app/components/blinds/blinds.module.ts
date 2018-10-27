import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlindsComponent } from './blinds.component';
import { BlindsRoutingModule } from './blinds-routing.module';

@NgModule({
  imports: [CommonModule, BlindsRoutingModule],
  declarations: [BlindsComponent]
})
export class BlindsModule {}

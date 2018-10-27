import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightsComponent } from './lights.component';
import { LightsRoutingModule } from './lights-routing.module';

@NgModule({
  imports: [CommonModule, LightsRoutingModule],
  declarations: [LightsComponent]
})
export class LightsModule {}

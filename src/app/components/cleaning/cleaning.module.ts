import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleaningComponent } from './cleaning.component';
import { CleaningRoutingModule } from './cleaning-routing.module';

@NgModule({
  imports: [CommonModule, CleaningRoutingModule],
  declarations: [CleaningComponent]
})
export class CleaningModule {}

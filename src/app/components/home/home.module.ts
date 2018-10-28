import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HLandingComponent } from './h-landing/h-landing.component';
import { WeatherService } from 'src/app/services/weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
  declarations: [HomeComponent, HLandingComponent],
  providers: [WeatherService]
})
export class HomeModule {}

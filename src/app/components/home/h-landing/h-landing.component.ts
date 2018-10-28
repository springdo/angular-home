import { Component, OnInit } from '@angular/core';
import { WeatherApi } from 'src/app/models/weather';
import { ForecastApi } from 'src/app/models/forecast';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-h-landing',
  templateUrl: './h-landing.component.html',
  styleUrls: ['./h-landing.component.scss']
})
export class HLandingComponent implements OnInit {
  public weather: WeatherApi;
  public forecast: ForecastApi;
  public err = false;
  public errMessage: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe(
      resp => {
        this.weather = resp;
      },
      err => {
        this.err = true;
        this.errMessage = err.message;
      }
    );
  }
}

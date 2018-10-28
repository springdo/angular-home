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
  public weatherIcon: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe(
      resp => {
        this.weather = resp;
        this.weatherIcon = this.getWeatherIcon(resp.weather[0].main);
      },
      err => {
        this.err = true;
        this.errMessage = err.message;
      }
    );
  }
  getWeatherIcon(weather) {
    switch (weather) {
      case 'Rain':
        return 'fas fa-umbrella fa-8x ';
      case 'Mist':
        return 'fas fa-cloud fa-8x';
      case 'Fog':
        return 'fas fa-cloud fa-8x';
      case 'Sun':
        return 'fas fa-sun fa-8x';
      default:
        break;
    }
  }
}

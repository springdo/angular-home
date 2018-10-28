import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ErrorHandleService } from './error-handle.service';
import { catchError } from 'rxjs/operators';
import { WeatherApi } from '../models/weather';
import { ForecastApi } from '../models/forecast';

@Injectable()
export class WeatherService {
  public environment = environment;
  constructor(
    private http: HttpClient,
    private errorService: ErrorHandleService
  ) {}

  getWeather(): Observable<WeatherApi> {
    return this.http
      .get<WeatherApi>(`${this.environment.weatherUrl}/api/weather`, {
        responseType: 'json'
      })
      .pipe(catchError(this.errorService.genericErr));
  }

  getForecast(): Observable<ForecastApi> {
    return this.http
      .get<ForecastApi>(`${this.environment.weatherUrl}/api/forecast`, {
        responseType: 'json'
      })
      .pipe(catchError(this.errorService.genericErr));
  }
}

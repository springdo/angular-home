import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ErrorHandleService } from './error-handle.service';
import { catchError } from 'rxjs/operators';
import { Weather, Forecast } from '../models/weather';

@Injectable()
export class SupportArticleService {
  public environment = environment;
  constructor(
    private http: HttpClient,
    private errorService: ErrorHandleService
  ) {}

  getWeather(): Observable<Weather> {
    return this.http
      .get<Weather>(`${this.environment.weatherUrl}/api/weather`, {
        responseType: 'json'
      })
      .pipe(catchError(this.errorService.genericErr));
  }

  getForecast(): Observable<Weather> {
    return this.http
      .get<Weather>(`${this.environment.weatherUrl}/api/forecast`, {
        responseType: 'json'
      })
      .pipe(catchError(this.errorService.genericErr));
  }
}

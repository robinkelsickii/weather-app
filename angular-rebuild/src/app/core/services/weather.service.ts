import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey

  constructor() {}
}

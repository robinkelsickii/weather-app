import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = environment.openWeatherApiKey;

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?q=${city}&appid=${this.apiKey}`);
  }

  getWeatherByZip(zip: string): Observable<any>{
    return this.http.get(`${this.baseUrl}?zip={zipcode}&appid=${this.apiKey}`);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeatherComponent } from './features/current-weather/current-weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrentWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-rebuild';
}
